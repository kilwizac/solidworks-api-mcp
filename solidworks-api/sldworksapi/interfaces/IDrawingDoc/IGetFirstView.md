---
type: method
interface: IDrawingDoc
member: IGetFirstView
returns: View
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateView
  - IDrawingDoc.ActiveDrawingView
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.IActiveDrawingView
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - view
  - see
  - also
  - iview
  - first
  - drawing
  - views
  - drawings
  - idrawingdoc
  - traverse
  - igetfirstview
  - doc
  - insert
  - spline
---

# IDrawingDoc.IGetFirstView

Gets the first drawing view on the current sheet.

## Signature

```csharp
View IGetFirstView()
```
## Parameters

None.

## Return Value

Pointer to the first drawing view in this drawing document

## Remarks

This method might be useful for starting an iteration through all the drawing views on the current sheet.
Because the drawing sheet also has sketch geometry, notes, GTols, and so on, this method returns the current drawing sheet. The next view returned by
IView::GetNextView
is the first drawing view in the current sheet.

## Examples

- Insert Spline in Drawing (C++) (Insert_Spline_in_Drawing_Example_CPlusPlus_COM.htm)

## See Also

- `IDrawingDoc.ActivateView`
- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.IActiveDrawingView`
- `IView.GetNextView`
- `IView.IGetNextView`