---
type: method
interface: ILoop2
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
related:
  - ILoop2.GetTrackingIDs
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
  - gettrackingidscount
  - loop2
  - ds
  - count
  - cookie
  - int32
---

# ILoop2.GetTrackingIDsCount

Gets the number of tracking IDs on this loop.

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

Number of tracking IDs on this loop

## Remarks

Call this method before calling
ILoop2::IGetTrackingIDs
to determine the size of the array for that method.
See
Tracking IDs
for more information.

## See Also

- `ILoop2.GetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `ILoop2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`