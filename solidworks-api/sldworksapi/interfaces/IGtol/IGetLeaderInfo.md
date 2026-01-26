---
type: method
interface: IGtol
member: IGetLeaderInfo
returns: System.Double
parameters:
  -
    name: PointCount
    type: System.Int32
    description: Number of (x,y,z) points returned in the array
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLeaderAtIndex2
  - IGtol.GetLeaderCount
  - IGtol.GetLeaderInfo
  - IGtol.GetLeaderSide
  - IGtol.IGetLeaderAtIndex2
  - IGtol.IGetLineAtIndex
  - IGtol.SetLeader
keywords:
  - leaders
  - geometric
  - tolerancing
  - igetleaderinfo
  - igtol
  - gtol
  - leader
  - info
  - point
  - count
  - int32
  - double
---

# IGtol.IGetLeaderInfo

Gets information describing the layout of the GTol leader lines.

## Signature

```csharp
System.Double IGetLeaderInfo( 
   out System.Int32
PointCount
)
```
## Parameters

- `PointCount` (System.Int32): Number of (x,y,z) points returned in the array

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

There can be 0, 1 or 2 lines with the leader line. If the GTol is not attached, then there are 0 lines. Otherwise, the GTol can have a straight leaderline (1 line) or a bent leaderline (2 lines). The caller must infer the number of leader lines based on
IGtol::IsAttached
and
IGtol::HasExtraLeader
.
IGtol::IsAttached() == false implies no leaderline; therefore, there are no leaderline points (PointCount=0).
IGtol::HasExtraLeader() == false means that this is a straight leaderline; therefore, there is 1 line (PointCount=2).
IGtol::HasExtraLeader() == True means that this is a bent leaderline; therefore, there are 2 lines (PointCount=3).
The format of return information is the following array of doubles:
retval
[0] = X-coordinate of first leader point
retval
[1] = Y-coordinate of first leader point
retval
[2] = Z-coordinate of first leader point
retval
[3] = X-coordinate of second leader point
retval
[4] = Y-coordinate of second leader point
retval
[5] = Z-coordinate of second leader point
retval
[6] = X-coordinate of third leader point
retval
[7] = Y-coordinate of third leader point
retval
[8] = Z-coordinate of third leader point
Use
IGtol::GetLeaderCount
to see how many leaders are on the
IGTol
object.

## See Also

- `IGtol.GetLeaderAtIndex2`
- `IGtol.GetLeaderCount`
- `IGtol.GetLeaderInfo`
- `IGtol.GetLeaderSide`
- `IGtol.IGetLeaderAtIndex2`
- `IGtol.IGetLineAtIndex`
- `IGtol.SetLeader`