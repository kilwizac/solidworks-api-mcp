---
type: property
interface: IFeatureStatistics
member: FeatureUpdatePercentageTimes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureStatistics.FeatureUpdateTimes
  - IFeatureStatistics.TotalRebuildTime
keywords:
  - featureupdatepercentagetimes
  - ifeaturestatistics
  - feature
  - statistics
  - update
  - percentage
  - times
  - object
  - part
  - vb
  - net
  - vba
readonly: true
---

# IFeatureStatistics.FeatureUpdatePercentageTimes

Gets the percentages of time it takes to update (rebuild) each feature in a part document relative to the total time it takes to update all features in that part document.

## Signature

```csharp
System.Object FeatureUpdatePercentageTimes {get;}
```
## Parameters

None.

## Return Value

Array of percentages of time it takes to update (rebuild) each feature in a part document relative to the total time it takes to update all features in that part document

## Examples

- Get Part's Feature Statistics (VB.NET) (Get_Part's_Feature_Statistics_Example_VBNET.htm)
- Get Part's Feature Statistics (VBA) (Get_Part's_Feature_Statistics_Example_VB.htm)
- Get Part's Feature Statistics (C#) (Get_Part's_Feature_Statistics_Example_CSharp.htm)

## See Also

- `IFeatureStatistics.FeatureUpdateTimes`
- `IFeatureStatistics.TotalRebuildTime`