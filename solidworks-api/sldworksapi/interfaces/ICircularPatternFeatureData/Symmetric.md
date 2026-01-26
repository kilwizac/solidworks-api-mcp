---
type: property
interface: ICircularPatternFeatureData
member: Symmetric
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.EqualSpacing2
  - ICircularPatternFeatureData.Spacing2
  - ICircularPatternFeatureData.TotalInstances2
keywords:
  - symmetric
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - boolean
  - create
  - bidirectional
  - vb
  - net
  - vba
readonly: null
---

# ICircularPatternFeatureData.Symmetric

Gets or sets whether to create a symmetric or asymmetric circular pattern feature in Direction 2.

## Signature

```csharp
System.Boolean Symmetric {get; set;}
```
## Parameters

None.

## Return Value

True to create a symmetric circular pattern feature in Direction 2, false to create an asymmetrical circular pattern feature in Direction 2

## Remarks

This property is only available when
ICircularPatternFeatureData::Direction2
is true.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create Bidirectional Circular Pattern Feature (C#) (Create_Bidirectional_Circular_Pattern_Feature_Example_CSharp.htm)
- Create Bidirectional Circular Pattern Feature (VB.NET) (Create_Bidirectional_Circular_Pattern_Feature_Example_VBNET.htm)
- Create Bidirectional Circular Pattern Feature (VBA) (Create_Bidirectional_Circular_Pattern_Feature_Example_VB.htm)

## See Also

- `ICircularPatternFeatureData.EqualSpacing2`
- `ICircularPatternFeatureData.Spacing2`
- `ICircularPatternFeatureData.TotalInstances2`