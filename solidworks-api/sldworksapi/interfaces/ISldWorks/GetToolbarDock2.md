---
type: method
interface: ISldWorks
member: GetToolbarDock2
returns: System.Int32
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Identifier of toolbar; this is the same Cookie you specified in ISwAddin::ConnectToSW
  -
    name: ToolbarId
    type: System.Int32
    description: ID of the toolbar as defined in swToolbar_e
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
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
keywords:
  - toolbars
  - gettoolbardock2
  - isldworks
  - sld
  - works
  - toolbar
  - dock2
  - cookie
  - int32
  - id
---

# ISldWorks.GetToolbarDock2

Gets the docking state of the toolbar.

## Signature

```csharp
System.Int32 GetToolbarDock2( 
   System.Int32
Cookie
,
   System.Int32
ToolbarId
)
```
## Parameters

- `Cookie` (System.Int32): Identifier of toolbar; this is the same Cookie you specified in ISwAddin::ConnectToSW
- `ToolbarId` (System.Int32): ID of the toolbar as defined in swToolbar_e

## Return Value

Docking state of the toolbar as defined in swToolbarDockStatePosition_e

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
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`