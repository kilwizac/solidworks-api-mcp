---
type: method
interface: IEdge
member: GetTrackingIDs
returns: System.Int32
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: TrackingIDs
    type: System.Object
    description: Array of tracking IDs on this edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetTrackingIDsCount
  - IEdge.IGetTrackingIDs
  - IEdge.RemoveTrackingID
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
  - gettrackingids
  - ds
  - cookie
  - int32
  - object
  - remove
  - vba
---

# IEdge.GetTrackingIDs

Gets the tracking IDs assigned to this edge.

## Signature

```csharp
System.Int32 GetTrackingIDs( 
   System.Int32
TrackingCookie
,
   out System.Object
TrackingIDs
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `TrackingIDs` (System.Object): Array of tracking IDs on this edge

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Edge (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Edge_Example_VB.htm)

## See Also

- `IEdge.GetTrackingIDsCount`
- `IEdge.IGetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IEdge.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`