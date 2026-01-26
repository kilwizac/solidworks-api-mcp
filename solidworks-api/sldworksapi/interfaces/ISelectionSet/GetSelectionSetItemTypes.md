---
type: method
interface: ISelectionSet
member: GetSelectionSetItemTypes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - ISelectionSetItem.GetCorrespondingItem
keywords:
  - getselectionsetitemtypes
  - iselectionset
  - selection
  - item
  - types
  - object
  - create
  - delete
  - vb
  - net
  - vba
  - dispatch
  - objects
  - items
---

# ISelectionSet.GetSelectionSetItemTypes

Gets the types of entities in this selection set.

## Signature

```csharp
System.Object GetSelectionSetItemTypes()
```
## Parameters

None.

## Return Value

Array of longs or integers of the types of entities in this selection set as defined in swSelectType_e (see Remarks )

## Remarks

The order of the array of the types of entities returned by this method matches the order of the array of selection set items returned by
ISelectionSet::GetSelectionSetItems
.

## Examples

- Create and Delete Selection Sets (C#) (Create_and_Delete_Selection_Sets_Example_CSharp.htm)
- Create and Delete Selection Sets (VB.NET) (Create_and_Delete_Selection_Sets_Example_VBNET.htm)
- Create and Delete Selection Sets (VBA) (Create_and_Delete_Selection_Sets_Example_VB.htm)
- Get Dispatch Objects for Selection Set Items (C#) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_CSharp.htm)
- Get Dispatch Objects for Selection Set Items (VB.NET) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_VBNET.htm)
- Get Dispatch Objects for Selection Set Items (VBA) (Get_Dispatch_Objects_for_Selection_Set_Items_Example_VB.htm)

## See Also

- `ISelectionSetItem.GetCorrespondingItem`