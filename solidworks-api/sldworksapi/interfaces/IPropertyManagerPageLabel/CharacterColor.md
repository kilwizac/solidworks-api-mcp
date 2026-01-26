---
type: property
interface: IPropertyManagerPageLabel
member: CharacterColor
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
  - charactercolor
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - character
  - color
  - start
  - char
  - int16
  - end
  - int32
readonly: null
---

# IPropertyManagerPageLabel.CharacterColor

Gets or sets the color of the specified characters in this PropertyManager label.

## Signature

```csharp
System.Int32 CharacterColor( 
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

RGB value for the text color for the specified characters; if not specified, then the system default setting for text color is used