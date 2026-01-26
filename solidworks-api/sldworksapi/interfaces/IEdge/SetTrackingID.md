---
type: method
interface: IEdge
member: SetTrackingID
returns: System.Int32
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: TrackingID
    type: System.Int32
    description: Application-defined value for the tracking ID Value Action >0 Edge is tracked 0 Tracking of edge is stopped
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTrackingIDs
  - IEdge.GetTrackingIDsCount
  - IEdge.IGetTrackingIDs
  - IEdge.RemoveTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - edges
  - edge
  - see
  - also
  - iedge
  - settrackingid
  - id
  - cookie
  - int32
  - remove
  - vba
---

# IEdge.SetTrackingID

Assigns a tracking ID to this edge.

## Signature

```csharp
System.Int32 SetTrackingID( 
   System.Int32
TrackingCookie
,
   System.Int32
TrackingID
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `TrackingID` (System.Int32): Application-defined value for the tracking ID Value Action >0 Edge is tracked 0 Tracking of edge is stopped

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

You can assign tracking IDs to
bodies
, edges,
faces
,
loops
, and
vertices
in parts and assemblies only; you cannot assign tracking IDs to these entities in drawings. See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Edge (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Edge_Example_VB.htm)

## See Also

- `IEdge.GetTrackingIDs`
- `IEdge.GetTrackingIDsCount`
- `IEdge.IGetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IModelDocExtension.FindTrackedObjects`