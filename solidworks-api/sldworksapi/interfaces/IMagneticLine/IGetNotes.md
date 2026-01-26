---
type: method
interface: IMagneticLine
member: IGetNotes
returns: Note
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of notes returned by this method (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMagneticLine.AddNote
  - IMagneticLine.GetNotes
  - IMagneticLine.RemoveNote
keywords:
  - igetnotes
  - imagneticline
  - magnetic
  - line
  - notes
  - count
  - int32
  - note
---

# IMagneticLine.IGetNotes

Gets the notes attached to this magnetic line.

## Signature

```csharp
Note IGetNotes( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of notes returned by this method (see Remarks )

## Return Value

In-process, unmanaged C++: Pointer to an array of INote s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IMagneticLine::GetNotesCount
to get the value of Count.

## See Also

- `IMagneticLine.AddNote`
- `IMagneticLine.GetNotes`
- `IMagneticLine.RemoveNote`