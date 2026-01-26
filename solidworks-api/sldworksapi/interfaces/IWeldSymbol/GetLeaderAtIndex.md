---
type: method
interface: IWeldSymbol
member: GetLeaderAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetLeaderCount
  - IWeldSymbol.HasExtraLeader
  - IWeldSymbol.IGetLeaderAtIndex
keywords:
  - getleaderatindex
  - iweldsymbol
  - weld
  - symbol
  - leader
  - index
  - int32
  - object
---

# IWeldSymbol.GetLeaderAtIndex

Gets information about the specified leader on this symbol.

## Signature

```csharp
System.Object GetLeaderAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of leader

## Return Value

Array of doubles (see Remarks )

## Remarks

There can be 0, 1 or 2 lines used with the leader line. If the weld symbol is not attached, then there are 0 lines; otherwise, you can have a straight leaderline (1 line) or a bent leaderline (2 lines). You must infer the number of leaderlines based on IsAttached() and HasExtraLeader().
IsAttached() == false implies no leaderline and no leaderline points (
PointCount
=0).
HasExtraLeader() == false means that this is a straight leaderline and 1 line (
PointCount
=2)
HasExtraLeader() == true means that this is a bent leaderline and 2 lines (
PointCount
=3)
Format of return information is the following array of doubles:
retval
[0] = x-coordinate of first leader point
retval
[1] = y-coordinate of first leader point
retval
[2] = z-coordinate of first leader point
retval
[3] = x-coordinate of second leader point
retval
[4] = y-coordinate of second leader point
retval
[5] = z-coordinate of second leader point
retval
[6] = x-coordinate of third leader point
retval
[7] = y-coordinate of third leader point
retval
[8] = z-coordinate of third leader point
Use
IWeldSymbol::GetLeaderCount
to see how many leaders there are on the weld symbol.

## See Also

- `IWeldSymbol.GetLeaderCount`
- `IWeldSymbol.HasExtraLeader`
- `IWeldSymbol.IGetLeaderAtIndex`