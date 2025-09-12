---
id: asset-creation
title: How to Create an Asset
sidebar_position: 5
---

This comprehensive guide walks administrators through the process of creating assets on the Defactor platform, from initial configuration to deployment and management.

---

## Step 1: Access Asset Creation  

There are two convenient ways to access the asset creation workflow:  

**Option A: Dashboard Access**  

![Asset Creation Dashboard](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-dashboard-create-asset.png)  

Navigate to your **Assets** dashboard and locate the **"+ Create Assets"** button prominently displayed on the interface. Clicking this button will seamlessly redirect you to the **My Templates** section where the asset creation process begins.  

**Option B: Direct Navigation**  

![My Templates Navigation](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-dashboard-my-templates.png)  

Alternatively, you can navigate directly to the **My Templates** section from the main menu.

## Step 2: Choose Your Template Creation Method

Once you're in the **My Templates** section, you have three distinct approaches for creating your **template**:

### Method 1: Create Template from Scratch

![Asset Create Template from Scratch](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-create-template-from-scratch.png)  

Start with a completely blank template when you need maximum flexibility and control over every aspect of your template configuration.

**Workflow:**
1. Click the **"+" button** in the My Templates section
2. You'll be taken directly to the template configuration interface
3. Begin with empty forms for Template Name, Description, Asset Name, and Category
4. Build your template structure from the ground up using Dynamic Data and Static Data sections

### Method 2: Use Existing Template

![Assets Use Existing Template](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-use-template.png)

Select a pre-built template that closely matches your requirements with minimal to no modifications needed.

**Workflow:**
1. Browse the available pre-built templates in the My Templates section
2. Select the template that best fits your needs
3. Click **"Use Template"** to proceed directly to the asset creation process
4. The template will be applied with its predefined structure and data fields

### Method 3: Template Customization

![Assets Template Customization](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-copy-template.png)

Copy and modify an existing template to create a customized version that meets your specific needs.

**Customization Workflow:**
1. Browse available pre-built templates in the My Templates section
2. Select **"Copy Template"** for the template you want to modify
3. Click the actions menu (⋯) next to your copied template
4. Choose **"Edit"** to customize the template according to your specific needs

![Assets Template Actions](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-template-actions.png)

All three methods eventually lead to the **Fill Data** stage, where you'll use your template to create actual assets through a structured workflow that includes Fill Data, Tokenization settings, Verification (optional), and Minting phases.

### Understanding Data Types

Before diving into the template creation methods, it's important to understand the two types of data fields you'll work with:

**Dynamic Data** - These are fields that can change or vary for each asset created from this template. Dynamic data allows flexibility and customization when creating individual assets.

**Static Data** - These are fixed fields that remain constant across all assets created from this template. Static data ensures consistency and contains information that doesn't change.

The key difference is that **Dynamic Data** creates customizable fields for asset creators to fill in differently for each asset, while **Static Data** creates pre-filled, unchanging information that applies to all assets using this template.

### Configuring Data Fields

When you click **"Add Input"** under either Dynamic Data or Static Data sections, a modal form appears with the following configuration options:

![Add Input Dynamic Data](../../../../documentation/static/img/front-end/assets/how-tos/assets-how-tos-add-input-dynamic-data.png)

**Field Configuration Options:**

**Field Name** *(Required)*  
Enter a descriptive name for your data field that will be displayed to users.

**Field Type**  
Select the data type from the dropdown menu (text, number, date, etc.).

**Suffix**  
Add optional suffix indicators like **USD** or **USDC** for currency fields.

**Field Size**  
- **Half-Width**: Takes up half the available space (two fields per row)
- **Full-Width**: Takes up the full available space (one field per row)

**Placeholder**  
Add helpful placeholder text that appears inside the empty field to guide users.

**Required Field**  
Toggle between **Yes** and **No** to make the field mandatory.

**Tooltip**  
When enabled, allows you to add explanatory text that appears when users hover over an info icon.

**Form Actions:**
- **Cancel**: Closes the modal without saving changes
- **Add Input**: Saves the field configuration and adds it to your template

This form allows you to create customized data fields that will be presented to users when they create assets using your template.