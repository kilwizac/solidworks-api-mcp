---
type: method
interface: IVertex
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
  - gettrackingidscount
  - ds
  - count
  - cookie
  - int32
  - remove
  - vba
---

# IVertex.GetTrackingIDsCount

Gets the number of tracking IDs assigned to this vertex.

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

Number of tracking IDs on this vertex

## Remarks

Call this method before calling
IVertex::IGetTrackingIDs
to determine the size of the array for that method.
See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Vertex (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Vertex_Example_VB.htm)

## See Also

- `IModelDocExtension.FindTrackedObjects`
- `IVertex.GetTrackingIDs`
- `IVertex.RemoveTrackingID`
- `IVertex.SetTrackingID`