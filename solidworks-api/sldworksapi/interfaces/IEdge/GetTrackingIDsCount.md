---
type: method
interface: IEdge
member: GetTrackingIDsCount
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
  - gettrackingidscount
  - ds
  - count
  - cookie
  - int32
  - remove
  - vba
---

# IEdge.GetTrackingIDsCount

Gets the number of tracking IDs on this edge.

## Signature

```csharp
System.Int32 GetTrackingIDsCount( 
   System.Int32
TrackingCookie
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition

## Return Value

NUmber of tracking IDs on this edge

## Remarks

Call this method before calling
IEdge::IGetTrackingIDs
to determine the size for that array.
See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Edge (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Edge_Example_VB.htm)

## See Also

- `IEdge.GetTrackingIDs`
- `IEdge.IGetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IEdge.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`