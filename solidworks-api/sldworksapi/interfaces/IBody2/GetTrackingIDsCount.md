---
type: method
interface: IBody2
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
  - IBody2.GetTrackingIDs
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
  - gettrackingidscount
  - body2
  - ds
  - count
  - cookie
  - int32
  - remove
  - body
  - vba
---

# IBody2.GetTrackingIDsCount

Gets the number of tracking IDs on this body.

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

Number of tracking IDs on this body

## Remarks

Call this method before calling
IBody2::IGetTrackingIDs
to determine the size of the array for that method.
See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Body (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Body_Example_VB.htm)

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IBody2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`