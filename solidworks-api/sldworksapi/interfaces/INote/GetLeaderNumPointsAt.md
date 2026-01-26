---
type: method
interface: INote
member: GetLeaderNumPointsAt
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of leader on this note
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetLeaderAtIndex
  - INote.GetLeaderInfo
  - INote.HasExtraLeader
  - INote.IsAttached
  - INote.SetZeroLengthLeader
keywords:
  - leaders
  - notes
  - note
  - see
  - also
  - inote
  - getleadernumpointsat
  - leader
  - num
  - points
  - index
  - int32
---

# INote.GetLeaderNumPointsAt

Gets the number of points in the specified leader of this note.

## Signature

```csharp
System.Int32 GetLeaderNumPointsAt( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of leader on this note

## Return Value

Number of points in the leader

## Remarks

Use
INote::GetLeaderCount
to see how many leaders are on the note.

## See Also

- `INote.GetLeaderAtIndex`
- `INote.GetLeaderInfo`
- `INote.HasExtraLeader`
- `INote.IsAttached`
- `INote.SetZeroLengthLeader`