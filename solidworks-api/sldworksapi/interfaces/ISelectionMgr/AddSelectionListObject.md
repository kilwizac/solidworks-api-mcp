---
type: method
interface: ISelectionMgr
member: AddSelectionListObject
returns: System.Boolean
parameters:
  -
    name: Object
    type: System.Object
    description: Object to add to the selection list (see Remarks )
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
  - select
  - objects
  - selection
  - see
  - also
  - iselectionmgr
  - addselectionlistobject
  - mgr
  - add
  - list
  - object
  - data
  - boolean
  - insert
  - indent
  - feature
  - vb
  - net
  - vba
---

# ISelectionMgr.AddSelectionListObject

Adds the specified object to the selection list.

## Signature

```csharp
System.Boolean AddSelectionListObject( 
   System.Object
Object
,
   System.Object
SelectData
)
```
## Parameters

- `Object` (System.Object): Object to add to the selection list (see Remarks )
- `SelectData` (System.Object): ISelectData

## Return Value

True if successful, false if not

## Remarks

Call
ISelectionMgr::CreateSelectData
to specify SelectData.
To add objects to a selection list without pre-selecting the objects in the user interface:
Call
ISelectionMgr::SuspendSelectionList
to suspend the current selection list, preserving its contents and starting a new selection list.
Call ISelectionMgr::AddSelectionListObject or
ISelectionMgr::AddSelectionListObjects
to populate the new selection list.
Process the objects in the new selection list.
Call
ISelectionMgr::ResumeSelectionList
to reinstate the suspended selection list.
To programmatically pre-select objects in the user interface and add them to a selection list, use
IModelDocExtension::SelectByID2
.

## Examples

- Insert Indent Feature (C#) (Insert_Indent_Feature_Example_CSharp.htm)
- Insert Indent Feature (VB.NET) (Insert_Indent_Feature_Example_VBNET.htm)
- Insert Indent Feature (VBA) (Insert_Indent_Feature_Example_VB.htm)

## See Also

- `ISelectionSetItem.GetCorrespondingItem`