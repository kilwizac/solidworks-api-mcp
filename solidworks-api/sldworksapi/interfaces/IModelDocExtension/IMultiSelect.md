---
type: method
interface: IModelDocExtension
member: IMultiSelect
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selectable objects
  -
    name: Objects
    type: System.Object
    description: Array of selectable objects: objects can be heterogeneous if any object is not selected, then it is ignored
  -
    name: AppendFlag
    type: System.Boolean
    description: True to append the objects to the selection list, false replace the current selection list with these objects
  -
    name: Data
    type: SelectData
    description: ISelectData object
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IModelDocExtension.MultiSelect
  - IModelDocExtension.SelectAll
  - IModelDocExtension.SelectByID2
  - ISelectionMgr
keywords:
  - imultiselect
  - imodeldocextension
  - model
  - doc
  - extension
  - multi
  - select
  - count
  - int32
  - objects
  - object
  - append
  - flag
  - boolean
  - data
---

# IModelDocExtension.IMultiSelect

Obsolete. Superseded by IModelDocExtension::MultiSelect2.

## Signature

```csharp
System.Int32 IMultiSelect( 
   System.Int32
Count
,
   ref System.Object
Objects
,
   System.Boolean
AppendFlag
,
   SelectData
Data
)
```
## Parameters

- `Count` (System.Int32): Number of selectable objects
- `Objects` (System.Object): Array of selectable objects: objects can be heterogeneous if any object is not selected, then it is ignored
- `AppendFlag` (System.Boolean): True to append the objects to the selection list, false replace the current selection list with these objects
- `Data` (SelectData): ISelectData object

## Return Value

Number of objects selected

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

- `IModelDocExtension.MultiSelect`
- `IModelDocExtension.SelectAll`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr`