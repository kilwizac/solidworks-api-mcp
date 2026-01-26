---
type: method
interface: IWeldmentTrimExtendFeatureData
member: IGetTrimmingBoundary
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of trimming boundaries
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
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.SetTrimmingBoundary
keywords:
  - igettrimmingboundary
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
  - type
  - object
---

# IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary

Gets the entities used to define the trimming boundaries.

## Signature

```csharp
System.Object IGetTrimmingBoundary( 
   System.Int32
Count
,
   out System.Int32
Type
)
```
## Parameters

- `Count` (System.Int32): Number of trimming boundaries
- `Type` (System.Int32): Type of trimming boundary: swSelSOLIDBODIES SwSelFACES

## Return Value

in-process, unmanaged C++: Pointer to an array of entities that define the trimming boundaries VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple boundaries. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
Before calling this method, call
IWeldmentTrimExtendFeatureData::GetTrimmingBoundaryCount
to get Count.

## See Also

- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.SetTrimmingBoundary`