---
type: method
interface: ISelectionSetItem
member: GetCorrespondingItem
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - getcorrespondingitem
  - iselectionsetitem
  - selection
  - item
  - corresponding
  - object
  - dispatch
  - objects
  - items
  - vb
  - net
  - vba
---

# ISelectionSetItem.GetCorrespondingItem

Gets the Dispatch object for this selection set item.

## Signature

```csharp
System.Object GetCorrespondingItem()
```
## Parameters

None.

## Return Value

Pointer to the Dispatch object for this selection set item (see Remarks )

## Remarks

You can use this method to:
pass the Dispatch object to
ISelectionMgr::AddSelectionListObject
or
ISelectionMgr::AddSelectionListObjects
.
typecast each element in
an array containing selection set item types
. See the examples.

## Examples

- Get Dispatch Objects for Selection Set Items (C#) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_CSharp.htm)
- Get Dispatch Objects for Selection Set Items (VB.NET) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_VBNET.htm)
- Get Dispatch Objects for Selection Set Items (VBA) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_VB.htm)