---
type: method
interface: ISelectionMgr
member: GetSelectedObjectsComponent4
returns: System.Object
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
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IComponent2.Select4
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.IGetSelectionPointInSketchSpace2
keywords:
  - components
  - see
  - also
  - icomponent2
  - select
  - component
  - selection
  - iselectionmgr
  - getselectedobjectscomponent4
  - mgr
  - selected
  - objects
  - component4
  - index
  - int32
  - mark
  - object
  - move
  - assembly
  - new
  - folder
  - vb
  - net
  - vba
  - drawing
---

# ISelectionMgr.GetSelectedObjectsComponent4

Gets the selected component in an assembly or drawing.

## Signature

```csharp
System.Object GetSelectedObjectsComponent4( 
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

Component or Drawing component

## Remarks

The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted component is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
.
The difference between this method and the now obsolete
ISelectionMgr::GetSelectedObjectsComponent3
is that ISelectionMgr::GetSelectedObjectsComponent4 can return an
IDrawingComponent
and ISelectionMgr::GetSelectedObjectsComponent3 cannot.

## Examples

- Move Assembly Components to New Folder (C#) (Move_Assembly_Components_to_New_Folder_Example_CSharp.htm)
- Move Assembly Components to New Folder (VB.NET) (Move_Assembly_Components_to_New_Folder_Example_VBNET.htm)
- Move Assembly Components to New Folder (VBA) (Move_Assembly_Components_to_New_Folder_Example_VB.htm)
- Select Drawing Component (C#) (Select_Drawing_Component_Example_CSharp.htm)
- Select Drawing Component (VB.NET) (Select_Drawing_Component_Example_VBNET.htm)
- Select Drawing Component (VBA) (Select_Drawing_Component_Example_VB.htm)

## See Also

- `IComponent2.Select4`
- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.IGetSelectionPointInSketchSpace2`