---
type: method
interface: IEdge
member: IGetTrackingIDs
returns: System.Int32
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: Count
    type: System.Int32
    description: Number of tracking IDs on this edge
  -
    name: TrackingIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of tracking IDs on this edge VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTrackingIDs
  - IEdge.RemoveTrackingID
  - IEdge.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - edge
  - see
  - also
  - iedge
  - tracking
  - ids
  - edges
  - igettrackingids
  - ds
  - cookie
  - int32
  - count
---

# IEdge.IGetTrackingIDs

Gets the tracking IDs assigned to this edge.

## Signature

```csharp
System.Int32 IGetTrackingIDs( 
   System.Int32
TrackingCookie
,
   System.Int32
Count
,
   out System.Int32
TrackingIDs
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `Count` (System.Int32): Number of tracking IDs on this edge
- `TrackingIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of tracking IDs on this edge VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

Before calling this method, call
IEdge::GetTrackingIDsCount
to determine Count.
See
Tracking IDs
for more information.

## See Also

- `IEdge.GetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IEdge.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`