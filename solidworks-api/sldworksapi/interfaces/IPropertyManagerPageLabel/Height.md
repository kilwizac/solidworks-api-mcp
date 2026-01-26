---
type: property
interface: IPropertyManagerPageLabel
member: Height
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - height
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - int16
readonly: null
---

# IPropertyManagerPageLabel.Height

Gets or sets the height of this label.

## Signature

```csharp
System.Int16 Height {get; set;}
```
## Parameters

None.

## Return Value

Height of label in dialog box units; defaults to 8

## Remarks

You can only set this property before the PropertyManager page is displayed.
Because SOLIDWORKS sizes the label appropriately based on the text it contains, you should not have to use this property. However, if the label does not contain text, then using this property might be useful.