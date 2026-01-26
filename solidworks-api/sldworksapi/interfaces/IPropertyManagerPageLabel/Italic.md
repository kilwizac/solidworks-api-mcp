---
type: property
interface: IPropertyManagerPageLabel
member: Italic
returns: System.Boolean
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
  - italic
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - start
  - char
  - int16
  - end
  - boolean
readonly: null
---

# IPropertyManagerPageLabel.Italic

Gets or sets whether to italicize the specified range of characters in this PropertyManager label.

## Signature

```csharp
System.Boolean Italic( 
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

True to italicize the specified range of characters, false to not