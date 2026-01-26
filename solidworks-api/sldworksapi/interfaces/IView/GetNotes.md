---
type: method
interface: IView
member: GetNotes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetNoteCount
  - IView.IGetNotes
keywords:
  - note
  - see
  - also
  - inote
  - drawing
  - views
  - iview
  - notes
  - getnotes
  - view
  - object
  - vba
  - new
  - existing
  - title
  - block
  - vb
  - net
---

# IView.GetNotes

Gets the notes in this drawing view.

## Signature

```csharp
System.Object GetNotes()
```
## Parameters

None.

## Return Value

Array of notes

## Remarks

Use this method to obtain the array of notes all at once instead of calling
IView::GetFirstNote
and then repeatedly calling
INote::GetNext
to obtain the remaining notes on this drawing view.

## Examples

- Get Views and Notes (VBA) (Get_Views_and_Notes_Example_VB.htm)
- Get Notes from New or Existing Title Block (VBA) (Get_Notes_from_New_or_Existing_Title_Block_Example_VB.htm)
- Get Notes from New or Existing Title Block (VB.NET) (Get_Notes_from_New_or_Existing_Title_Block_Example_VBNET.htm)
- Get Notes from New or Existing Title Block (C#) (Get_Notes_from_New_or_Existing_Title_Block_Example_CSharp.htm)

## See Also

- `IView.GetNoteCount`
- `IView.IGetNotes`