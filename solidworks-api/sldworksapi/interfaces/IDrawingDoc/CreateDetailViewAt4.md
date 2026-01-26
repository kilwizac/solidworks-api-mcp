---
type: method
interface: IDrawingDoc
member: CreateDetailViewAt4
returns: System.Object
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
    description: Detail view label
  -
    name: Showtype
    type: System.Int32
    description: Type of sketch for the detail view as defined in swDetCircleShowType_e
  -
    name: FullOutline
    type: System.Boolean
    description: True to show a full outline, false to not; valid only if NoOutline is false
  -
    name: JaggedOutline
    type: System.Boolean
    description: True to show a jagged outline, false to not; only valid if NoOutline is false
  -
    name: NoOutline
    type: System.Boolean
    description: True to not show an outline, false to show an outline
  -
    name: ShapeIntensity
    type: System.Int32
    description: Intensity of jagged outline; valid range is 1 (most) to 5 (least) and only valid if JaggedOutline is true and NoOutline is false
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
  - IDrawingDoc.CreateDrawViewFromModelView3
  - IDrawingDoc.CreateSectionViewAt5
  - IDrawingDoc.CreateUnfoldedViewAt3
  - IDrawingDoc.CreateViewport3
keywords:
  - detail
  - views
  - drawing
  - see
  - also
  - iview
  - createdetailviewat4
  - idrawingdoc
  - doc
  - create
  - view
  - at4
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
  - jagged
  - no
  - shape
  - intensity
  - object
  - circle
  - vb
  - net
  - vba
---

# IDrawingDoc.CreateDetailViewAt4

Creates a detail view in a drawing document.

## Signature

```csharp
System.Object CreateDetailViewAt4( 
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
,
   System.Boolean
JaggedOutline
,
   System.Boolean
NoOutline
,
   System.Int32
ShapeIntensity
)
```
## Parameters

- `X` (System.Double): X position for the detail view
- `Y` (System.Double): Y position for the detail view
- `Z` (System.Double): Z position for the detail view
- `Style` (System.Int32): Style for the detail view as defined in swDetViewStyle_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `LabelIn` (System.String): Detail view label
- `Showtype` (System.Int32): Type of sketch for the detail view as defined in swDetCircleShowType_e
- `FullOutline` (System.Boolean): True to show a full outline, false to not; valid only if NoOutline is false
- `JaggedOutline` (System.Boolean): True to show a jagged outline, false to not; only valid if NoOutline is false
- `NoOutline` (System.Boolean): True to not show an outline, false to show an outline
- `ShapeIntensity` (System.Int32): Intensity of jagged outline; valid range is 1 (most) to 5 (least) and only valid if JaggedOutline is true and NoOutline is false

## Return Value

Detail view

## Examples

- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)

## See Also

- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDrawViewFromModelView3`
- `IDrawingDoc.CreateSectionViewAt5`
- `IDrawingDoc.CreateUnfoldedViewAt3`
- `IDrawingDoc.CreateViewport3`