---
type: method
interface: IWeldmentTrimExtendFeatureData
member: GetTrimmingBoundary
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of trimming boundary: swSelSOLIDBODIES SwSelFACES
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount
  - IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.SetTrimmingBoundary
keywords:
  - gettrimmingboundary
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - trimming
  - boundary
  - type
  - int32
  - object
---

# IWeldmentTrimExtendFeatureData.GetTrimmingBoundary

Gets the entities used to define the trimming boundaries.

## Signature

```csharp
System.Object GetTrimmingBoundary( 
   out System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of trimming boundary: swSelSOLIDBODIES SwSelFACES

## Return Value

Array of the entities that define the trimming boundaries

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple boundaries. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.

## See Also

- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount`
- `IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.SetTrimmingBoundary`