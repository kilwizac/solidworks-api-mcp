---
type: method
interface: IModelDoc2
member: EditRedo2
returns: void
parameters:
  -
    name: Steps
    type: System.Int32
    description: Number of actions to repeat
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ClearUndoList
  - IModelDoc2.EditUndo2
  - IModelDoc2.SketchUndo
  - IModelDocExtension.FinishRecordingUndoObject
  - IModelDocExtension.StartRecordingUndoObject
keywords:
  - redo
  - editredo2
  - imodeldoc2
  - model
  - doc2
  - edit
  - redo2
  - steps
  - int32
  - void
  - fire
  - undo
  - pre
  - post
  - notifications
  - part
  - document
  - vb
  - net
  - vba
---

# IModelDoc2.EditRedo2

Repeats the specified number of actions in this SOLIDWORKS Design session.

## Signature

```csharp
void EditRedo2( 
   System.Int32
Steps
)
```
## Parameters

- `Steps` (System.Int32): Number of actions to repeat

## Return Value

Unknown.

## Examples

- Fire Undo and Redo Pre- and Post-notifications in Part Document (C#) (Fire_Undo_and_Redo_Pre-_and_Post-notifications_in_Part_Document_Example_CSharp.htm)
- Fire Undo and Redo Pre- and Post-notifications in Part Document (VB.NET) (Fire_Undo_and_Redo_Pre_and_Post-notifications_in_Part_Document_Example_VBNET.htm)
- Fire Undo and Redo Pre- and Post-notifications in Part Document (VBA) (Fire_Undo_and_Redo_Pre_and_Post-notifications_in_Part_Document_Example_VB6.htm)

## See Also

- `IModelDoc2.ClearUndoList`
- `IModelDoc2.EditUndo2`
- `IModelDoc2.SketchUndo`
- `IModelDocExtension.FinishRecordingUndoObject`
- `IModelDocExtension.StartRecordingUndoObject`