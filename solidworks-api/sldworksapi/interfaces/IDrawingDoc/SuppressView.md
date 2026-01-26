---
type: method
interface: IDrawingDoc
member: SuppressView
returns: void
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
  - IDrawingDoc.AutomaticViewUpdate
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.HiddenViewsVisible
  - IDrawingDoc.HideShowDrawingViews
  - IDrawingDoc.IActiveDrawingView
  - IDrawingDoc.IGetFirstView
  - IDrawingDoc.UnsuppressView
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - hide
  - show
  - suppress
  - view
  - suppressview
  - idrawingdoc
  - doc
  - void
  - automatically
  - insert
  - center
  - marks
  - vb
  - net
  - vba
---

# IDrawingDoc.SuppressView

Hides the selected drawing view.

## Signature

```csharp
void SuppressView()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Dependent views are not suppressed.

## Examples

- Automatically Insert Center Marks (C#) (Auto_Insert_Center_Marks_Example_CSharp.htm)
- Automatically Insert Center Marks (VB.NET) (Auto_Insert_Center_Marks_Example_VBNET.htm)
- Automatically Insert Center Marks (VBA) (Auto_Insert_Center_Marks_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateView`
- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.AutomaticViewUpdate`
- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.HiddenViewsVisible`
- `IDrawingDoc.HideShowDrawingViews`
- `IDrawingDoc.IActiveDrawingView`
- `IDrawingDoc.IGetFirstView`
- `IDrawingDoc.UnsuppressView`
- `IView.GetNextView`
- `IView.IGetNextView`