---
type: method
interface: ILoop2
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
    description: Number of tracking IDs on this loop
  -
    name: TrackingIDs
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of tracking IDs on this loop VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - igettrackingids
  - loop2
  - ds
  - cookie
  - int32
  - count
---

# ILoop2.IGetTrackingIDs

Gets the tracking IDs assigned to this loop.

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
- `Count` (System.Int32): Number of tracking IDs on this loop
- `TrackingIDs` (System.Int32): in-process, unmanaged C++: Pointer to an array of tracking IDs on this loop VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Status as defined by swTrackingIDError_e

## Remarks

Before calling this method, call
ILoop2::GetTrackingIDsCount
to get Count.
See
Tracking IDs
for more information.

## See Also

- `ILoop2.GetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `ILoop2.SetTrackingID`
- `IModelDocExtension.FindTrackedObjects`