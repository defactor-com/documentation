---
id: assets-frontend-my-templates
title: My Templates
sidebar_position: 5
---

The **My Templates** section provides users and administrators with the ability to create and manage reusable templates for asset tokenization.  
Templates define the structure of assets by specifying required fields, static details, and dynamic inputs that must be provided when creating new assets.  

This ensures consistency across similar assets while giving flexibility for customization where needed.

---

## Dashboard Overview  

![My Templates Dashboard](../../../static/img/front-end/assets/assets-my-templates-dashboard.png)

The **My Templates Dashboard** displays a list of all templates available to the user.  
From here you can:  
- **Create a new template** from scratch  
- **Use** an existing template as-is  
- **Copy & Customize** an existing template  
- **Edit** your own templates  
- **Delete** templates you no longer need  

## Creating Templates  

There are three methods for creating a new template:

### Method 1: Create Template from Scratch  

![Create Template from Scratch](../../../static/img/front-end/assets/assets-create-template-from-scratch-empty-form.png)

Start with a blank configuration when you want maximum flexibility.  

**Workflow:**  
1. Click **+** in the My Templates section.  

![Create Template from Scratch CTA](../../../static/img/front-end/assets/assets-create-template-from-scratch-cta.png)

2. Enter **Template Name** and **Template Description**.  
3. Define **Dynamic Data** and **Static Data** fields.  

![Create Template from Scratch Add Input](../../../static/img/front-end/assets/assets-create-template-add-input-dynamic.png)

4. **Save the template to make it available for asset creation.**  

![Created Template](../../../static/img/front-end/assets/assets-created-template-with-actions.png)

### Method 2: Use an Existing Template  

![Use Existing Template](../../../static/img/front-end/assets/assets-use-template.png)

Select a pre-built template that already fits your use case.  

**Workflow:**  
1. Browse available templates.  
2. Click **Use Template** to proceed directly to asset creation.  
3. Fill in the dynamic data required for the specific asset.  

### Method 3: Copy & Customize  

![Copy Template](../../../static/img/front-end/assets/assets-copy-template.png)

Make a copy of an existing template and adjust it to fit your needs.  

**Workflow:**  
1. Find a template similar to what you need.  
2. Click **Copy Template**.  
3. Open the **actions menu (⋯)** on the copied template. 

![Edit Template](../../../static/img/front-end/assets/assets-copy-template-edit.png)

4. Select **Edit** and adjust fields as required.  

## Understanding Data Types  

Each template can contain two types of fields:  

- **Dynamic Data** – Fields that must be filled **each time** a new asset is created.  
- **Static Data** – Fields that are filled **once** when the template is created and remain fixed across all assets using that template.  

## Configuring Data Fields  

When creating or editing a template, click **Add Input** under either **Dynamic Data** or **Static Data**.  

<!-- ![Add Input Modal](../../../../static/img/front-end/assets/how-tos/assets-how-tos-add-input-dynamic-data.png) -->

### Field Configuration Options  
- **Field Name** – Display label for the field. *(Required)*  
- **Field Type** – Select from supported data types (text, number, date, etc.).  
- **Suffix** – Optional suffix (e.g., USD, %).  
- **Field Size** – Choose *Half-Width* or *Full-Width* layout.  
- **Placeholder** – Example text shown until the field is filled.  
- **Required Field** – Make the field mandatory or optional.  
- **Tooltip** – Add a short help text shown on hover.  

## Example Template  

Here is a simple **Rental Property Template** using both static and dynamic data:  

**Template Details**  
- Template Name: *Rental Property Template*  
- Template Description: *Basic template for tokenizing rental properties*  
- Asset Name: *Rental Property*  
- Asset Category: *Real Estate*  

**Dynamic Data (entered every time an asset is created):**  
1. **Property Address** – Text field, required  
2. **Monthly Rent (USD)** – Number field with USD suffix, required  

**Static Data (defined once at template creation):**  
1. **Building Type** – Residential  
2. **Country** – USA  

With this setup:  
- Each new asset created requires a unique address and rent amount.  
- All assets share the same static values (Residential, USA).  

## Template Lifecycle  

- **Create** – Build from scratch, copy, or use an existing template.  
- **Edit** – Update template fields as needed.  
- **Use** – Select a template to start creating an asset.  
- **Delete** – Remove unused or outdated templates.  

## Best Practices  

- **Keep templates focused** – Avoid adding unnecessary fields.  
- **Use clear names** – Make field labels easy to understand.  
- **Balance static vs dynamic data** – Keep static fields for consistency, dynamic fields for uniqueness.  
- **Leverage copies** – Start from a similar template to save time.  

> The **My Templates** section streamlines asset creation by providing a structured starting point, ensuring every asset follows a consistent design while leaving room for flexibility.
