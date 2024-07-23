import {
  Collection,
  CollectionDefinition,
  ItemDefinition,
  ItemGroupDefinition,
} from "postman-collection";
import fs from "fs";
import { program } from "commander";

const fsp = require("fs").promises;

program
  .option(
    "-o, --output <char>",
    "output path where GraphQL.md and RESTful.md will be save",
    ""
  )
  .option(
    "-i, --input <char>",
    "postman collection json file",
    "collection.json"
  )
  .option("--ignore <char...>", "folders to ignore", []);
program.parse();

const options = program.opts();

const isGraphQL = (postmanItem: ItemDefinition) =>
  postmanItem?.request?.body?.mode === "graphql";

const isFolder = (postmanItem: ItemGroupDefinition) =>
  Array.isArray(postmanItem?.item);

const findEndpoint = (
  postmanItem: ItemGroupDefinition,
  name: string
): ItemDefinition | undefined => {
  if (postmanItem.name === name) {
    return postmanItem as ItemDefinition;
  }
  if (isFolder(postmanItem) && postmanItem.item?.length) {
    for (const subItem of postmanItem.item) {
      const endpointItem = findEndpoint(subItem, name);

      if (!endpointItem) continue;

      return endpointItem;
    }
  }
};

const formatJSON = (text: string) => (text === "{\n\n}" ? "{}" : text);

const formatText = (text: string) =>
  text
    ?.replace(/\\`/g, "`")
    ?.replace("``` ", "```")
    ?.replace("\n ```", "```")
    ?.replace(/<(\/?)code>/g,"`")
    ?.trim();

const restfulToGraphQLRoute = (route: string) =>
  route?.replace(/[-\/](.)/g, (_, c) => c.toUpperCase());

const graphQLToRestfulRoute = (route: string) =>
  route
    ?.replace(/([A-Z])/, (_, c) => "/" + c.toLowerCase())
    ?.replace(/([A-Z])/g, (_, c) => "-" + c.toLowerCase());

const transformRoute = (route: string, isGraphQL: boolean) =>
  isGraphQL ? graphQLToRestfulRoute(route) : restfulToGraphQLRoute(route);

const getRouteName = (route: string) =>
  route
    ?.replace(/^[^A-Z]*([A-Z])/, "$1")
    ?.replace(/.+\//g, "-")
    ?.replace(/([A-Z])/g, (_, c) => " " + c)
    ?.replace(/-(.)/g, (_, c) => " " + c.toUpperCase())
    ?.trim();

const getHeading = (number: number) =>
  number > 0 && number < 7 ? "#".repeat(number) : "";

const getHeader = (options: Record<string, any>) => {
  return (
    Object.keys(options).reduce(
      (header, key) => header + key + ": " + options[key] + "\n",
      "---\n"
    ) + "---\n"
  );
};

const getUrl = (postmanItem: ItemDefinition) => {
  if (isGraphQL(postmanItem)) {
    return "**GraphQL URL**: `{{BASE_URL}}/v1/graphql`";
  } else {
    return `**Request URL**: \`{{BASE_RESTFUL_URL}}/${postmanItem.name}\``;
  }
};

const extractText = (text: string, label: string) => {
  if (!text) return '';

  const startIndex = text.indexOf(`**${label}**`);
  const offset = label.length + 4;

  if (startIndex < 0) return "";

  const endIndex = text.indexOf("**", startIndex + offset);

  return text.substring(
    startIndex + offset,
    endIndex < 0 ? text.length : endIndex
  );
};

const getResponseBlockCode = (
  postmanItem: ItemDefinition,
  responseLabel: string
) => {
  let response = postmanItem.response?.[0]?.body;

  if (!response) {
    const description: any = postmanItem?.request?.description;
    const content = description?.content;

    response = formatText(extractText(content, responseLabel));

    if (!response) return "";
  } else {
    response = "```json\n" + `${response}` + "\n```";
  }

  return `**${responseLabel}**` + "\n\n" + response;
};

const getDescriptionTextBlock = (postmanItem: ItemDefinition) => {
  const postmanDescription: any = postmanItem?.request?.description;
  const descriptionIndex = postmanDescription?.content?.indexOf("\n**");
  const description =
    descriptionIndex > -1
      ? postmanDescription?.content?.substring(0, descriptionIndex)
      : "";

  return formatText(description);
};

const getRequestBody = (postmanItem: ItemDefinition) => {
  let requestBody = "";
  let content = "";

  if (isGraphQL(postmanItem)) {
    const graphQLrequestBody: any = postmanItem?.request?.body;
    const graphQLBody = graphQLrequestBody?.graphql?.query || "{}";

    requestBody = graphQLrequestBody?.graphql?.variables || "{}";

    content += "**GraphQL Body**" + "\n\n";
    content += "```graphql\n" + `${formatJSON(graphQLBody)}` + "\n```" + "\n\n";
    content += "**GraphQL Variables**" + "\n\n";
  } else {
    requestBody = postmanItem?.request?.body?.raw || "{}";
    content += "**Request Body**" + "\n\n";
  }

  content += "```json\n" + `${formatJSON(requestBody)}` + "\n```";

  return content;
};

const getRoles = (postmanItem: ItemDefinition, rolesLabel: string) => {
  const description: any = postmanItem?.request?.description;
  const roles = extractText(description?.content || "", rolesLabel);

  return roles ? "**Roles**" + roles.replace(/\n/g, "") : "";
};

const getMarkdownEndpointDetails = (
  postmanItem: ItemDefinition,
  additionalContext: ItemGroupDefinition | ItemDefinition,
  level: number
) => {
  const responseLabel = "Response";
  const rolesLabel = "Roles";

  if (!postmanItem?.request?.description) {
    const additionalData = findEndpoint(
      additionalContext,
      transformRoute(postmanItem.name || "", isGraphQL(postmanItem))
    );
    if (!postmanItem.request) {
      postmanItem.request = additionalData?.request;
    } else {
      postmanItem.request.description = additionalData?.request?.description;
    }
  }

  let content =
    `${getHeading(level)} \`${getRouteName(postmanItem.name || "")}\`` + "\n\n";
  content += getDescriptionTextBlock(postmanItem) + "\n\n";
  content +=
    `**HTTP Request Method**: ${postmanItem?.request?.method}` + "\n\n";
  content += getRoles(postmanItem, rolesLabel) + "\n\n";
  content += getUrl(postmanItem) + "\n\n";
  content += getRequestBody(postmanItem) + "\n\n";
  content += getResponseBlockCode(postmanItem, responseLabel) + "\n";

  return content;
};

const getMarkdownFileText = (
  postmanItem: ItemGroupDefinition | ItemDefinition,
  additionalContext: ItemGroupDefinition | ItemDefinition,
  level: number,
  ignoreFolders: string[]
) => {
  if (isFolder(postmanItem)) {
    if (postmanItem.name && ignoreFolders.includes(postmanItem.name)) return "";

    let content = "";

    if (level > 1) {
      content = `${getHeading(level)} ${postmanItem.name}\n`;
    }

    const postmanDescription: any = postmanItem.description;

    if (postmanDescription?.content) {
      content += postmanDescription.content + "\n";
    }

    (postmanItem as ItemGroupDefinition)?.item?.forEach((subItem) => {
      content +=
        "\n" +
        getMarkdownFileText(
          subItem,
          additionalContext,
          level + 1,
          ignoreFolders
        );
    });

    return content;
  } else {
    return getMarkdownEndpointDetails(
      postmanItem as ItemDefinition,
      additionalContext,
      level
    );
  }
};

const generateDocumentation = (
  collectionData: CollectionDefinition,
  folder: ItemGroupDefinition | ItemDefinition,
  additionalContext: ItemGroupDefinition | ItemDefinition,
  position: number,
  ignoreFolders: string[]
) => {
  const data: any = collectionData;
  const description = data?.info?.description?.content
    ? "\n\n" + formatText(data?.info?.description?.content) + "\n"
    : "";

  const header = getHeader({
    title: `Endpoints List ${folder.name} API`,
    sidebar_position: position,
  });

  return (
    header +
    description +
    getMarkdownFileText(folder, additionalContext, 1, ignoreFolders)
  );
};

try {
  const collectionInstance = new Collection(
    JSON.parse(fs.readFileSync(options.input).toString())
  );

  const data = collectionInstance.toJSON();

  const foldersNames = ["RESTful", "GraphQL"];
  const folders =
    data?.item?.filter((item) => foldersNames.includes(item.name || "")) || [];

  folders.forEach((folder, index) => {
    const additionalContext = folders[(index + 1) % folders.length];
    const result = generateDocumentation(
      data,
      folder,
      additionalContext,
      foldersNames.findIndex((name) => name === folder.name) + 1,
      options.ignore
    );
    const folderName = folder.name?.toLocaleLowerCase() + ".md";
    const folderPath = options.output + folderName;

    fsp.writeFile(folderPath, result, "utf8");
    console.log(`File ${folderPath} saved`);
  });
} catch (error) {
  if (error instanceof SyntaxError) {
    throw new Error("Wrong Postman Collection format");
  }
  throw error;
}
