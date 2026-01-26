---
type: method
interface: IView
member: GetNoteCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - INote
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
  - getnotecount
  - view
  - count
  - int32
  - vba
---

# IView.GetNoteCount

Gets the number notes in this drawing view.

## Signature

```csharp
System.Int32 GetNoteCount()
```
## Parameters

None.

## Return Value

Number of notes in this drawing view

## Remarks

Call this method before calling
IView::IGetNotes
to determine the size of the array for that method.

## Examples

- Get Views and Notes (VBA) (Get_Views_and_Notes_Example_VB.htm)

## See Also

- `INote`
- `IView.GetNotes`