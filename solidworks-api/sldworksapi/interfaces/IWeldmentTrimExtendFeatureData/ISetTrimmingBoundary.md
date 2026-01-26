---
type: method
interface: IWeldmentTrimExtendFeatureData
member: ISetTrimmingBoundary
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of trimming boundaries
  -
    name: TrimBoundArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities that define the trimming boundaries (see Remarks ) Solid bodies created by weldment members - or - Planar faces on non-weldment members, or planar faces on weldment members, or both VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount
  - IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.SetTrimmingBoundary
keywords:
  - isettrimmingboundary
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
  - bound
  - arr
  - object
  - void
---

# IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary

Gets the entities used to define the trimming boundaries.

## Signature

```csharp
void ISetTrimmingBoundary( 
   System.Int32
Count
,
   ref System.Object
TrimBoundArr
)
```
## Parameters

- `Count` (System.Int32): Number of trimming boundaries
- `TrimBoundArr` (System.Object): in-process, unmanaged C++: Pointer to an array of entities that define the trimming boundaries (see Remarks ) Solid bodies created by weldment members - or - Planar faces on non-weldment members, or planar faces on weldment members, or both VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Entities that define the trimming boundaries

## Remarks

Faces are valid for end-trim corner types only. You can only specify multiple trimming boundaries for end-trim corner types. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
You must set the
bodies to trim
and set the trimming boundary if changing a corner type.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount`
- `IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.SetTrimmingBoundary`