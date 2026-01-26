---
type: property
interface: ICircularPatternFeatureData
member: TotalInstances2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.EqualSpacing2
  - ICircularPatternFeatureData.Spacing2
  - ICircularPatternFeatureData.TotalInstances
keywords:
  - totalinstances2
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - total
  - instances2
  - int32
  - create
  - bidirectional
  - vb
  - net
  - vba
readonly: null
---

# ICircularPatternFeatureData.TotalInstances2

Gets or sets the total number of pattern instances in Direction 2 of this bidirectional circular pattern feature.

## Signature

```csharp
System.Int32 TotalInstances2 {get; set;}
```
## Parameters

None.

## Return Value

Total number of pattern instances in Direction 2

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
- `ICircularPatternFeatureData.Spacing2`
- `ICircularPatternFeatureData.TotalInstances`