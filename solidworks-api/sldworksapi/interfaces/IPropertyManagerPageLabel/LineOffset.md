---
type: property
interface: IPropertyManagerPageLabel
member: LineOffset
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
  - lineoffset
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - line
  - offset
  - start
  - char
  - int16
  - end
  - double
readonly: null
---

# IPropertyManagerPageLabel.LineOffset

Gets or sets whether to raise or lower the specified characters above or below their baselines, relative to their heights, in this PropertyManager label.

## Signature

```csharp
System.Double LineOffset( 
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

Specify: 0.0 to show the character on its baseline -1.0 to show the character 1 character below its baseline +1.0 to show the character 1 character above its baseline

## Remarks

Offsetting (i.e., raising or lowering a character above or below its baseline, relative to its height) a character allows you to show that character as a subscript or exponent in an equation.