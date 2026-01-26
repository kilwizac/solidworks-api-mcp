---
type: method
interface: IModelDocExtension
member: FinishRecordingUndoObject2
returns: System.Boolean
parameters:
  -
    name: UndoObjectName
    type: System.String
    description: String that appears in the SOLIDWORKS Undo list
  -
    name: MakeHidden
    type: System.Boolean
    description: True to hide this object in the Undo list and from the user; false to make this object visible in the Undo list and to the user
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ClearUndoList
  - IModelDoc2.EditRedo2
  - IModelDoc2.EditUndo2
keywords:
  - undo
  - finishrecordingundoobject2
  - imodeldocextension
  - model
  - doc
  - extension
  - finish
  - recording
  - object2
  - object
  - name
  - string
  - make
  - hidden
  - boolean
  - create
  - vba
  - vb
  - net
---

# IModelDocExtension.FinishRecordingUndoObject2

Ends recording of a SOLIDWORKS Undo object with the specified name and visibility.

## Signature

```csharp
System.Boolean FinishRecordingUndoObject2( 
   System.String
UndoObjectName
,
   System.Boolean
MakeHidden
)
```
## Parameters

- `UndoObjectName` (System.String): String that appears in the SOLIDWORKS Undo list
- `MakeHidden` (System.Boolean): True to hide this object in the Undo list and from the user; false to make this object visible in the Undo list and to the user

## Return Value

True if recording of the SOLIDWORKS Undo object ends, false if not

## Remarks

To add an object with the name UndoObjectName to the SOLIDWORKS Undo list, place the SOLIDWORKS API calls between
IModelDocExtension::StartRecordingUndoObject
and IModelDocExtension::FinishRecordingUndoObject2:
For example, assume that your application creates a complex gear that requires many SOLIDWORKS API calls and you would like your SOLIDWORKS Design user to be able to undo that gear from the user interface at a later time. Your application can create an Undo object by calling:
IModelDocExtension::StartRecordingUndoObject
SOLIDWORKS API calls that create the gear
IModelDocExtension::FinishRecordingUndoObject2 with MakeHidden = False
Now assume that your application performs many temporary operations that you do not want your users to see in the SOLIDWORKS Undo list, because they are not essential to the modeling and design process. For this case, your application can place the non-essential SOLIDWORKS API calls between IModelDocExtension::StartRecordingUndoObject and IModelDocExtension::FinishRecordingUndoObject2 with MakeHidden = True. The Undo object is still added to the SOLIDWORKS Undo list, but the user does not see it in the list.
WARNING
:
If your application hides an Undo object in the Undo list by setting MakeHidden = True and the Undo object is the first item in the SOLIDWORKS Undo list, then SOLIDWORKS discards the Undo object from the Undo list. If this happens, then the SOLIDWORKS API calls in this Undo object cannot be undone.
Similarly if the last item to be redone is a hidden API Undo object, then SOLIDWORKS discards it and the SOLIDWORKS API calls cannot be redone.
Only SOLIDWORKS operations that support Undo are undone. Both SOLIDWORKS API and non-API operations are undone.

## Examples

- Create Hidden Undo Object (VBA) (Create_Multiple_Undo_Command_Example_VB.htm)
- Create Hidden Undo Object (VB.NET) (Create_Multiple_Undo_Command_Example_VBNET.htm)
- Create Hidden Undo Object (C#) (Create_Multiple_Undo_Command_Example_CSharp.htm)

## See Also

- `IModelDoc2.ClearUndoList`
- `IModelDoc2.EditRedo2`
- `IModelDoc2.EditUndo2`