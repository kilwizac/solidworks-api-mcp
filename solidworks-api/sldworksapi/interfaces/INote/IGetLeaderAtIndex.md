---
type: method
interface: INote
member: IGetLeaderAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader
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
  - INote.GetLeaderAtIndex
  - INote.GetLeaderInfo
  - INote.HasExtraLeader
  - INote.IGetLeaderInfo
  - INote.IsAttached
  - INote.SetZeroLengthLeader
keywords:
  - leaders
  - notes
  - note
  - see
  - also
  - inote
  - igetleaderatindex
  - leader
  - index
  - int32
  - point
  - count
  - double
---

# INote.IGetLeaderAtIndex

Gets information about the specified leader on this note.

## Signature

```csharp
System.Double IGetLeaderAtIndex( 
   System.Int32
Index
,
   out System.Int32
PointCount
)
```
## Parameters

- `Index` (System.Int32): Index of leader
- `PointCount` (System.Int32): Number of (x,y,z) points returned in the array

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

There can be 0, 1, or 2 lines used with the leader line. In other words, if the note is not attached, then there are 0 lines; otherwise, you can have a straight leaderline (1 line) or a bent leaderline (2 lines). You must infer the number of leader lines based on IsAttached() and HasExtraLeader().
IsAttached() == false implies no leaderline and no leaderline points (PointCount=0).
HasExtraLeader() == false implies that this is a straight leaderline and 1 line (PointCount=2)
HasExtraLeader() == True means that this is a bent leaderline and 2 lines (PointCount=3)
Format of return information is the following array of doubles:
return value
[0] = x coordinate of first leader point
return value
[1] = y coordinate of first leader point
return value
[2] = z coordinate of first leader point
return value
[3] = x coordinate of second leader point
return value
[4] = y coordinate of second leader point
return value
[5] = z coordinate of second leader point
return value
[6] = x coordinate of third leader point
return value
[7] = y coordinate of third leader point
return value
[8] = z coordinate of third leader point
Use
INote::GetLeaderCount
to see how many leaders there are on the note.

## See Also

- `INote.GetLeaderAtIndex`
- `INote.GetLeaderInfo`
- `INote.HasExtraLeader`
- `INote.IGetLeaderInfo`
- `INote.IsAttached`
- `INote.SetZeroLengthLeader`