---
type: method
interface: IEntity
member: Select4
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the entity to the selection list, false replaces the selection list with this entity
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - select4
  - ientity
  - entity
  - append
  - boolean
  - data
  - select
  - check
  - interference
  - using
  - iassemblydoc
  - toolscheckinterference2
  - vba
  - faces
  - associated
  - feature
  - reference
  - point
  - visible
  - components
  - entities
  - drawing
  - view
  - loop
  - edges
  - use
  - safe
  - offset
  - surface
  - vb
  - net
  - all
  - holes
  - face
---

# IEntity.Select4

Selects an entity and marks it.

## Signature

```csharp
System.Boolean Select4( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the entity to the selection list, false replaces the selection list with this entity
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the selection is successful, false if not

## Remarks

When you use this method, selection behaves differently depending on the command state of SOLIDWORKS. One case is when SOLIDWORKS is running a command that has a PropertyManager associated with a selection list box (for example, a feature creation command such as
Insert Fillet
). The selection behavior in this case is:
Selecting a new entity appends it to the selection list.
- or -
Selecting an entity that is already selected deselects the entity.
SOLIDWORKS ignores the Append argument because the selection is always appended to the selection list.
The second case is when there is no command running, which is the default state of SOLIDWORKS.
You can use this method only with
IEntity
objects that you get from the active document. For example, if Assembly1 is the active document when you call this method, then you must get the entity directly from the Assembly1 document. You can do this using items in the selection list (for example,
ISelectionMgr::GetSelectedObject6
) or you can traverse the body of an assembly component (for example,
IComponent2::GetBody
and
IBody2::GetFirstFace
). You cannot obtain the entity from the underlying part document (for example,
IComponent2::GetModelDoc
or
IBody2::GetFirstFace
).
You can use this method to select features. In Visual C++, you must first get the
IEntity
interface from the
IFeature
object.

## Examples

- Check Interference Using IAssemblyDoc::ToolsCheckInterference2 (VBA) (Check_Interference_using_AssemblyDoc_ToolsCheckInterference2_Example_VB.htm)
- Get Faces Associated with Feature (VBA) (Get_Faces_Associated_with_Feature_Example_VB.htm)
- Get Reference Point Data (VBA) (Get_Reference_Point_Data_Example_VB.htm)
- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)
- Select Loop of Edges (VBA) (Select_Loop_of_Edges_Example_VB_.htm)
- Use Safe Entity (VBA) (Use_Safe_Entity_Example_VB.htm)
- Get Offset Surface Data (C#) (Get_Offset_Surface_Data_Example_CSharp.htm)
- Get Offset Surface Data (VB.NET) (Get_Offset_Surface_Data_Example_VBNET.htm)
- Get Offset Surface Data (VBA) (Get_Offset_Surface_Data_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)