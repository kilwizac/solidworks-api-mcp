---
type: method
interface: IDetailCircle
member: GetLeaderInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.IGetLeaderInfo
keywords:
  - getleaderinfo
  - idetailcircle
  - detail
  - circle
  - leader
  - info
  - object
---

# IDetailCircle.GetLeaderInfo

Gets the leader information for this detail circle.

## Signature

```csharp
System.Object GetLeaderInfo()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

There can be 0, 1 or 2 lines in the leader line. If the GTol is not attached, there are 0 lines. Otherwise, leaders can use a straight leaderline (1 line) or a bent leaderline (2 lines). Your applications must infer the number of leader lines based on
IGtol::IsAttached
and
IGtol::HasExtraLeader
.
IsAttached() == false implies no leaderline, therefore, no leaderline points (PointCount=0).
HasExtraLeader() == false means that this is a straight leaderline, therefore, 1 line (PointCount=2)
HasExtraLeader() == True means that this is a bent leaderline, therefore, 2 lines (PointCount=3)
Format of return information is the following array of doubles:
retval[0] = X-coordinate of first leader point
retval[1] = Y-coordinate of first leader point
retval[2] = Z-coordinate of first leader point
retval[3] = X-coordinate of second leader point
retval[4] = Y-coordinate of second leader point
retval[5] = Z-coordinate of second leader point
retval[6] = X-coordinate of third leader point
retval[7] = Y-coordinate of third leader point
retval[8] = Z-coordinate of third leader point

## See Also

- `IDetailCircle.IGetLeaderInfo`