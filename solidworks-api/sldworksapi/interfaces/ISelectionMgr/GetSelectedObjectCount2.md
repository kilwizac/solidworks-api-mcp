---
type: method
interface: ISelectionMgr
member: GetSelectedObjectCount2
returns: System.Int32
parameters:
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
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - number
  - getselectedobjectcount2
  - mgr
  - selected
  - object
  - count2
  - mark
  - int32
  - create
  - multi
  - row
  - callouts
  - vba
  - lists
  - library
  - feature
  - references
  - vb
  - net
---

# ISelectionMgr.GetSelectedObjectCount2

Gets the number of selected objects.

## Signature

```csharp
System.Int32 GetSelectedObjectCount2( 
   System.Int32
Mark
)
```
## Parameters

- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

Number of selected objects

## Remarks

This method can be used to determine if a valid selection was made.

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Selection Lists (VBA) (Selection_Lists_VB.htm)
- Create Library Feature With References (C#) (Create_Library_Feature_With_References_Example_CSharp.htm)
- Create Library Feature With References (VB.NET) (Create_Library_Feature_With_References_Example_VBNET.htm)
- Create Library Feature With References (VBA) (Create_Library_Feature_With_References_Example_VB.htm)

## See Also

- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`