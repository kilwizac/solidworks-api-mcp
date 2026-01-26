---
type: method
interface: ISketchBlockDefinition
member: GetNoteCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetNotes
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - notes
  - note
  - inote
  - getnotecount
  - sketch
  - block
  - definition
  - count
  - int32
---

# ISketchBlockDefinition.GetNoteCount

Gets the number of notes in this block definition.

## Signature

```csharp
System.Int32 GetNoteCount()
```
## Parameters

None.

## Return Value

Number of notes

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetNotes
to get the size of the array for that method.

## See Also

- `ISketchBlockDefinition.GetNotes`