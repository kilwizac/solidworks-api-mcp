---
type: method
interface: IDrawingDoc
member: CreateUnfoldedViewAt3
returns: View
parameters:
  -
    name: X
    type: System.Double
    description: x position in the drawing sheet space for the center of the drawing view
  -
    name: Y
    type: System.Double
    description: y position in the drawing sheet space for the center of the drawing view
  -
    name: Z
    type: System.Double
    description: z position in the drawing sheet space for the center of the drawing view
  -
    name: NotAligned
    type: System.Boolean
    description: True if you want to break the alignment with the parent view, false if you want to keep the view aligned with the parent view
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
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - view
  - see
  - also
  - iview
  - unfolded
  - drawing
  - views
  - projected
  - createunfoldedviewat3
  - idrawingdoc
  - doc
  - create
  - at3
  - double
  - not
  - aligned
  - boolean
  - vba
  - vb
  - net
---

# IDrawingDoc.CreateUnfoldedViewAt3

Creates an unfolded drawing view from the selected drawing view and places it in the drawing at the specified location.

## Signature

```csharp
View CreateUnfoldedViewAt3( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Boolean
NotAligned
)
```
## Parameters

- `X` (System.Double): x position in the drawing sheet space for the center of the drawing view
- `Y` (System.Double): y position in the drawing sheet space for the center of the drawing view
- `Z` (System.Double): z position in the drawing sheet space for the center of the drawing view
- `NotAligned` (System.Boolean): True if you want to break the alignment with the parent view, false if you want to keep the view aligned with the parent view

## Return Value

Pointer to the newly created IView object

## Examples

- Create Unfolded View (VBA) (Create_Unfolded_View_Example_VB.htm)
- Create Unfolded View (VB.NET) (Create_Unfolded_View_Example_VBNET.htm)
- Create Unfolded View (C#) (Create_Unfolded_View_Example_CSharp.htm)

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
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`