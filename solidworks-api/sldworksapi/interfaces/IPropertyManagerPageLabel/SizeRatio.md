---
type: property
interface: IPropertyManagerPageLabel
member: SizeRatio
returns: System.Double
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
  - sizeratio
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - size
  - ratio
  - start
  - char
  - int16
  - end
  - double
readonly: null
---

# IPropertyManagerPageLabel.SizeRatio

Gets or sets the size of the specified characters in this PropertyManager label.

## Signature

```csharp
System.Double SizeRatio( 
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

Ratio for the height of the characters relative to their expected heights; >0 increases their heights and <0 decreases their height