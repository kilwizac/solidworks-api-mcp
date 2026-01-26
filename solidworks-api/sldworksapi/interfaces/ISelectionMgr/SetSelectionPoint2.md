---
type: method
interface: ISelectionMgr
member: SetSelectionPoint2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
  -
    name: X
    type: System.Double
    description: x coordinate of the selection point
  -
    name: Y
    type: System.Double
    description: y coordinate of the selection point
  -
    name: Z
    type: System.Double
    description: z coordinate of the selection point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - point
  - select
  - points
  - setselectionpoint2
  - mgr
  - point2
  - index
  - int32
  - mark
  - double
  - boolean
---

# ISelectionMgr.SetSelectionPoint2

Sets the selection point in model space.

## Signature

```csharp
System.Boolean SetSelectionPoint2( 
   System.Int32
Index
,
   System.Int32
Mark
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Index` (System.Int32): Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
- `X` (System.Double): x coordinate of the selection point
- `Y` (System.Double): y coordinate of the selection point
- `Z` (System.Double): z coordinate of the selection point

## Return Value

True if the position of the selection point is set, false if not

## Remarks

This method allows an application to provide an XYZ position to a selected object at the given index in the
ISelectionMgr
object. This XYZ position represents a world-coordinate location in the context of that ISelectionMgr object.
The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.

## See Also

- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`