---
type: method
interface: IEdge
member: RemoveTrackingID
returns: System.Int32
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
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
  - IEdge.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - edges
  - edge
  - see
  - also
  - iedge
  - removetrackingid
  - remove
  - id
  - cookie
  - int32
  - vba
---

# IEdge.RemoveTrackingID

Removes a tracking ID assigned to this edge.

## Signature

```csharp
System.Int32 RemoveTrackingID( 
   System.Int32
TrackingCookie
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Edge (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Edge_Example_VB.htm)

## See Also

- `IEdge.GetTrackingIDs`
- `IEdge.GetTrackingIDsCount`
- `IEdge.IGetTrackingIDs`
- `IEdge.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`