---
type: property
interface: IFeatureStatistics
member: FeatureUpdateTimes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureStatistics.FeatureUpdatePercentageTimes
  - IFeatureStatistics.TotalRebuildTime
keywords:
  - featureupdatetimes
  - ifeaturestatistics
  - feature
  - statistics
  - update
  - times
  - object
  - part
  - vb
  - net
  - vba
readonly: true
---

# IFeatureStatistics.FeatureUpdateTimes

Gets the times, in seconds, it takes to update (rebuild) each feature in a part document.

## Signature

```csharp
System.Object FeatureUpdateTimes {get;}
```
## Parameters

None.

## Return Value

Array of times, in seconds, it takes to udpate (rebuild) each feature in a part document

## Examples

- Get Part's Feature Statistics (VB.NET) (Get_Part's_Feature_Statistics_Example_VBNET.htm)
- Get Part's Feature Statistics (VBA) (Get_Part's_Feature_Statistics_Example_VB.htm)
- Get Part's Feature Statistics (C#) (Get_Part's_Feature_Statistics_Example_CSharp.htm)

## See Also

- `IFeatureStatistics.FeatureUpdatePercentageTimes`
- `IFeatureStatistics.TotalRebuildTime`