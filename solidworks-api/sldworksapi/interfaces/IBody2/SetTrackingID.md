---
type: method
interface: IBody2
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
    description: Application-defined value for the tracking ID Value Action >0 Body is tracked 0 Tracking of body is stopped
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetTrackingIDs
  - IBody2.GetTrackingIDsCount
  - IBody2.IGetTrackingIDs
  - IBody2.RemoveTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - bodies
  - see
  - also
  - ibody2
  - settrackingid
  - body2
  - id
  - cookie
  - int32
  - remove
  - body
  - vba
---

# IBody2.SetTrackingID

Assigns a tracking ID to this body.

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
- `TrackingID` (System.Int32): Application-defined value for the tracking ID Value Action >0 Body is tracked 0 Tracking of body is stopped

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

You can assign tracking IDs to bodies,
faces
,
edges
,
loops
, and
vertices
in parts and assemblies only; you cannot assign tracking IDs to these entities in drawings. See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Body (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Body_Example_VB.htm)

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.GetTrackingIDsCount`
- `IBody2.IGetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IModelDocExtension.FindTrackedObjects`