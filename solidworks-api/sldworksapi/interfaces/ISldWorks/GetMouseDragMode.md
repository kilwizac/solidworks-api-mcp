---
type: method
interface: ISldWorks
member: GetMouseDragMode
returns: System.Boolean
parameters:
  -
    name: Command
    type: System.Int32
    description: Command mode you wish to check as defined in swMouseDragMode_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.SetMouseDragMode
keywords:
  - mouse
  - see
  - also
  - imouse
  - mode
  - getmousedragmode
  - isldworks
  - sld
  - works
  - drag
  - command
  - int32
  - boolean
---

# ISldWorks.GetMouseDragMode

Gets whether the specified command-mouse mode is in effect.

## Signature

```csharp
System.Boolean GetMouseDragMode( 
   System.Int32
Command
)
```
## Parameters

- `Command` (System.Int32): Command mode you wish to check as defined in swMouseDragMode_e

## Return Value

True if the specified command is the currently running command, false if not

## Remarks

This method determines if a special mouse mode is in use. Generally, these mouse modes are indicated visually with a different cursor and different mouse input interpretation. For example, one such mode is View Rotate mode. This is indicated visually to the user with a different cursor. When in this mode, the mouse input manipulates interactive view rotation, and the View Rotate toolbar button is pressed.
A complete list of valid mouse modes can be found in the
swMouseDragMode_e
enumeration.
The mouse mode applies to your whole SOLIDWORKS Design session, not a specific document. Therefore, if the user is currently working in an assembly document and is in Translate Assembly Component mode, then switching to a part or drawing document does not exit the mouse mode. If you call this method at this time to check for swTranslateAssemblyComponent, it returns True.
That mode is retained until a new command is entered, regardless if that this mode is not appropriate for a part or drawing document. When a new interactive command or API command runs, it terminates the Translate Assembly Component mode.
There is currently no general method to enable these mouse modes. However, several specific functions exist that enable or toggle certain modes. For example,
IAssemblyDoc::TranslateComponent
and
IAssemblyDoc::RotateComponent
. To disable any of these modes, use
IModelDoc2::SetPickMode
.

## See Also

- `ISldWorks.SetMouseDragMode`