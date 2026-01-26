---
type: method
interface: IWeldmentTrimExtendFeatureData
member: GetTrimmingBoundaryCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.SetTrimmingBoundary
keywords:
  - gettrimmingboundarycount
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - trimming
  - boundary
  - count
  - int32
---

# IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount

Gets the number of trimming boundaries.

## Signature

```csharp
System.Int32 GetTrimmingBoundaryCount()
```
## Parameters

None.

## Return Value

Number of trimming boundaries

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple boundaries. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
Call this method before calling
IWeldmentTrimExtendFeaturedata::IGetTrimmingBoundary

## See Also

- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.SetTrimmingBoundary`