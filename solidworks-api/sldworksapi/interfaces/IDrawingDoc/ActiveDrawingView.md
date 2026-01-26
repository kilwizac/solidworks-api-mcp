---
type: property
interface: IDrawingDoc
member: ActiveDrawingView
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
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
  - IDrawingDoc.IActiveDrawingView
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.IGetFirstView
  - IDrawingDoc.InsertModelInPredefinedView
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
  - activedrawingview
  - doc
  - view
  - object
  - activate
  - each
  - current
  - sheet
  - vba
  - number
  - polylines
  - shaded
  - mode
  - visible
  - components
  - entities
  - insert
  - show
  - bom
  - table
  - balloon
  - vb
  - net
readonly: true
---

# IDrawingDoc.ActiveDrawingView

Gets the currently active drawing view.

## Signature

```csharp
System.Object ActiveDrawingView {get;}
```
## Parameters

None.

## Return Value

Currently active drawing view

## Remarks

This property returns the active drawing view, if one is active. If the drawing sheet is active, the property returns NULL and you can use
IDrawingDoc::GetCurrentSheet
to get the current sheet for this drawing.
This is a read-only property. Use
IDrawingDoc::ActivateView
to set the active drawing view.

## Examples

- Activate Each View on Current Sheet (VBA) (Activate_Each_View_on_Current_Sheet_Example_VB.htm)
- Get Number of Polylines in Shaded Mode in Drawing View (VBA) (Get_Number_of_Polylines_in_Shaded_Mode_Drawing_View_Example_VB.htm)
- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)
- Insert and Show BOM Table and BOM Balloon (C#) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_CSharp.htm)
- Insert and Show BOM Table and BOM Balloon (VB.NET) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VBNET.htm)
- Insert and Show BOM Table and BOM Balloon (VBA) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VB.htm)

## See Also

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
- `IDrawingDoc.IActiveDrawingView`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.IGetFirstView`
- `IDrawingDoc.InsertModelInPredefinedView`
- `IView.GetNextView`
- `IView.IGetNextView`