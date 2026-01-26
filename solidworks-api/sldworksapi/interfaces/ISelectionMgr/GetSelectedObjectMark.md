---
type: method
interface: ISelectionMgr
member: GetSelectedObjectMark
returns: System.Int32
parameters:
  -
    name: AtIndex
    type: System.Int32
    description: Index position within the current list of selected items where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IModelDocExtension.SelectByID2
  - ISelectData.Mark
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
  - ISelectionMgr.SetSelectedObjectMark
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - mark
  - getselectedobjectmark
  - mgr
  - selected
  - object
  - index
  - int32
---

# ISelectionMgr.GetSelectedObjectMark

Gets the value of the mark for the specified selection.

## Signature

```csharp
System.Int32 GetSelectedObjectMark( 
   System.Int32
AtIndex
)
```
## Parameters

- `AtIndex` (System.Int32): Index position within the current list of selected items where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2

## Return Value

Number used as a mark for the selected item; this number is used by certain API functions that require ordered entity selection

## See Also

- `IModelDocExtension.SelectByID2`
- `ISelectData.Mark`
- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`
- `ISelectionMgr.SetSelectedObjectMark`