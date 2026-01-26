---
type: property
interface: IPropertyManagerPageLabel
member: Font
returns: System.String
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
  - font
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - start
  - char
  - int16
  - end
  - string
readonly: null
---

# IPropertyManagerPageLabel.Font

Gets or sets the font for the specified characters in this PropertyManager label.

## Signature

```csharp
System.String Font( 
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

Name of the font to use for the specified characters