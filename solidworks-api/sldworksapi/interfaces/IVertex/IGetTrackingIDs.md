---
type: method
interface: IVertex
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
    description: Number of tracking IDs on this vertex
  -
    name: TrackingIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of tracking IDs on this vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModelDocExtension.FindTrackedObjects
  - IVertex.GetTrackingIDs
  - IVertex.RemoveTrackingID
  - IVertex.SetTrackingID
keywords:
  - vertex
  - see
  - also
  - ivertex
  - tracking
  - ids
  - vertices
  - igettrackingids
  - ds
  - cookie
  - int32
  - count
---

# IVertex.IGetTrackingIDs

Gets the tracking IDs assigned to this vertex.

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
- `Count` (System.Int32): Number of tracking IDs on this vertex
- `TrackingIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of tracking IDs on this vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

Before calling this method, call
IVertex::GetTrackingIDsCount
to get Count.
See
Tracking IDs
for more information.

## See Also

- `IModelDocExtension.FindTrackedObjects`
- `IVertex.GetTrackingIDs`
- `IVertex.RemoveTrackingID`
- `IVertex.SetTrackingID`