---
type: method
interface: ISelectionMgr
member: SuspendSelectionList
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - objects
  - suspendselectionlist
  - mgr
  - suspend
  - list
  - int32
  - add
  - vb
  - net
  - vba
---

# ISelectionMgr.SuspendSelectionList

Suspends the current selection list.

## Signature

```csharp
System.Int32 SuspendSelectionList()
```
## Parameters

None.

## Return Value

0 if the suspended list is empty, 1 if not

## Remarks

To add objects to a selection list without preselecting the objects in the user interface:
Call ISelectionMgr::SuspendSelectionList to suspend the current selection list, preserving its contents and starting a new selection list.
To populate a new selection list, call
ISelectionMgr::AddSelectionListObject
or
ISelectionMgr::AddSelectionListObjects
.
NOTE
: To add objects in a
selection set
to a new selection list, call
ISelectionSet::Select
.
Call
ISelectionMgr::ResumeSelectionList
to reinstate the suspended selection list.
To programmatically preselect objects in the user interface and add them to a selection list, use
IModelDocExtension::SelectByID2
.
IModelDoc2::ClearSelection2
works like ISelectionMgr::SuspendSelectionList to clear the selection list. Unlike IModelDoc2::ClearSelection2, this method preserves the list for future reinstatement.

## Examples

- Add Objects to Selection List (C#) (Add_Objects_to_Selection_List_Example_CSharp.htm)
- Add Objects to Selection List (VB.NET) (Add_Objects_to_Selection_List_Example_VBNET.htm)
- Add Objects to Selection List (VBA) (Add_Objects_to_Selection_List_Example_VB.htm)
- Get Objects in Selection List (C#) (Get_Objects_in_Selection_Set_Example_CSharp.htm)
- Get Objects in Selection List (VB.NET) (Get_Objects_in_Selection_Set_Example_VBNET.htm)
- Get Objects in Selection List (VBA) (Get_Objects_in_Selection_Set_Example_VB.htm)