---
type: method
interface: ISelectionMgr
member: GetSelectedObjectType3
returns: System.Int32
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
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectCount2
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectsComponent2
  - ISelectionMgr.GetSelectedObjectsDrawingView2
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
  - object
  - types
  - objects
  - select
  - getselectedobjecttype3
  - mgr
  - selected
  - type3
  - index
  - int32
  - mark
  - dimension
  - tolerance
  - vba
  - projected
  - point
  - insert
  - column
  - bom
  - table
  - vb
  - net
---

# ISelectionMgr.GetSelectedObjectType3

Gets the type of object selected.

## Signature

```csharp
System.Int32 GetSelectedObjectType3( 
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

Type of object as defined in swSelectType_e

## Remarks

The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.
When reference surfaces are selected, this method returns swSelFACES instead of the entire
swSelREFSURFACES
feature.

## Examples

- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)
- Get Projected Point (VBA) (Get_Projected_Point_Example_VB.htm)
- Insert Column in BOM Table (C#) (Insert_Column_in_BOM_Table_Example_CSharp.htm)
- Insert Column in BOM Table (VB.NET) (Insert_Column_in_BOM_Table_Example_VBNET.htm)
- Insert Column in BOM Table (VBA) (Insert_Column_in_BOM_Table_Example_VB.htm)

## See Also

- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectCount2`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectsComponent2`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`