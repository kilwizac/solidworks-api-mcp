---
type: property
interface: ICircularPatternFeatureData
member: Spacing2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.EqualSpacing2
  - ICircularPatternFeatureData.Spacing
  - ICircularPatternFeatureData.TotalInstances2
keywords:
  - spacing2
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - double
  - create
  - bidirectional
  - vb
  - net
  - vba
readonly: null
---

# ICircularPatternFeatureData.Spacing2

Gets or sets the spacing between pattern instances in Direction 2 of this bidirectional circular pattern feature.

## Signature

```csharp
System.Double Spacing2 {get; set;}
```
## Parameters

None.

## Return Value

Distance in radians between pattern instances in Direction 2

## Remarks

This property is only available when:
ICircularPatternFeatureData::Direction2
is true, and
ICircularPatternFeatureData::Symmetric
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create Bidirectional Circular Pattern Feature (C#) (Create_Bidirectional_Circular_Pattern_Feature_Example_CSharp.htm)
- Create Bidirectional Circular Pattern Feature (VB.NET) (Create_Bidirectional_Circular_Pattern_Feature_Example_VBNET.htm)
- Create Bidirectional Circular Pattern Feature (VBA) (Create_Bidirectional_Circular_Pattern_Feature_Example_VB.htm)

## See Also

- `ICircularPatternFeatureData.EqualSpacing2`
- `ICircularPatternFeatureData.Spacing`
- `ICircularPatternFeatureData.TotalInstances2`