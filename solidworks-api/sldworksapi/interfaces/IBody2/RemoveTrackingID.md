---
type: method
interface: IBody2
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
  - IBody2.GetTrackingIDs
  - IBody2.GetTrackingIDsCount
  - IBody2.IGetTrackingIDs
  - IBody2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - bodies
  - see
  - also
  - ibody2
  - removetrackingid
  - body2
  - remove
  - id
  - cookie
  - int32
  - body
  - vba
---

# IBody2.RemoveTrackingID

Removes a tracking ID assigned to this body.

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

- Get, Set, and Remove Tracking IDs on Body (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Body_Example_VB.htm)

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.GetTrackingIDsCount`
- `IBody2.IGetTrackingIDs`
- `IBody2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`