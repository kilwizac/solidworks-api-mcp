---
type: method
interface: IModelDocExtension
member: MultiSelect
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
deprecated: true
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IModelDocExtension.IMultiSelect
  - IModelDocExtension.SelectAll
  - IModelDocExtension.SelectByID2
  - ISelectionMgr
keywords:
  - multiselect
  - imodeldocextension
  - model
  - doc
  - extension
  - multi
  - select
  - objects
  - object
  - append
  - flag
  - boolean
  - data
  - int32
---

# IModelDocExtension.MultiSelect

Obsolete. Superseded by IModelDocExtension::MultiSelect2.

## Signature

```csharp
System.Int32 MultiSelect( 
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

If this now obsolete method is used to populate a selection box in a PropertyManager page, then
IPropertyManagerPage2Handler9::OnSubmitSelection
only fires when set to true and
ISelectData::Mark
is set to 0.
Use
IModelDocExtension::MultiSelect2
if you need IPropertyManagerPage2Handler9::OnSubmitSelection to fire when set to true and ISelectData::Mark is set to either a 0 or non-0 value.
The
Callout
property of the
ISelectData
object is not used by this method.

## See Also

- `IModelDocExtension.IMultiSelect`
- `IModelDocExtension.SelectAll`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr`