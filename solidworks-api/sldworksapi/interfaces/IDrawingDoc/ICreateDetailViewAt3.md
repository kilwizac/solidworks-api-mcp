---
type: method
interface: IDrawingDoc
member: ICreateDetailViewAt3
returns: View
parameters:
  -
    name: X
    type: System.Double
    description: X position for the detail view
  -
    name: Y
    type: System.Double
    description: Y position for the detail view
  -
    name: Z
    type: System.Double
    description: Z position for the detail view
  -
    name: Style
    type: System.Int32
    description: Style for the detail view as defined in swDetViewStyle_e
  -
    name: Scale1
    type: System.Double
    description: Scale numerator
  -
    name: Scale2
    type: System.Double
    description: Scale denominator
  -
    name: LabelIn
    type: System.String
    description: String for the detail view label
  -
    name: Showtype
    type: System.Int32
    description: Type of sketch as defined in swDetCircleShowType_e
  -
    name: FullOutline
    type: System.Boolean
    description: True shows the full outline of the detail view, false does not
docset: sldworksapi
deprecated: true
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
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - icreatedetailviewat3
  - idrawingdoc
  - drawing
  - doc
  - create
  - detail
  - view
  - at3
  - double
  - style
  - int32
  - scale1
  - scale2
  - label
  - string
  - showtype
  - full
  - outline
  - boolean
---

# IDrawingDoc.ICreateDetailViewAt3

Obsolete. Superseded by IDrawingDoc::CreateDetailViewAt4.

## Signature

```csharp
View ICreateDetailViewAt3( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Int32
Style
,
   System.Double
Scale1
,
   System.Double
Scale2
,
   System.String
LabelIn
,
   System.Int32
Showtype
,
   System.Boolean
FullOutline
)
```
## Parameters

- `X` (System.Double): X position for the detail view
- `Y` (System.Double): Y position for the detail view
- `Z` (System.Double): Z position for the detail view
- `Style` (System.Int32): Style for the detail view as defined in swDetViewStyle_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `LabelIn` (System.String): String for the detail view label
- `Showtype` (System.Int32): Type of sketch as defined in swDetCircleShowType_e
- `FullOutline` (System.Boolean): True shows the full outline of the detail view, false does not

## Return Value

Pointer to the newly created detail view

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
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateSectionViewAt4`