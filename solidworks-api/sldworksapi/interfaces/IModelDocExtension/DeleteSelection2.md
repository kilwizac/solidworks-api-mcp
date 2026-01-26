---
type: method
interface: IModelDocExtension
member: DeleteSelection2
returns: System.Boolean
parameters:
  -
    name: DeleteOptions
    type: System.Int32
    description: Options as defined in swDeleteSelectionOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IAssemblyDoc.DeleteSelections
  - IModelDoc2.EditDelete
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - delete
  - selected
  - items
  - deleteselection2
  - imodeldocextension
  - model
  - doc
  - extension
  - selection2
  - options
  - int32
  - boolean
  - create
  - extruded
  - thin
  - feature
  - vba
  - undo
  - fire
  - post
  - notify
  - vb
  - net
---

# IModelDocExtension.DeleteSelection2

Deletes the selected items, with the option to delete absorbed features, child features, or both.

## Signature

```csharp
System.Boolean DeleteSelection2( 
   System.Int32
DeleteOptions
)
```
## Parameters

- `DeleteOptions` (System.Int32): Options as defined in swDeleteSelectionOptions_e

## Return Value

True if the selected item is deleted, false if not

## Remarks

This method does not ask the user to confirm the deletion.

## Examples

- Create Extruded Thin Feature (VBA) (Create_Extruded_Thin_Feature_Example_VB.htm)
- Delete Selected Feature (VBA) (Delete_Selected_Feature_Example_VB.htm)
- Undo Feature and Fire Undo Post-Notify Event (VBA) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_VB.htm)
- Undo Feature and Fire Undo Post Notify Event (VB.NET) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_VBNET.htm)
- Undo Feature and Fire Undo Post-Notify Event (C#) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.DeleteSelections`
- `IModelDoc2.EditDelete`