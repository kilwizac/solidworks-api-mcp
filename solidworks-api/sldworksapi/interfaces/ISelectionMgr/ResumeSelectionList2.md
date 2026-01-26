---
type: method
interface: ISelectionMgr
member: ResumeSelectionList2
returns: void
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append the new selection list to the suspended selection list and resume the combined selection list, false to just resume the suspended selection list
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
  - resumeselectionlist2
  - mgr
  - resume
  - list2
  - append
  - boolean
  - void
  - add
  - list
  - vba
  - vb
  - net
---

# ISelectionMgr.ResumeSelectionList2

Reinstates the previously suspended selection list.

## Signature

```csharp
void ResumeSelectionList2( 
   System.Boolean
Append
)
```
## Parameters

- `Append` (System.Boolean): True to append the new selection list to the suspended selection list and resume the combined selection list, false to just resume the suspended selection list

## Return Value

Unknown.

## Remarks

To add objects to a selection list without pre-selecting the objects in the user interface:
Call
ISelectionMgr::SuspendSelectionList
to suspend the current selection list, preserving its contents and starting a new selection list.
To populate the new selection list, call
ISelectionMgr::AddSelectionListObject
,
ISelectionMgr::AddSelectionListObjects
, or
IModelDocExtension::SelectByID2
.
NOTE
: To add objects in a
selection set
to a new selection list, call
ISelectionSet::Select
.
Process the objects in the new selection list.
Call this method to reinstate the suspended selection list, setting Append to true to append the new selection list.

## Examples

- Add Objects to Selection List (VBA) (Add_Objects_to_Selection_List_Example_VB.htm)
- Add Objects to Selection List (VB.NET) (Add_Objects_to_Selection_List_Example_VBNET.htm)
- Add Objects to Selection List (C#) (Add_Objects_to_Selection_List_Example_CSharp.htm)