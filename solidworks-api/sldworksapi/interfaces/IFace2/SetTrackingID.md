---
type: method
interface: IFace2
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
  - IFace2.GetTrackingIDs
  - IFace2.GetTrackingIDsCount
  - IFace2.IGetTrackingIDs
  - IFace2.RemoveTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - faces
  - face
  - see
  - also
  - iface2
  - settrackingid
  - face2
  - id
  - cookie
  - int32
  - remove
  - vba
---

# IFace2.SetTrackingID

Assigns a tracking ID to this face.

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
, faces,
loops
, and
vertices
in parts and assemblies only; you cannot assign tracking IDs to these entities in drawings. See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Face (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Face_Example_VB.htm)

## See Also

- `IFace2.GetTrackingIDs`
- `IFace2.GetTrackingIDsCount`
- `IFace2.IGetTrackingIDs`
- `IFace2.RemoveTrackingID`
- `IModelDocExtension.FindTrackedObjects`