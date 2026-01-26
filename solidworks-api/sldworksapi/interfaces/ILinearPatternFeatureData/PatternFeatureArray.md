---
type: property
interface: ILinearPatternFeatureData
member: PatternFeatureArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.GetPatternFeatureCount
  - ILinearPatternFeatureData.IGetPatternFeatureArray
  - ILinearPatternFeatureData.ISetPatternFeatureArray
keywords:
  - patternfeaturearray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - array
  - object
  - change
  - vb
  - net
  - vba
readonly: null
---

# ILinearPatternFeatureData.PatternFeatureArray

Gets or sets the seed features in this linear pattern feature.

## Signature

```csharp
System.Object PatternFeatureArray {get; set;}
```
## Parameters

None.

## Return Value

Array of features for this pattern

## Remarks

This property is valid only if
ILinearPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Change Linear Pattern (C#) (Change_Linear_Pattern_Example_CSharp.htm)
- Change Linear Pattern (VB.NET) (Change_Linear_Pattern_Example_VBNET.htm)
- Change Linear Pattern (VBA) (Change_Linear_Pattern_Example_VB.htm)

## See Also

- `ILinearPatternFeatureData.GetPatternFeatureCount`
- `ILinearPatternFeatureData.IGetPatternFeatureArray`
- `ILinearPatternFeatureData.ISetPatternFeatureArray`