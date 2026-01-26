---
type: method
interface: IFace2
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
  - gettrackingidscount
  - face2
  - ds
  - count
  - cookie
  - int32
  - remove
  - vba
---

# IFace2.GetTrackingIDsCount

Gets the number of tracking IDs on this face.

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

Number of tracking IDs on this face

## Remarks

Call this method before calling
IFace2::IGetTrackingIDs
to determine the size of the array for that method.
See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Face (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Face_Example_VB.htm)

## See Also

- `IFace2.IGetTrackingIDs`
- `IFace2.RemoveTrackingID`
- `IFace2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`