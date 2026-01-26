---
type: method
interface: ISelectionSet
member: Select
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - selection
  - select
  - see
  - also
  - iselectionmgr
  - objects
  - iselectionset
  - boolean
  - vb
  - net
  - vba
---

# ISelectionSet.Select

Selects all of the objects in this selection set.

## Signature

```csharp
System.Boolean Select()
```
## Parameters

None.

## Return Value

True if all of the objects in this selection set are selected, false if not (see Remarks )

## Remarks

To use this method:
Call
ISelectionMgr::SuspendSelectionList
to suspend the current selection list, preserving its contents and starting a new selection list.
Call ISelectionSet::Select to add the objects in the selection set to the new selection list.
Process the objects in the new selection list.
Call
ISelectionMgr::ResumeSelectionList
to reinstate the suspended selection list.

## Examples

- Get Objects in Selection Set (C#) (Get_Objects_in_Selection_Set_Example_CSharp.htm)
- Get Objects in Selection Set (VB.NET) (Get_Objects_in_Selection_Set_Example_VBNET.htm)
- Get Objects in Selection Set (VBA) (Get_Objects_in_Selection_Set_Example_VB.htm)