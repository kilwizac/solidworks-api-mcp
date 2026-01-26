---
type: property
interface: IPropertyManagerPageLabel
member: Bold
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
  - bold
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

# IPropertyManagerPageLabel.Bold

Gets or sets whether the range of specified characters are bolded in this ProperytManager label.

## Signature

```csharp
System.Boolean Bold( 
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

TRUE to bold the specified range of characters, FALSE to not