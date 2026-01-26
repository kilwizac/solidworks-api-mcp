---
type: property
interface: IModelDocExtension
member: CustomPropertyBuilderTemplate
returns: System.String
parameters:
  -
    name: WeldmentTemplate
    type: System.Boolean
    description: True if a weldment part, false if not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - custompropertybuildertemplate
  - imodeldocextension
  - model
  - doc
  - extension
  - builder
  - template
  - weldment
  - boolean
  - string
readonly: null
---

# IModelDocExtension.CustomPropertyBuilderTemplate

Gets or sets the custom property builder template for this part.

## Signature

```csharp
System.String CustomPropertyBuilderTemplate( 
   System.Boolean
WeldmentTemplate
) {get; set;}
```
## Parameters

- `WeldmentTemplate` (System.Boolean): True if a weldment part, false if not (see Remarks )

## Return Value

File name of the custom property builder template (see Remarks )

## Remarks

If WeldmentTemplate is:
True, then this property gets or sets
*.wldprp
.
False, then this property gets or sets
*.prtprp
.
All custom property builder templates are stored in the file location specified in
Tools > Options > File Locations > Custom Property Files
.
This property corresponds to the setting in the Template Options dialog that appears when you click on the button next to More Properties in the Custom Properties task pane. When you create a custom property layout, a template is created. The button is activated for parts and weldments only after a custom properties tab layout is created. The weldment custom property template (
*.wldprp
) can be created or modified only if a cut list item is selected in the Cut list folder.