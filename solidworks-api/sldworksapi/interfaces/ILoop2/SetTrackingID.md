---
type: method
interface: ILoop2
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
    description: Application-defined value for the tracking ID Value Action >0 Loop is tracked 0 Tracking of loop is stopped
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.GetTrackingIDs
  - ILoop2.GetTrackingIDsCount
  - ILoop2.IGetTrackingIDs
  - ILoop2.RemoveTrackingID
  - IModelDocExtension.FindTrackedObjects
keywords:
  - tracking
  - ids
  - loops
  - see
  - also
  - iloop2
  - settrackingid
  - loop2
  - id
  - cookie
  - int32
---

# ILoop2.SetTrackingID

Assigns a tracking ID to this loop.

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
- `TrackingID` (System.Int32): Application-defined value for the tracking ID Value Action >0 Loop is tracked 0 Tracking of loop is stopped

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

You can assign tracking IDs to
bodies
,
edges
,
faces
, loops, and
vertices
in parts and assemblies only; you cannot assign tracking IDs to these entities in drawings. See
Tracking IDs
for more information.

## See Also

- `ILoop2.GetTrackingIDs`
- `ILoop2.GetTrackingIDsCount`
- `ILoop2.IGetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `IModelDocExtension.FindTrackedObjects`