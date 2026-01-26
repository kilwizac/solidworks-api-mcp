---
type: method
interface: IModelDocExtension
member: FinishRecordingUndoObject
returns: System.Boolean
parameters:
  -
    name: UndoObjectName
    type: System.String
    description: String to appear in SOLIDWORKS Undo list
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ClearUndoList
  - IModelDoc2.EditRedo2
  - IModelDoc2.EditUndo2
keywords:
  - finishrecordingundoobject
  - imodeldocextension
  - model
  - doc
  - extension
  - finish
  - recording
  - undo
  - object
  - name
  - string
  - boolean
---

# IModelDocExtension.FinishRecordingUndoObject

Obsolete. Superseded by IModelDocExtension::FinishRecordingUndoObject2.

## Signature

```csharp
System.Boolean FinishRecordingUndoObject( 
   System.String
UndoObjectName
)
```
## Parameters

- `UndoObjectName` (System.String): String to appear in SOLIDWORKS Undo list

## Return Value

True if recording of the SOLIDWORKS Undo object ends, false if not

## Remarks

Place
IModelDocExtension::StartRecordingUndoObject
at the beginning and this method at the end of any SOLIDWORKS API calls in your application that you want your user to undo as a group.
For example, if your application creates a complex gear that requires many SOLIDWORKS API calls, place IModelDocExtension::StartRecordingUndoObject and this method around the SOLIDWORKS API calls that create that gear. Then your user need only select the string specified for UndoObjectName in the SOLIDWORKS Undo list to undo all of the SOLIDWORKS API calls that created the gear.
NOTE:
Only SOLIDWORKS operations that support Undo will be undone. Both SOLIDWORKS API and non-API operations are undone.

## See Also

- `IModelDoc2.ClearUndoList`
- `IModelDoc2.EditRedo2`
- `IModelDoc2.EditUndo2`