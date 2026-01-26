---
type: method
interface: ISldWorks
member: SetToolbarDock2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Identifier of toolbar; this is the same cookie you specified in ISwAddin::ConnectToSW
  -
    name: ToolbarId
    type: System.Int32
    description: ID of the toolbar as defined in swToolbar_e
  -
    name: DockingState
    type: System.Int32
    description: Docking state of the toolbar as defined in swToolbarDockStatePosition_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddToolbar4
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.DragToolbarButton
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
keywords:
  - toolbars
  - settoolbardock2
  - isldworks
  - sld
  - works
  - toolbar
  - dock2
  - cookie
  - int32
  - id
  - docking
  - state
  - boolean
---

# ISldWorks.SetToolbarDock2

Sets the docking state of the toolbar.

## Signature

```csharp
System.Boolean SetToolbarDock2( 
   System.Int32
Cookie
,
   System.Int32
ToolbarId
,
   System.Int32
DockingState
)
```
## Parameters

- `Cookie` (System.Int32): Identifier of toolbar; this is the same cookie you specified in ISwAddin::ConnectToSW
- `ToolbarId` (System.Int32): ID of the toolbar as defined in swToolbar_e
- `DockingState` (System.Int32): Docking state of the toolbar as defined in swToolbarDockStatePosition_e

## Return Value

True if the docking state of the toolbar is set, false if not

## See Also

- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`