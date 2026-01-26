---
type: method
interface: IModelDoc2
member: EditUndo2
returns: void
parameters:
  -
    name: Steps
    type: System.Int32
    description: Number of actions to undo
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - DAssemblyDocEvents_UndoPostNotifyEventHandler
  - DDrawingDocEvents_UndoPostNotifyEventHandler
  - DPartDocEvents_UndoPostNotifyEventHandler
  - IModelDoc2.ClearUndoList
  - IModelDoc2.EditRedo2
  - IModelDoc2.SketchUndo
  - IModelDocExtension.FinishRecordingUndoObject
  - IModelDocExtension.StartRecordingUndoObject
keywords:
  - undo
  - editundo2
  - imodeldoc2
  - model
  - doc2
  - edit
  - undo2
  - steps
  - int32
  - void
  - feature
  - fire
  - post
  - notify
  - vba
  - vb
  - net
---

# IModelDoc2.EditUndo2

Undoes the specified number of actions in the active SOLIDWORKS Design session.

## Signature

```csharp
void EditUndo2( 
   System.Int32
Steps
)
```
## Parameters

- `Steps` (System.Int32): Number of actions to undo

## Return Value

Unknown.

## Examples

- Undo Feature and Fire Undo Post-Notify Event (VBA) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_VB.htm)
- Undo Feature and Fire Undo Post-Notify Event (VB.NET) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_VBNET.htm)
- Undo Feature and Fire Undo Post-Notify Event (C#) (Undo_Feature_and_Fire_Undo_Post-Notify_Event_Example_CSharp.htm)

## See Also

- `DAssemblyDocEvents_UndoPostNotifyEventHandler`
- `DDrawingDocEvents_UndoPostNotifyEventHandler`
- `DPartDocEvents_UndoPostNotifyEventHandler`
- `IModelDoc2.ClearUndoList`
- `IModelDoc2.EditRedo2`
- `IModelDoc2.SketchUndo`
- `IModelDocExtension.FinishRecordingUndoObject`
- `IModelDocExtension.StartRecordingUndoObject`