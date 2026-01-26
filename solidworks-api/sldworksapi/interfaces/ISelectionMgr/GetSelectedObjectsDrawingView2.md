---
type: method
interface: ISelectionMgr
member: GetSelectedObjectsDrawingView2
returns: View
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - drawings
  - selections
  - ui
related:
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - view
  - select
  - iview
  - drawing
  - views
  - getselectedobjectsdrawingview2
  - mgr
  - selected
  - objects
  - view2
  - index
  - int32
  - mark
  - labels
  - datum
  - origin
  - vb
  - net
  - vba
---

# ISelectionMgr.GetSelectedObjectsDrawingView2

Gets the drawing view for the selected object.

## Signature

```csharp
View GetSelectedObjectsDrawingView2( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

Drawing view

## Remarks

The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IDrawingDoc event
DynamicHighlightNotify
.

## Examples

- Get Labels of Datum Origin (C#) (Get_Labels_of_Datum_Origin_Example_CSharp.htm)
- Get Labels of Datum Origin (VB.NET) (Get_Labels_of_Datum_Origin_Example_VBNET.htm)
- Get Labels of Datum Origin (VBA) (Get_Labels_of_Datum_Origin_Example_VB.htm)

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`