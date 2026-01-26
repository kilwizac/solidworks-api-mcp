---
type: property
interface: ICircularPatternFeatureData
member: EqualSpacing2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.EqualSpacing
  - ICircularPatternFeatureData.Spacing2
  - ICircularPatternFeatureData.TotalInstances2
keywords:
  - equalspacing2
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - equal
  - spacing2
  - boolean
  - create
  - bidirectional
  - vb
  - net
  - vba
readonly: null
---

# ICircularPatternFeatureData.EqualSpacing2

Gets or sets whether the pattern instances in Direction 2 are equally spaced in this bidirectional circular pattern feature.

## Signature

```csharp
System.Boolean EqualSpacing2 {get; set;}
```
## Parameters

None.

## Return Value

True to use equal spacing in Direction 2, false to not

## Remarks

This property is only available when:
ICircularPatternFeatureData::Direction2
is true and
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

- `ICircularPatternFeatureData.EqualSpacing`
- `ICircularPatternFeatureData.Spacing2`
- `ICircularPatternFeatureData.TotalInstances2`