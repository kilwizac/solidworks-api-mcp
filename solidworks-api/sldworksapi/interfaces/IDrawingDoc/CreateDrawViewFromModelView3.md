---
type: method
interface: IDrawingDoc
member: CreateDrawViewFromModelView3
returns: View
parameters:
  -
    name: ModelName
    type: System.String
    description: Full pathname of the model document for which to create the drawing view (see Remarks )
  -
    name: ViewName
    type: System.String
    description: Name of the model view from which to create the drawing view (see Remarks )
  -
    name: LocX
    type: System.Double
    description: x location of drawing view center in meters
  -
    name: LocY
    type: System.Double
    description: y location of drawing view center in meters
  -
    name: LocZ
    type: System.Double
    description: z location of drawing view center in meters
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
  - IDrawingDoc.CreateFlatPatternViewFromModelView2
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.CreateUnfoldedViewAt3
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - view
  - see
  - also
  - iview
  - drawing
  - views
  - model
  - createdrawviewfrommodelview3
  - idrawingdoc
  - doc
  - create
  - draw
  - view3
  - name
  - string
  - loc
  - double
  - insert
  - annotations
  - vb
  - net
  - vba
---

# IDrawingDoc.CreateDrawViewFromModelView3

Creates a drawing view on the current drawing sheet using the specified model view.

## Signature

```csharp
View CreateDrawViewFromModelView3( 
   System.String
ModelName
,
   System.String
ViewName
,
   System.Double
LocX
,
   System.Double
LocY
,
   System.Double
LocZ
)
```
## Parameters

- `ModelName` (System.String): Full pathname of the model document for which to create the drawing view (see Remarks )
- `ViewName` (System.String): Name of the model view from which to create the drawing view (see Remarks )
- `LocX` (System.Double): x location of drawing view center in meters
- `LocY` (System.Double): y location of drawing view center in meters
- `LocZ` (System.Double): z location of drawing view center in meters

## Return Value

Pointer to the newly create IView object

## Remarks

This method:
Places the center of the view at the specified location.
Uses the
swAutomaticScaling3ViewDrawings
setting to set the view scale. If this setting is set to True, then when a new drawing view is inserted, that view automatically scales to fit nicely on the drawing sheet. If there are no views on the sheet, the sheet scale is changed to the appropriate scale, and the view created uses the sheet scale.
If a model document  is currently open in SOLIDWORKS and you don't know its full pathname, call
IModelDoc2::GetPathName
to populate ModelName. Include the
.sldprt
or
.sldasm
extension in the pathname.
ViewName must exactly match the name of the model view. For example, the names of the standard views begin with an asterisk. This asterisk is part of the view name and must be included (for example, "*Front").

## Examples

- Insert Model Annotations (C#) (Insert_Model_Annotations_Example_CSharp.htm)
- Insert Model Annotations (VB.NET) (Insert_Model_Annotations_Example_VBNET.htm)
- Insert Model Annotations (VBA) (Insert_Model_Annotations_Example_VB.htm)

## See Also

- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateFlatPatternViewFromModelView2`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.CreateUnfoldedViewAt3`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`