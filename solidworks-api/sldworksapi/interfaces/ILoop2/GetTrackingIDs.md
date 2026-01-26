---
type: method
interface: ILoop2
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
    description: Array of tracking IDs on this loop
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.GetTrackingIDsCount
  - ILoop2.IGetTrackingIDs
  - ILoop2.RemoveTrackingID
  - ILoop2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - loops
  - see
  - also
  - iloop2
  - tracking
  - ids
  - gettrackingids
  - loop2
  - ds
  - cookie
  - int32
  - object
---

# ILoop2.GetTrackingIDs

Gets the tracking IDs assigned to this loop.

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
- `TrackingIDs` (System.Object): Array of tracking IDs on this loop

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

See
Tracking IDs
for more information.

## See Also

- `ILoop2.GetTrackingIDsCount`
- `ILoop2.IGetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `ILoop2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`