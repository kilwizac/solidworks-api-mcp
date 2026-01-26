---
type: method
interface: ILoop2
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
related:
  - ILoop2.GetTrackingIDs
  - ILoop2.IGetTrackingIDs
  - ILoop2.SetTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - loops
  - see
  - also
  - iloop2
  - removetrackingid
  - loop2
  - remove
  - id
  - cookie
  - int32
---

# ILoop2.RemoveTrackingID

Removes a tracking ID assigned to this loop.

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

## See Also

- `ILoop2.GetTrackingIDs`
- `ILoop2.IGetTrackingIDs`
- `ILoop2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`