---
type: method
interface: ISelectionMgr
member: IGetSelectionPointInSketchSpace2
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = only the selections without marks Any other value that was used to mark and select an object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
  - sketches
related:
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.IDeSelect2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - point
  - select
  - points
  - igetselectionpointinsketchspace2
  - mgr
  - sketch
  - space2
  - index
  - int32
  - mark
  - double
---

# ISelectionMgr.IGetSelectionPointInSketchSpace2

Gets the selection point projected on to the active sketch and returned in sketch space.

## Signature

```csharp
System.Double IGetSelectionPointInSketchSpace2( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value that was used to mark and select an object

## Return Value

in-process, unmanaged C++: Pointer to an array of 3 doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The selection point is projected on to the currently active sketch, resulting in a z value of 0.00.
If a sketch is not currently active, then the return value is the same as that returned by
ISelectionMgr::GetSelectionPoint2
or
ISelectionMgr::IGetSelectionPoint2
. You can determine if a sketch is active by checking for a null return value from
IModelDoc2::GetActiveSketch2
or
IModelDoc2::IGetActiveSketch2
.
The index starts at 1. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.IDeSelect2`