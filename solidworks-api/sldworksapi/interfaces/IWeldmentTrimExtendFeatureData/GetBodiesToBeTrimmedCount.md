---
type: method
interface: IWeldmentTrimExtendFeatureData
member: GetBodiesToBeTrimmedCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary
keywords:
  - getbodiestobetrimmedcount
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - bodies
  - trimmed
  - count
  - int32
---

# IWeldmentTrimExtendFeatureData.GetBodiesToBeTrimmedCount

Gets the number of bodies to trim.

## Signature

```csharp
System.Int32 GetBodiesToBeTrimmedCount()
```
## Parameters

None.

## Return Value

Number of bodies to trim

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple bodies to trim. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
Call this method before calling
IWeldmentTrimExtendFeatureData::IGetBodiesToBeTrimmed
to get the size of the array for that method.

## See Also

- `IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary`