---
type: method
interface: ISelectionMgr
member: IDeSelect2
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of objects to deselect
  -
    name: AtIndex
    type: System.Int32
    description: Index position within the current list of selected items where index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
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
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectCount2
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - deselect
  - objects
  - ideselect2
  - mgr
  - de
  - select2
  - count
  - int32
  - index
  - mark
---

# ISelectionMgr.IDeSelect2

Deselects the specified entity.

## Signature

```csharp
System.Int32 IDeSelect2( 
   System.Int32
Count
,
   ref System.Int32
AtIndex
,
   System.Int32
Mark
)
```
## Parameters

- `Count` (System.Int32): Number of objects to deselect
- `AtIndex` (System.Int32): Index position within the current list of selected items where index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

1 if the specified entity is deselected, 0 if not

## Remarks

AtIndex should be either an array of 32-bit integers or a single 32-bit integer. See
Long vs. Integer
for details about data types.

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectCount2`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`