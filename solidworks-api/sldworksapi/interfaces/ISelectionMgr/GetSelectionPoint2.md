---
type: method
interface: ISelectionMgr
member: GetSelectionPoint2
returns: System.Object
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
  - selections
related:
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - point
  - select
  - points
  - getselectionpoint2
  - mgr
  - point2
  - index
  - int32
  - mark
  - object
  - create
  - multi
  - row
  - callouts
  - vba
  - drag
  - arrow
  - manipulator
  - vb
  - net
---

# ISelectionMgr.GetSelectionPoint2

Gets the selected point in model space coordinates from the currently selected object.

## Signature

```csharp
System.Object GetSelectionPoint2( 
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

Array of 3 doubles (x,y,z)

## Remarks

The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.
The point returned from ISelectionMgr::GetSelectionPoint2 or
ISelectionMgr::IGetSelectionPoint2
cannot lie on the object that was selected. For example, the user can select an edge when the edge is within the pick radius of their mouse cursor. However, to get a point on a face, edge, or vertex, use that object's GetClosestPointOn method.
To do this, get the
IFace2
,
IEdge
, or
IVertex
object using the
ISelectionMgr::GetSelectedObject6
method, and then use that object to call GetClosestPointOn. Pass the X,Y,Z values returned from ISelectionMgr::GetSelectionPoint2 or ISelectionMgr::IGetSelectionPoint2, and the GetClosestPointOn method will return the closest X,Y,Z point that is on the face, edge, or vertex.
If the selected object is sketch geometry, then the coordinates returned are in sketch space. The coordinates are 2D and related to the origin of the sketch that owns the selected geometry.

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Create Drag Arrow Manipulator (C#) (Create_Drag_Arrow_Manipulator_Example_CSharp.htm)
- Create Drag Arrow Manipulator (VB.NET) (Create_Drag_Arrow_Manipulator_Example_VBNET.htm)
- Create Drag Arrow Manipulator (VBA) (Create_Drag_Arrow_Manipulator_Example_VB.htm)

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`
- `ISelectionMgr.SetSelectionPoint2`