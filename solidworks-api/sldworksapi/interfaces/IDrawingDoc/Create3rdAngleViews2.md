---
type: method
interface: IDrawingDoc
member: Create3rdAngleViews2
returns: System.Boolean
parameters:
  -
    name: ModelName
    type: System.String
    description: Name of the document from which to create views
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.Create1stAngleViews2
  - IDrawingDoc.CreateAuxiliaryViewAt2
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.CreateDrawViewFromModelView2
  - IDrawingDoc.CreateDrawViewFromModelView3
  - IDrawingDoc.CreateFlatPatternViewFromModelView2
  - IDrawingDoc.CreateRelativeView
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.CreateUnfoldedViewAt3
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - standard
  - orthographic
  - create3rdangleviews2
  - idrawingdoc
  - doc
  - create3rd
  - angle
  - views2
  - model
  - name
  - string
  - boolean
  - access
  - assembly
  - dimension
  - edge
  - vba
  - select
  - entity
  - view
  - annotations
  - arrays
  - vb
  - net
---

# IDrawingDoc.Create3rdAngleViews2

Creates standard three orthographic views (third angle projection) for the specified model.

## Signature

```csharp
System.Boolean Create3rdAngleViews2( 
   System.String
ModelName
)
```
## Parameters

- `ModelName` (System.String): Name of the document from which to create views

## Return Value

True if successful, false if not

## Remarks

The views honor the automatic scaling behavior as specified in the document setting.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Select Entity in Drawing View (VBA) (Select_Entity_in_Drawing_View_Example_VB.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateDrawViewFromModelView2`
- `IDrawingDoc.CreateDrawViewFromModelView3`
- `IDrawingDoc.CreateFlatPatternViewFromModelView2`
- `IDrawingDoc.CreateRelativeView`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.CreateUnfoldedViewAt3`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`