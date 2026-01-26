---
type: property
interface: IDrawingDoc
member: IActiveDrawingView
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
  - IDrawingDoc.ActiveDrawingView
  - IDrawingDoc.Create1stAngleViews2
  - IDrawingDoc.Create3rdAngleViews2
  - IDrawingDoc.CreateAuxiliaryViewAt2
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.CreateDrawViewFromModelView3
  - IDrawingDoc.CreateFlatPatternViewFromModelView2
  - IDrawingDoc.CreateRelativeView
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.CreateUnfoldedViewAt3
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
  - IDrawingDoc.IGetFirstView
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - active
  - drawings
  - idrawingdoc
  - iactivedrawingview
  - doc
  - view
readonly: true
---

# IDrawingDoc.IActiveDrawingView

Gets the currently active drawing view.

## Signature

```csharp
View IActiveDrawingView {get;}
```
## Parameters

None.

## Return Value

Pointer to interface object of the currently active drawing view

## Remarks

This property returns the active drawing view, if one is active. If the drawing sheet is active, the property returns NULL and you can use
IDrawingDoc::IGetCurrentSheet
to get the current sheet for this drawing.
This is a read-only property. Use
IDrawingDoc::ActivateView
to set the active drawing view.

## See Also

- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateDrawViewFromModelView3`
- `IDrawingDoc.CreateFlatPatternViewFromModelView2`
- `IDrawingDoc.CreateRelativeView`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.CreateUnfoldedViewAt3`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`
- `IDrawingDoc.IGetFirstView`
- `IView.GetNextView`
- `IView.IGetNextView`