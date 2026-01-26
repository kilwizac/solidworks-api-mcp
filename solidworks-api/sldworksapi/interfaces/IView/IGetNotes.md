---
type: method
interface: IView
member: IGetNotes
returns: Note
parameters:
  -
    name: NumberOfNotes
    type: System.Int32
    description: Number of notes in this drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetNotes
keywords:
  - note
  - see
  - also
  - inote
  - drawing
  - views
  - iview
  - notes
  - igetnotes
  - view
  - number
  - int32
---

# IView.IGetNotes

Gets the notes in this drawing view.

## Signature

```csharp
Note IGetNotes( 
   System.Int32
NumberOfNotes
)
```
## Parameters

- `NumberOfNotes` (System.Int32): Number of notes in this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of notes VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of notes all at once instead of calling
IView::GetFirstNote
and then repeatedly calling
INote::GetNext
to obtain the remaining notes on this drawing view.
Call
IView::GetNoteCount
before calling this method to get NumberOfNotes.

## See Also

- `IView.GetNotes`