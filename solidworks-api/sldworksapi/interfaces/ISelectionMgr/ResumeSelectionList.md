---
type: method
interface: ISelectionMgr
member: ResumeSelectionList
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - resumeselectionlist
  - iselectionmgr
  - selection
  - mgr
  - resume
  - list
  - void
  - objects
  - vb
  - net
  - vba
---

# ISelectionMgr.ResumeSelectionList

Obsolete. Superseded by ISelectionMgr::ResumeSelectionList2.

## Signature

```csharp
void ResumeSelectionList()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To add objects to a selection list without preselecting the objects in the user interface:
Call
ISelectionMgr::SuspendSelectionList
to suspend the current selection list, preserving its contents and starting a new selection list.
To populate a new selection list, call
ISelectionMgr::AddSelectionListObject
or
ISelectionMgr::AddSelectionListObjects
.
NOTE
: To add objects in a
selection set
in a new selection list, call
ISelectionSet::Select
.
Process the objects in the new selection list.
Call ISelectionMgr::ResumeSelectionList to reinstate the suspended selection list.
To programmatically preselect objects in the user interface and add them to a selection list, use
IModelDocExtension::SelectByID2
.

## Examples

- Get Objects in Selection List (C#) (Get_Objects_in_Selection_Set_Example_CSharp.htm)
- Get Objects in Selection List (VB.NET) (Get_Objects_in_Selection_Set_Example_VBNET.htm)
- Get Objects in Selection List (VBA) (Get_Objects_in_Selection_Set_Example_VB.htm)