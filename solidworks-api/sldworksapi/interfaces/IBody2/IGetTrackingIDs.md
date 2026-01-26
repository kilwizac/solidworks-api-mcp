---
type: method
interface: IBody2
member: IGetTrackingIDs
returns: System.Int32
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: Count
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: TrackingIDs
    type: System.Int32
    description: Number of tracking IDs
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
  - bodies
  - see
  - also
  - ibody2
  - tracking
  - ids
  - igettrackingids
  - body2
  - ds
  - cookie
  - int32
  - count
---

# IBody2.IGetTrackingIDs

Gets the tracking IDs assigned to this body.

## Signature

```csharp
System.Int32 IGetTrackingIDs( 
   System.Int32
TrackingCookie
,
   System.Int32
Count
,
   out System.Int32
TrackingIDs
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `Count` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `TrackingIDs` (System.Int32): Number of tracking IDs

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

Before calling this method, call
IBody2::GetTrackingIDsCount
to determine Count.
See
Tracking IDs
for more information.

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IBody2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`