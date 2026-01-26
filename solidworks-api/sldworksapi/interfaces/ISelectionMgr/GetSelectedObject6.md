---
type: method
interface: ISelectionMgr
member: GetSelectedObject6
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position within the current list of selected items, where Index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
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
  - IFeature.GetNameForSelection
  - IModelDocExtension.SelectByID2
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent3
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.IDeSelect2
  - ISelectionMgr.IGetSelectionPoint2
  - ISelectionMgr.SetSelectedObjectMark
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - objects
  - select
  - getselectedobject6
  - mgr
  - selected
  - object6
  - index
  - int32
  - mark
  - object
  - access
  - assembly
  - spline
  - points
  - create
  - imported
  - surface
  - body
  - sketch
  - selections
  - vba
  - names
  - note
  - custom
  - properties
  - cut
  - list
  - item
  - insert
  - bom
  - table
  - replace
  - text
  - areas
  - midsurface
  - faces
  - vb
  - net
  - dimxpertmanager
  - info
---

# ISelectionMgr.GetSelectedObject6

Gets the selected object.

## Signature

```csharp
System.Object GetSelectedObject6( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position within the current list of selected items, where Index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

Selected object as defined in swSelectType_e ; Nothing or null might be returned if the type is not supported or if nothing is selected

## Remarks

If...
Then this method returns...
Reference surfaces are selected
Reference surface faces instead of the entire reference surface feature.
Top-level item is selected in the DimXpertManager tab
Non-top-level items are selected in the DimXpertManager tab
Dimensions are selected
IDimXpertManager
object.
IFeature
object.
IDisplayDimension
object instead of the
IDimension
object.
ISelectionMgr
object obtained from a drawing document
Selected
IDrawingComponent
object.
ISelectionMgr object obtained from a part or assembly document
IComponent2
object.
You specify -1 for the Index argument
The Mark argument is ignored and the dynamically highlighted entity is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Get Spline Points (C++) (Get_Spline_Points_Example_CPlusPlus_COM.htm)
- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)
- Access Selections (VBA) (Access_Selections_Example_VB.htm)
- Get and Set Names of Note (VBA) (Get_and_Set_Names_of_Note_Example_VB.htm)
- Get Custom Properties for Cut-list Item (VBA) (Get_Custom_Properties_for_Cut-list_Item_Example_VB.htm)
- Insert BOM Table (VBA) (Insert_BOM_Table_Example_VB.htm)
- Replace Sketch Text (VBA) (Replace_Sketch_Text_Example_VB.htm)
- Get Areas of MidSurface Faces (C#) (Get_Areas_of_MidSurface_Faces_Example_CSharp.htm)
- Get Areas of MidSurface Faces (VB.NET) (Get_Areas_of_MidSurface_FAces_Example_VBNET.htm)
- Get Areas of MidSurface Faces (VBA) (Get_Areas_of_MidSurface_Faces_Example_VB.htm)
- Get DimXpertManager Info (VBA) (Get_DimXpertManager_Info_Example_VB.htm)
- Get DimXpertManager Info (VB.NET) (Get_DimXpertManager_Info_Example_VBNET.htm)

## See Also

- `IFeature.GetNameForSelection`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent3`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.IDeSelect2`
- `ISelectionMgr.IGetSelectionPoint2`
- `ISelectionMgr.SetSelectedObjectMark`
- `ISelectionMgr.SetSelectionPoint2`