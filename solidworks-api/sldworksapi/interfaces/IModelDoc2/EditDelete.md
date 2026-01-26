---
type: method
interface: IModelDoc2
member: EditDelete
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IAssemblyDoc.DeleteSelections
  - IModelDoc2.EditCopy
  - IModelDoc2.EditCut
  - IModelDoc2.Paste
keywords:
  - delete
  - selected
  - items
  - selection
  - see
  - also
  - iselectionmgr
  - editdelete
  - imodeldoc2
  - model
  - doc2
  - edit
  - void
  - undo
  - deleted
  - note
  - fire
  - post
  - notify
  - vba
  - vb
  - net
---

# IModelDoc2.EditDelete

Deletes the selected items.

## Signature

```csharp
void EditDelete()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use
IModelDocExtension::DeleteSelection2
to turn off prompting the user to confirm the deletion.

## Examples

- Undo Deleted Note and Fire Undo Post-Notify Event (VBA) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_VB.htm)
- Undo Deleted Note and Fire Undo Post-Notify Event (VB.NET) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_VBNET.htm)
- Undo Deleted Note and Fire Undo Post-Notify Event (C#) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.DeleteSelections`
- `IModelDoc2.EditCopy`
- `IModelDoc2.EditCut`
- `IModelDoc2.Paste`