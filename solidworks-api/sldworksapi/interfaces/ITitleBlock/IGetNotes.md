---
type: method
interface: ITitleBlock
member: IGetNotes
returns: Note
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of notes in this title block
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - note
  - see
  - also
  - inote
  - title
  - blocks
  - igetnotes
  - ititleblock
  - block
  - notes
  - count
  - int32
---

# ITitleBlock.IGetNotes

Gets the notes in this title block.

## Signature

```csharp
Note IGetNotes( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of notes in this title block

## Return Value

in-process, unmanaged C++: Pointer to an array of notes in this title block VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ITitleBlock::GetNoteCount
before calling this method to get Count.