---
type: method
interface: ISelectionMgr
member: GetSelectedObjectsComponent3
returns: Component2
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position within the current list of selected items, where the index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = Only the selections without marks Any other value = Value that was used to mark and select an object
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - selections
related:
  - IComponent2.Select3
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
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
  - component
  - components
  - icomponent2
  - select
  - getselectedobjectscomponent3
  - mgr
  - selected
  - objects
  - component3
  - index
  - int32
  - mark
  - component2
  - access
  - selections
  - vba
  - add
  - comment
  - assembly
  - align
  - origin
  - planes
  - display
  - temporary
  - body
  - vb
  - net
---

# ISelectionMgr.GetSelectedObjectsComponent3

Obsolete. Superseded by ISelectionMgr::GetSelectedObjectsComponent4.

## Signature

```csharp
Component2 GetSelectedObjectsComponent3( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position within the current list of selected items, where the index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = Only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

Component

## Remarks

The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted component is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
.
The difference between this obsolete method and
ISelectionMgr::GetSelectedObjectsComponent4
is that ISelectionMgr::GetSelectedObjectsComponent4 can return an
IDrawingComponent
and ISelectionMgr::GetSelectedObjectsComponent3 cannot.

## Examples

- Access Selections (VBA) (Access_Selections_Example_VB.htm)
- Add Comment to Assembly Component (VBA) (Add_Comment_to_Assembly_Component_Example_VB.htm)
- Align Assembly Component to Assembly Origin and Planes (VBA) (Align_Assembly_Component_to_Assembly_Origin_and_Planes_Example_VB.htm)
- Display Temporary Body (C#) (Display_Temporary_Body_Example_CSharp.htm)
- Display Temporary Body (VB.NET) (Display_Temporary_Body_Example_VBNET.htm)
- Display Temporary Body (VBA) (Display_Temporary_Body_Example_VB.htm)

## See Also

- `IComponent2.Select3`
- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`