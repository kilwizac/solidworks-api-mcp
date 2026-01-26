---
type: method
interface: IVertex
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
    description: Array of tracking IDs on this vertex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModelDocExtension.FindTrackedObjects
  - IVertex.GetTrackingIDsCount
  - IVertex.IGetTrackingIDs
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
  - gettrackingids
  - ds
  - cookie
  - int32
  - object
  - remove
  - vba
---

# IVertex.GetTrackingIDs

Gets the tracking IDs assigned to this vertex.

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
- `TrackingIDs` (System.Object): Array of tracking IDs on this vertex

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Vertex (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Vertex_Example_VB.htm)

## See Also

- `IModelDocExtension.FindTrackedObjects`
- `IVertex.GetTrackingIDsCount`
- `IVertex.IGetTrackingIDs`
- `IVertex.RemoveTrackingID`
- `IVertex.SetTrackingID`