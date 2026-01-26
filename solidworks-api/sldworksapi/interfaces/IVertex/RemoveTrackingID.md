---
type: method
interface: IVertex
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
  - IModelDocExtension.FindTrackedObjects
  - IVertex.GetTrackingIDs
  - IVertex.GetTrackingIDsCount
  - IVertex.IGetTrackingIDs
  - IVertex.SetTrackingID
keywords:
  - tracking
  - ids
  - vertices
  - vertex
  - see
  - also
  - ivertex
  - removetrackingid
  - remove
  - id
  - cookie
  - int32
  - vba
---

# IVertex.RemoveTrackingID

Removes a tracking ID assigned to this vertex.

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

- Get, Set, and Remove Tracking IDs on Vertex (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Vertex_Example_VB.htm)

## See Also

- `IModelDocExtension.FindTrackedObjects`
- `IVertex.GetTrackingIDs`
- `IVertex.GetTrackingIDsCount`
- `IVertex.IGetTrackingIDs`
- `IVertex.SetTrackingID`