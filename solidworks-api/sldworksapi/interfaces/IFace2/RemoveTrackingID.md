---
type: method
interface: IFace2
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
  - IFace2.GetTrackingIDs
  - IFace2.GetTrackingIDsCount
  - IFace2.IGetTrackingIDs
  - IFace2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - faces
  - face
  - see
  - also
  - iface2
  - removetrackingid
  - face2
  - remove
  - id
  - cookie
  - int32
  - vba
---

# IFace2.RemoveTrackingID

Removes a tracking ID assigned to this face.

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

- Get, Set, and Remove Tracking IDs on Face (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Face_Example_VB.htm)

## See Also

- `IFace2.GetTrackingIDs`
- `IFace2.GetTrackingIDsCount`
- `IFace2.IGetTrackingIDs`
- `IFace2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`