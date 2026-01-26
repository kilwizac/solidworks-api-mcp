---
type: method
interface: IVertex
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
  - IVertex.RemoveTrackingID
keywords:
  - tracking
  - ids
  - vertices
  - vertex
  - see
  - also
  - ivertex
  - settrackingid
  - id
  - cookie
  - int32
  - remove
  - vba
---

# IVertex.SetTrackingID

Assigns a tracking ID to this vertex.

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
- `TrackingID` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

You can assign tracking IDs to
bodies
,
edges
,
faces
,
loops
, and vertices in parts and assemblies only; you cannot assign tracking IDs to these entities in drawings. See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Vertex (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Vertex_Example_VB.htm)

## See Also

- `IModelDocExtension.FindTrackedObjects`
- `IVertex.GetTrackingIDs`
- `IVertex.GetTrackingIDsCount`
- `IVertex.IGetTrackingIDs`
- `IVertex.RemoveTrackingID`