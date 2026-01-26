---
type: method
interface: IView
member: IGetFirstNote
returns: Note
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - INote.GetNext
  - INote.IGetNext
  - IView.GetFirstNote
keywords:
  - note
  - see
  - also
  - inote
  - drawing
  - views
  - view
  - iview
  - notes
  - igetfirstnote
  - first
---

# IView.IGetFirstNote

Gets the first note in the view.

## Signature

```csharp
Note IGetFirstNote()
```
## Parameters

None.

## Return Value

First note

## Remarks

The sheet must be visible. See
ISheet::SheetFormatVisible
.

## See Also

- `INote.GetNext`
- `INote.IGetNext`
- `IView.GetFirstNote`