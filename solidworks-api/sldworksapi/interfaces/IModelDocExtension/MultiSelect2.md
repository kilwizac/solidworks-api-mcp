---
type: method
interface: IModelDocExtension
member: MultiSelect2
returns: System.Int32
parameters:
  -
    name: Objects
    type: System.Object
    description: Array of selectable objects: can be the same type of objects (e.g., an array of faces or an array of edges) or different types of objects (e.g., an array of entities of faces and edges ) if an object is not selected, then it is ignored
  -
    name: AppendFlag
    type: System.Boolean
    description: True to append the objects to the selection list, false to replace the current selection list with these objects
  -
    name: Data
    type: System.Object
    description: ISelectData object, Nothing, or null
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IModelDocExtension.SelectAll
  - IModelDocExtension.SelectByID2
  - ISelectionMgr
keywords:
  - select
  - multiple
  - items
  - selection
  - see
  - also
  - iselectionmgr
  - multiselect2
  - imodeldocextension
  - model
  - doc
  - extension
  - multi
  - select2
  - objects
  - object
  - append
  - flag
  - boolean
  - data
  - int32
  - boxes
  - vb
  - net
  - vba
  - specify
  - iges
  - levels
  - values
  - import
  - file
  - multiselect
  - same
  - different
---

# IModelDocExtension.MultiSelect2

Selects multiple objects and returns the number of objects selected in the model.

## Signature

```csharp
System.Int32 MultiSelect2( 
   System.Object
Objects
,
   System.Boolean
AppendFlag
,
   System.Object
Data
)
```
## Parameters

- `Objects` (System.Object): Array of selectable objects: can be the same type of objects (e.g., an array of faces or an array of edges) or different types of objects (e.g., an array of entities of faces and edges ) if an object is not selected, then it is ignored
- `AppendFlag` (System.Boolean): True to append the objects to the selection list, false to replace the current selection list with these objects
- `Data` (System.Object): ISelectData object, Nothing, or null

## Return Value

Number of objects selected in the model

## Remarks

If using this method to populate...
Then...
A selection box in a PropertyManager page
IPropertyManagerPage2Handler9::OnSubmitSelection
fires when set to true and
ISelectData::Mark
is set to either a 0 or a non-0 value.
NOTE
: IPropertyManagerPage2Handler9::OnSubmitSelection only fires when set to true and ISelectData::Mark is set to 0 if using either of the now obsolete
ModelDocExtension::MultiSelect
and
IModelDocExtension::IMultiSelect
methods.
Multiple selection boxes with different multiple selections in a PropertyManager page
Set:
each selection box's
IPropertyManagerPageSelectionbox::Mark
to a different power of two; for example, 1, 2, 4, 8, etc. (Setting a selection box's mark to 0 causes all selections to appear in that selection box and the active selection box.)
ISelectData::Mark and each selection box's IPropertyManagerPageSelectionbox::Mark to the same value. See the examples for details.
NOTE:
If an object is already selected with a mark of
x
and you attempt to select the same object again using this method with AppendFlag = true, then that object remains selected with a mark with
x
. Reselecting a previously selected object does not assign a new mark value.

## Examples

- Select Multiple Objects for Selection Boxes (C#) (Select_Multiple_Objects_for_Selection_Boxes_Example_CSharp.htm)
- Select Multiple Objects for Selection Boxes (VB.NET) (Select_Multiple_Objects_for_Selection_Boxes_Example_VBNET.htm)
- Select Multiple Objects for Selection Boxes (VBA) (Select_Multiple_Objects_for_Selection_Boxes_Example_VB.htm)
- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)
- Multiselect Same and Different Objects (C#) (Multiselect_Same and_Different_Objects_Example_CSharp.htm)
- Multiselect Same and Different Objects (VB.NET) (Multiselect_Same and_Different_Objects_Example_VBNET.htm)
- Multiselect Same and Different Objects (VBA) (Multiselect_Same and_Different_Objects_Example_VB.htm)

## See Also

- `IModelDocExtension.SelectAll`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr`