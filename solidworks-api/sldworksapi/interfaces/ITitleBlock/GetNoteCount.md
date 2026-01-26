---
type: method
interface: ITitleBlock
member: GetNoteCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ITitleBlock.GetNotes
keywords:
  - note
  - see
  - also
  - inote
  - title
  - blocks
  - getnotecount
  - ititleblock
  - block
  - count
  - int32
---

# ITitleBlock.GetNoteCount

Gets the number of notes in this title block.

## Signature

```csharp
System.Int32 GetNoteCount()
```
## Parameters

None.

## Return Value

Number of notes in this title block

## Remarks

Call this method before calling
ITitleBlock::IGetNotes
to get the size of the array for that method.

## See Also

- `ITitleBlock.GetNotes`