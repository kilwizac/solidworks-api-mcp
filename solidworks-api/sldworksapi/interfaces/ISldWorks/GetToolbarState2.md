---
type: method
interface: ISldWorks
member: GetToolbarState2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Identifier of toolbar; this is the same Cookie you specified in ISwAddin::ConnectToSW
  -
    name: ToolbarId
    type: System.Int32
    description: ID of the toolbar as defined in swToolbar_e
  -
    name: ToolbarState
    type: System.Int32
    description: Toolbar state to query as defined in swToolbarStates_e
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
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
keywords:
  - toolbars
  - gettoolbarstate2
  - isldworks
  - sld
  - works
  - toolbar
  - state2
  - cookie
  - int32
  - id
  - state
  - boolean
---

# ISldWorks.GetToolbarState2

Gets the state of the toolbar.

## Signature

```csharp
System.Boolean GetToolbarState2( 
   System.Int32
Cookie
,
   System.Int32
ToolbarId
,
   System.Int32
ToolbarState
)
```
## Parameters

- `Cookie` (System.Int32): Identifier of toolbar; this is the same Cookie you specified in ISwAddin::ConnectToSW
- `ToolbarId` (System.Int32): ID of the toolbar as defined in swToolbar_e
- `ToolbarState` (System.Int32): Toolbar state to query as defined in swToolbarStates_e

## Return Value

True or false based on the value specified in ToolbarState

## Remarks

For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.

## See Also

- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`