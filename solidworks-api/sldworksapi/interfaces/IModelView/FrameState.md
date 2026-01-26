---
type: property
interface: IModelView
member: FrameState
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.FrameHeight
  - IModelView.FrameLeft
  - IModelView.FrameTop
  - IModelView.FrameWidth
keywords:
  - windows
  - frame
  - see
  - also
  - iframe
  - window
  - framestate
  - imodelview
  - model
  - view
  - state
  - int32
  - position
  - document
  - vba
  - create
  - hidden
  - undo
  - object
  - vb
  - net
readonly: null
---

# IModelView.FrameState

Gets or sets the window state (minimum, maximum, or normal) for the frame of the document window that contains the model view in the SOLIDWORKS client area.

## Signature

```csharp
System.Int32 FrameState {get; set;}
```
## Parameters

None.

## Return Value

Window state as defined in swWindowState_e

## Examples

- Position Document Window (VBA) (Position_a_Document_Window_Example_VB.htm)
- Create Hidden Undo Object (VBA) (Create_Multiple_Undo_Command_Example_VB.htm)
- Create Hidden Undo Object (VB.NET) (Create_Multiple_Undo_Command_Example_VBNET.htm)
- Create Hidden Undo Object (C#) (Create_Multiple_Undo_Command_Example_CSharp.htm)

## See Also

- `IModelView.FrameHeight`
- `IModelView.FrameLeft`
- `IModelView.FrameTop`
- `IModelView.FrameWidth`