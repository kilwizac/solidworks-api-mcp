---
type: method
interface: IGtol
member: IGetLeaderAtIndex2
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the leader
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
  - IGtol.GetLeaderSide
  - IGtol.IGetLeaderInfo
  - IGtol.SetLeader
keywords:
  - leaders
  - geometric
  - tolerancing
  - igetleaderatindex2
  - igtol
  - gtol
  - leader
  - index2
  - index
  - int32
  - point
  - count
  - double
---

# IGtol.IGetLeaderAtIndex2

Gets information about the specified leader on this GTol.

## Signature

```csharp
System.Double IGetLeaderAtIndex2( 
   System.Int32
Index
,
   out System.Int32
PointCount
)
```
## Parameters

- `Index` (System.Int32): Index of the leader
- `PointCount` (System.Int32): Number of (x,y,z) points returned in the array

## Return Value

in-process, unmanaged C++: Pointer to array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

A GTol can have a straight leader (1 segment) or a bent leader (2 segments), or it might have a perpendicular leader, which can have either 2 or 3 segments, depending on the situation. The returned array contains the point information to define the leader. It contains the x,y,z coordinates for each vertex in the leader. It can contain up to 12 doubles (4 sets of x,y,z values).
Because the return value is passed into this method, it should be dimensioned to 12 before this method is called to allow for the maximum number of items that can be returned (4 segments). Upon return from the API, the PointCount argument contains the actual number of points stored in the array. Multiply this number by 3 to determine the number of array items actually used.

## See Also

- `IGtol.GetLeaderAtIndex2`
- `IGtol.GetLeaderCount`
- `IGtol.GetLeaderSide`
- `IGtol.IGetLeaderInfo`
- `IGtol.SetLeader`