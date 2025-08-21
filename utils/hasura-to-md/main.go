package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"
)

type HasuraMetadata struct {
	Metadata struct {
		Actions     []Action    `json:"actions"`
		CustomTypes CustomTypes `json:"custom_types"`
	} `json:"metadata"`
}

type Action struct {
	Name        string       `json:"name"`
	Definition  Definition   `json:"definition"`
	Comment     string       `json:"comment,omitempty"`
	Permissions []Permission `json:"permissions,omitempty"`
}

type Permission struct {
	Role string `json:"role"`
}

type Definition struct {
	Handler          string            `json:"handler"`
	OutputType       string            `json:"output_type"`
	Arguments        []Argument        `json:"arguments,omitempty"`
	Type             string            `json:"type,omitempty"`
	RequestTransform *RequestTransform `json:"request_transform,omitempty"`
}

type RequestTransform struct {
	URL         string            `json:"url,omitempty"`
	QueryParams map[string]string `json:"query_params,omitempty"`
	Method      string            `json:"method,omitempty"`
}

type Argument struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

type CustomTypes struct {
	InputObjects []TypeObject `json:"input_objects"`
	Objects      []TypeObject `json:"objects"`
	Scalars      []TypeObject `json:"scalars,omitempty"`
}

type TypeObject struct {
	Name        string  `json:"name"`
	Fields      []Field `json:"fields,omitempty"`
	Description string  `json:"description,omitempty"`
}

type Field struct {
	Name        string `json:"name"`
	Type        string `json:"type"`
	Description string `json:"description,omitempty"`
}

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Usage: go run main.go <hasura_metadata.json>")
	}

	filename := os.Args[1]

	data, err := os.ReadFile(filename)
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	var metadata HasuraMetadata
	if err := json.Unmarshal(data, &metadata); err != nil {
		log.Fatalf("Error parsing JSON: %v", err)
	}

	doc := generateDocumentation(metadata)

	outputFile := "hasura-actions-documentation.md"
	if err := os.WriteFile(outputFile, []byte(doc), 0644); err != nil {
		log.Fatalf("Error writing documentation: %v", err)
	}

	fmt.Printf("Documentation generated successfully: %s\n", outputFile)
}

func generateDocumentation(metadata HasuraMetadata) string {
	var doc strings.Builder

	// Create type lookup maps
	inputTypes := make(map[string]TypeObject)
	outputTypes := make(map[string]TypeObject)

	for _, inputObj := range metadata.Metadata.CustomTypes.InputObjects {
		inputTypes[inputObj.Name] = inputObj
	}
	for _, obj := range metadata.Metadata.CustomTypes.Objects {
		outputTypes[obj.Name] = obj
	}

	// Generate actions documentation
	if len(metadata.Metadata.Actions) > 0 {
		for _, action := range metadata.Metadata.Actions {
			doc.WriteString(fmt.Sprintf("### %s\n\n", action.Name))

			if action.Comment != "" {
				doc.WriteString(fmt.Sprintf("%s\n\n", action.Comment))
			}

			// Use request_transform URL if available, otherwise use handler
			handlerURL := action.Definition.Handler
			if action.Definition.RequestTransform != nil && action.Definition.RequestTransform.URL != "" {
				// Replace template variables with example values
				transformURL := action.Definition.RequestTransform.URL
				transformURL = strings.ReplaceAll(transformURL, "{{$base_url}}", "{{BASE_RESTFUL_URL}}")
				transformURL = strings.ReplaceAll(transformURL, "{{$body.input.", "")
				// Remove common template patterns to make URL cleaner
				transformURL = strings.ReplaceAll(transformURL, ".contractName}}", "")
				transformURL = strings.ReplaceAll(transformURL, ".network}}", "")
				handlerURL = transformURL
			}
			doc.WriteString(fmt.Sprintf("**Handler URL:** `%s`\n\n", handlerURL))

			if action.Definition.Type != "" {
				doc.WriteString(fmt.Sprintf("**Action Type:** `%s`\n\n", action.Definition.Type))
			}

			// Permissions
			if len(action.Permissions) > 0 {
				doc.WriteString("**Permissions:** ")
				roles := make([]string, len(action.Permissions))
				for i, perm := range action.Permissions {
					roles[i] = fmt.Sprintf("`%s`", perm.Role)
				}
				doc.WriteString(fmt.Sprintf("%s\n\n", strings.Join(roles, ", ")))
			}

			// Input Parameters - directly from action arguments
			if len(action.Definition.Arguments) > 0 {
				doc.WriteString("#### Input Parameters\n\n")
				for _, arg := range action.Definition.Arguments {
					doc.WriteString(fmt.Sprintf("**%s** (`%s`)\n\n", arg.Name, arg.Type))

					// Generate JSON example for input type
					cleanArgType := strings.TrimSuffix(arg.Type, "!")
					if inputType, exists := inputTypes[cleanArgType]; exists {
						doc.WriteString("```json\n")

						// Check if we should wrap the input in the argument name
						wrapperField := extractWrapperField(action, arg.Name)
						if wrapperField != "" {
							jsonExample := generateJSONExample(inputType, inputTypes, outputTypes, true)
							wrappedJSON := fmt.Sprintf("{\n  \"%s\": %s\n}", wrapperField, jsonExample)
							formattedJSON := formatJSON(wrappedJSON)
							doc.WriteString(formattedJSON)
						} else {
							jsonExample := generateJSONExample(inputType, inputTypes, outputTypes, true)
							formattedJSON := formatJSON(jsonExample)
							doc.WriteString(formattedJSON)
						}

						doc.WriteString("\n```\n\n")
					}
				}
			}

			// Response
			doc.WriteString("#### Response\n\n")
			doc.WriteString(fmt.Sprintf("**Type:** `%s`\n\n", action.Definition.OutputType))

			// Generate JSON example for output type
			if outputType, exists := outputTypes[action.Definition.OutputType]; exists {
				doc.WriteString("```json\n")
				jsonExample := generateJSONExample(outputType, inputTypes, outputTypes, false)
				formattedJSON := formatJSON(jsonExample)
				doc.WriteString(formattedJSON)
				doc.WriteString("\n```\n\n")
			}

			doc.WriteString("---\n\n")
		}
	}

	return doc.String()
}

func extractWrapperField(action Action, argName string) string {
	// Check if there's a request_transform with references to the argument
	if action.Definition.RequestTransform != nil {
		// Check query_params for patterns like "{{$body.input.plan.network}}"
		for _, value := range action.Definition.RequestTransform.QueryParams {
			if strings.Contains(value, fmt.Sprintf("$body.input.%s.", argName)) {
				return argName
			}
		}

		// Check URL for patterns like "{{$body.input.plan.contractName}}"
		if action.Definition.RequestTransform.URL != "" && strings.Contains(action.Definition.RequestTransform.URL, fmt.Sprintf("$body.input.%s.", argName)) {
			return argName
		}
	}

	// Default: return the argument name if it seems to be a wrapper
	// This covers cases where the GraphQL variable name matches the wrapper field
	return argName
}

func generateJSONExample(typeObj TypeObject, inputTypes, outputTypes map[string]TypeObject, isInput bool) string {
	var result strings.Builder
	result.WriteString("{\n")

	for i, field := range typeObj.Fields {
		result.WriteString(fmt.Sprintf("  \"%s\": ", field.Name))
		result.WriteString(generateFieldValue(field.Type, inputTypes, outputTypes, isInput))

		if i < len(typeObj.Fields)-1 {
			result.WriteString(",")
		}
		result.WriteString("\n")
	}

	result.WriteString("}")
	return result.String()
}

func generateFieldValue(fieldType string, inputTypes, outputTypes map[string]TypeObject, isInput bool) string {
	// Handle required types (ending with !)
	required := strings.HasSuffix(fieldType, "!")
	if required {
		fieldType = strings.TrimSuffix(fieldType, "!")
	}

	// Handle array types (wrapped in [])
	if strings.HasPrefix(fieldType, "[") && strings.HasSuffix(fieldType, "]") {
		innerType := strings.Trim(fieldType, "[]")
		innerValue := generateFieldValue(innerType, inputTypes, outputTypes, isInput)
		return fmt.Sprintf("[%s]", innerValue)
	}

	// Check for custom types
	if isInput {
		if customType, exists := inputTypes[fieldType]; exists {
			return generateJSONExample(customType, inputTypes, outputTypes, isInput)
		}
	} else {
		if customType, exists := outputTypes[fieldType]; exists {
			return generateJSONExample(customType, inputTypes, outputTypes, isInput)
		}
	}

	// Handle scalar types
	switch fieldType {
	case "String":
		return "\"string\""
	case "Int":
		return "0"
	case "Float":
		return "0.0"
	case "Boolean":
		return "false"
	case "ID":
		return "\"id\""
	default:
		return "\"value\""
	}
}

// Formats json with proper indentation
func formatJSON(jsonStr string) string {
	var jsonObj interface{}
	if err := json.Unmarshal([]byte(jsonStr), &jsonObj); err != nil {
		return jsonStr
	}

	formattedBytes, err := json.MarshalIndent(jsonObj, "", "  ")
	if err != nil {
		return jsonStr
	}

	return string(formattedBytes)
}
