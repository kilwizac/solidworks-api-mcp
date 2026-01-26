---
type: method
interface: IBody2
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
    description: Array of tracking IDs on this body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IGetTrackingIDs
  - IBody2.RemoveTrackingID
  - IBody2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - bodies
  - see
  - also
  - ibody2
  - gettrackingids
  - body2
  - ds
  - cookie
  - int32
  - object
  - remove
  - body
  - vba
---

# IBody2.GetTrackingIDs

Gets the tracking IDs assigned to this body.

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
- `TrackingIDs` (System.Object): Array of tracking IDs on this body

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Body (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Body_Example_VB.htm)

## See Also

- `IBody2.IGetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IBody2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`