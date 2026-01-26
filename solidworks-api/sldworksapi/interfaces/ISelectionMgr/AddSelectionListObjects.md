---
type: method
interface: ISelectionMgr
member: AddSelectionListObjects
returns: System.Int32
parameters:
  -
    name: Objects
    type: System.Object
    description: Array of objects to add to the selection list (see Remarks )
  -
    name: SelectData
    type: System.Object
    description: ISelectData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionSetItem.GetCorrespondingItem
keywords:
  - objects
  - select
  - selection
  - see
  - also
  - iselectionmgr
  - addselectionlistobjects
  - mgr
  - add
  - list
  - object
  - data
  - int32
  - vba
  - vb
  - net
---

# ISelectionMgr.AddSelectionListObjects

Adds the specified objects to the selection list.

## Signature

```csharp
System.Int32 AddSelectionListObjects( 
   System.Object
Objects
,
   System.Object
SelectData
)
```
## Parameters

- `Objects` (System.Object): Array of objects to add to the selection list (see Remarks )
- `SelectData` (System.Object): ISelectData

## Return Value

Number of objects added to the selection list

## Remarks

For VB.NET and C# applications, specify Objects as an array of System.Runtime.InteropServices.DispatchWrappers. See the examples and
IDispatch Object Arrays as Input in .NET
for more information.
Call
ISelectionMgr::CreateSelectData
to specify SelectData.
To add objects to a selection list without preselecting the objects in the user interface:
Call
ISelectionMgr::SuspendSelectionList
to suspend the current selection list, preserving its contents and starting a new selection list.
Call
ISelectionMgr::AddSelectionListObject
or ISelectionMgr::AddSelectionListObjects to populate a new selection list.
Process the objects in the new selection list.
Call
ISelectionMgr::ResumeSelectionList
to reinstate the suspended selection list.
To programmatically preselect objects in the user interface and add them to a selection list, use
IModelDocExtension::SelectByID2
.

## Examples

- Add Objects to Selection List (VBA) (Add_Objects_to_Selection_List_Example_VB.htm)
- Add Objects to Selection List (VB.NET) (Add_Objects_to_Selection_List_Example_VBNET.htm)
- Add Objects to Selection List (C#) (Add_Objects_to_Selection_List_Example_CSharp.htm)

## See Also

- `ISelectionSetItem.GetCorrespondingItem`