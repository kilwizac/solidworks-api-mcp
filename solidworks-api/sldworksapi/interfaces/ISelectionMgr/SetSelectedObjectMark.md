---
type: method
interface: ISelectionMgr
member: SetSelectedObjectMark
returns: System.Boolean
parameters:
  -
    name: AtIndex
    type: System.Int32
    description: 1 <= Index position within the current list of selected items <= ISelectionMgr::GetSelectedObjectCount2
  -
    name: Mark
    type: System.Int32
    description: Number to use as a mark for the selected item; this number is used by certain API functions that require ordered entity selection
  -
    name: Action
    type: System.Int32
    description: Action to take as defined in swSelectionMarkAction_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectCount2
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectedObjectsComponent2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - mark
  - setselectedobjectmark
  - mgr
  - selected
  - object
  - index
  - int32
  - action
  - boolean
  - thicken
  - surface
  - generate
  - boss
  - vba
  - vb
  - net
---

# ISelectionMgr.SetSelectedObjectMark

Sets the mark value for the specified selection.

## Signature

```csharp
System.Boolean SetSelectedObjectMark( 
   System.Int32
AtIndex
,
   System.Int32
Mark
,
   System.Int32
Action
)
```
## Parameters

- `AtIndex` (System.Int32): 1 <= Index position within the current list of selected items <= ISelectionMgr::GetSelectedObjectCount2
- `Mark` (System.Int32): Number to use as a mark for the selected item; this number is used by certain API functions that require ordered entity selection
- `Action` (System.Int32): Action to take as defined in swSelectionMarkAction_e

## Return Value

True if the selection is successfully set, false if not

## Examples

- Thicken Surface and Generate Boss (VBA) (Thicken_Surface_and_Generate_Boss_Example_VB.htm)
- Thicken Surface and Generate Boss (VB.NET) (Thicken_Surface_and_Generate_Boss_Example_VBNET.htm)
- Thicken Surface and Generate Boss (C#) (Thicken_Surface_and_Generate_Boss_Example_CSharp.htm)

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectCount2`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectedObjectsComponent2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`
- `ISelectionMgr.SetSelectionPoint2`