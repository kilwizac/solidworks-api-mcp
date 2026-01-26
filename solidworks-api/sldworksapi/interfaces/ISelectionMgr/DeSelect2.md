---
type: method
interface: ISelectionMgr
member: DeSelect2
returns: System.Int32
parameters:
  -
    name: AtIndex
    type: System.Object
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
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectCount2
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
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
  - deselect
  - objects
  - deselect2
  - mgr
  - de
  - select2
  - index
  - object
  - mark
  - int32
  - marked
  - entity
  - vb
  - net
  - vba
---

# ISelectionMgr.DeSelect2

Deselects the specified entity.

## Signature

```csharp
System.Int32 DeSelect2( 
   System.Object
AtIndex
,
   System.Int32
Mark
)
```
## Parameters

- `AtIndex` (System.Object): Index position within the current list of selected items where index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

1 if the specified entity is deselected, 0 if not

## Remarks

If running SOLIDWORKS x64, then you must declare AtIndex as a Long in VBA.
AtIndex should be either an array of 32-bit integers or a single 32-bit integer. See
Long vs. Integer
for details about data types.

## Examples

- Deselect Marked Entity (C#) (Deselect_Marked_Entity_Example_CSharp.htm)
- Deselect Marked Entity (VB.NET) (Deselect_Marked_Entity_Example_VBNET.htm)
- Deselect Marked Entity (VBA) (Deselect_Marked_Entity_Example_VB.htm)

## See Also

- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectCount2`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`