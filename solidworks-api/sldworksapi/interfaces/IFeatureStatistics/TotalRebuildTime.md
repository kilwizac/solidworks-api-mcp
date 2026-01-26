---
type: property
interface: IFeatureStatistics
member: TotalRebuildTime
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureStatistics.FeatureUpdatePercentageTimes
  - IFeatureStatistics.FeatureUpdateTimes
keywords:
  - totalrebuildtime
  - ifeaturestatistics
  - feature
  - statistics
  - total
  - rebuild
  - time
  - double
  - part
  - vb
  - net
  - vba
readonly: true
---

# IFeatureStatistics.TotalRebuildTime

Gets the time, in seconds, it takes to rebuild (update) all features in a part document.

## Signature

```csharp
System.Double TotalRebuildTime {get;}
```
## Parameters

None.

## Return Value

Time, in seconds, it takes to rebuild (update) all features

## Examples

- Get Part's Feature Statistics (VB.NET) (Get_Part's_Feature_Statistics_Example_VBNET.htm)
- Get Part's Feature Statistics (VBA) (Get_Part's_Feature_Statistics_Example_VB.htm)
- Get Part's Feature Statistics (C#) (Get_Part's_Feature_Statistics_Example_CSharp.htm)

## See Also

- `IFeatureStatistics.FeatureUpdatePercentageTimes`
- `IFeatureStatistics.FeatureUpdateTimes`