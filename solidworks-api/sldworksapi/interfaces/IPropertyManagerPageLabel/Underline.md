---
type: property
interface: IPropertyManagerPageLabel
member: Underline
returns: System.Int32
parameters:
  -
    name: StartChar
    type: System.Int16
    description: 0-based index value of start character
  -
    name: EndChar
    type: System.Int16
    description: 0-based index value of end character
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - underline
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - start
  - char
  - int16
  - end
  - int32
readonly: null
---

# IPropertyManagerPageLabel.Underline

Gets or sets whether to apply the specified underline style to the specified range of characters in this PropertyManager label.

## Signature

```csharp
System.Int32 Underline( 
   System.Int16
StartChar
,
   System.Int16
EndChar
) {get; set;}
```
## Parameters

- `StartChar` (System.Int16): 0-based index value of start character
- `EndChar` (System.Int16): 0-based index value of end character

## Return Value

Underline style as defined in swPropMgrPageLabelUnderlineStyle_e