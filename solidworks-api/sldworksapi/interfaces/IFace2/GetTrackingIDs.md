---
type: method
interface: IFace2
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
    description: Array of tracking IDs on this face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetTrackingIDsCount
  - IFace2.IGetTrackingIDs
  - IFace2.RemoveTrackingID
  - IFace2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - face
  - see
  - also
  - iface2
  - tracking
  - ids
  - faces
  - gettrackingids
  - face2
  - ds
  - cookie
  - int32
  - object
  - remove
  - vba
---

# IFace2.GetTrackingIDs

Gets the tracking IDs assigned to this face.

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
- `TrackingIDs` (System.Object): Array of tracking IDs on this face

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Face (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Face_Example_VB.htm)

## See Also

- `IFace2.GetTrackingIDsCount`
- `IFace2.IGetTrackingIDs`
- `IFace2.RemoveTrackingID`
- `IFace2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`