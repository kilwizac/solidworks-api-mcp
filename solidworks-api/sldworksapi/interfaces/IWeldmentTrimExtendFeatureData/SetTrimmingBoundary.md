---
type: method
interface: IWeldmentTrimExtendFeatureData
member: SetTrimmingBoundary
returns: void
parameters:
  -
    name: TrimBoundVar
    type: System.Object
    description: Number of trimming boundaries
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundaryCount
  - IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary
keywords:
  - settrimmingboundary
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - trimming
  - boundary
  - bound
  - var
  - object
  - void
---

# IWeldmentTrimExtendFeatureData.SetTrimmingBoundary

Sets the trimming boundaries for this weldment trim extend feature.

## Signature

```csharp
void SetTrimmingBoundary( 
   System.Object
TrimBoundVar
)
```
## Parameters

- `TrimBoundVar` (System.Object): Number of trimming boundaries

## Return Value

Array of trimming boundaries: Solid bodies created by weldment members - or - Planar faces on non-weldment members, or planar faces on weldment members, or both See Remarks.

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