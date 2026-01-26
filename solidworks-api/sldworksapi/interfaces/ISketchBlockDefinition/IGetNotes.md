---
type: method
interface: ISketchBlockDefinition
member: IGetNotes
returns: Note
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of notes
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
  - igetnotes
  - sketch
  - block
  - definition
  - count
  - int32
---

# ISketchBlockDefinition.IGetNotes

Gets the notes in this block definition.

## Signature

```csharp
Note IGetNotes( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of notes

## Return Value

in-process, unmanaged C++: Pointer to an array of notes VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISketchBlockDefinition::GetNoteCount
before calling this method to get the value for Count.

## See Also

- `ISketchBlockDefinition.GetNotes`