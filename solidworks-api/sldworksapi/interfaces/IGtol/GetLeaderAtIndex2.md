---
type: method
interface: IGtol
member: GetLeaderAtIndex2
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the leader
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLeaderCount
  - IGtol.GetLeaderInfo
  - IGtol.GetLeaderSide
  - IGtol.IGetLeaderAtIndex2
  - IGtol.IGetLeaderInfo
  - IGtol.IGetLineAtIndex
  - IGtol.SetLeader
keywords:
  - leaders
  - geometric
  - tolerancing
  - getleaderatindex2
  - igtol
  - gtol
  - leader
  - index2
  - index
  - int32
  - object
---

# IGtol.GetLeaderAtIndex2

Gets information about the specified leader on this GTol.

## Signature

```csharp
System.Object GetLeaderAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the leader

## Return Value

Array (see Remarks )

## Remarks

A GTol can have a straight leader (1 segment) or a bent leader (2 segments), or it might have a perpendicular leader, which can have either 2 or 3 segments, depending on the situation. The returned array contains the point information to define the leader. It contains the x,y,z coordinates for each vertex in the leader. It can contain up to 12 doubles (4 sets of x,y,z values).
Examine the return value to determine the number of items in the leader coordinate information. The size of the array is either 6 (1 segments), 9 (2 segments), or 12 (3 segments).

## See Also

- `IGtol.GetLeaderCount`
- `IGtol.GetLeaderInfo`
- `IGtol.GetLeaderSide`
- `IGtol.IGetLeaderAtIndex2`
- `IGtol.IGetLeaderInfo`
- `IGtol.IGetLineAtIndex`
- `IGtol.SetLeader`