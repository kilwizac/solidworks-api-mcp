---
type: method
interface: IView
member: GetFirstNote
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - INote.GetNext
  - INote.IGetNext
  - IView.IGetFirstNote
keywords:
  - getfirstnote
  - iview
  - view
  - first
  - note
  - object
---

# IView.GetFirstNote

Obsolete. Superseded by IView::GetFirstNote2.

## Signature

```csharp
System.Object GetFirstNote()
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
- `IView.IGetFirstNote`