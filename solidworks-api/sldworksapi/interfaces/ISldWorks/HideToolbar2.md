---
type: method
interface: ISldWorks
member: HideToolbar2
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.DragToolbarButton
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
keywords:
  - toolbars
  - hidetoolbar2
  - isldworks
  - sld
  - works
  - hide
  - toolbar2
  - cookie
  - int32
  - toolbar
  - id
  - boolean
---

# ISldWorks.HideToolbar2

Hides a toolbar created with ISldWorks::AddToolbar5.

## Signature

```csharp
System.Boolean HideToolbar2( 
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

True if toolbar is hidden, false if not

## Remarks

For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.

## See Also

- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`