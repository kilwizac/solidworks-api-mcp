---
type: method
interface: IDrawingDoc
member: CreateViewport3
returns: View
parameters:
  -
    name: LowerLeftX
    type: System.Double
    description: x value for lower-left coordinate for the view
  -
    name: LowerLeftY
    type: System.Double
    description: y value for lower-left coordinate for the view
  -
    name: SketchSize
    type: System.Int16
    description: Approximate number of entries
  -
    name: Scale
    type: System.Double
    description: Scale to use for the view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
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
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - empty
  - view
  - createviewport3
  - idrawingdoc
  - doc
  - create
  - viewport3
  - lower
  - left
  - double
  - sketch
  - size
  - int16
  - scale
---

# IDrawingDoc.CreateViewport3

Creates a an empty view in a drawing.

## Signature

```csharp
View CreateViewport3( 
   System.Double
LowerLeftX
,
   System.Double
LowerLeftY
,
   System.Int16
SketchSize
,
   System.Double
Scale
)
```
## Parameters

- `LowerLeftX` (System.Double): x value for lower-left coordinate for the view
- `LowerLeftY` (System.Double): y value for lower-left coordinate for the view
- `SketchSize` (System.Int16): Approximate number of entries
- `Scale` (System.Double): Scale to use for the view

## Return Value

Pointer to the newly created IView object

## Remarks

You cannot set the size of an empty view or resize it. Instead, resizing of the view occurs automatically when you add sketch or model geometry to the view.
The center of the empty view is computed from the specified lower-left corner and default values for the upper-right corner. The latter is set to (0.001, 0.001). The center is computed as follows:
center = lower-left_corner + (upper-right_corner - lower-left_corner) / 2.0
To move the view, use
IView::Position
or
IView::IPosition
.
The default SketchSize value is 0. If you are creating more than 500 sketch entities, specify a value instead of using the default.
After you use this method, you can create sketch entities in the new view. One advantage is that users can move the entities around the drawing by dragging the view instead of selecting all the entities.

## See Also

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
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`