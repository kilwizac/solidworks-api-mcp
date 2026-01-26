---
type: method
interface: ISelectionMgr
member: IGetSelectionPoint2
returns: System.Double
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
  - ISelectionMgr.GetSelectedObjectCount2
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - point
  - select
  - points
  - igetselectionpoint2
  - mgr
  - point2
  - index
  - int32
  - mark
  - double
---

# ISelectionMgr.IGetSelectionPoint2

Gets the selected point in model space coordinates from the currently selected object.

## Signature

```csharp
System.Double IGetSelectionPoint2( 
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
The point returned from
ISelectionMgr::GetSelectionPoint2
or ISelectionMgr::IGetSelectionPoint2 cannot lie on the object that was selected. For example, the user can select an edge when the edge is within the pick radius of their mouse cursor. However, to get a point on a face, edge, or vertex, use that object's GetClosestPointOn method.
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

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObjectCount2`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.SetSelectionPoint2`