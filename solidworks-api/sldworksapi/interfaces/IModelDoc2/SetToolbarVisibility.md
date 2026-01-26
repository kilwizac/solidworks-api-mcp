---
type: method
interface: IModelDoc2
member: SetToolbarVisibility
returns: void
parameters:
  -
    name: Toolbar
    type: System.Int32
    description: Identifier of toolbar as defined in swToolbar_e
  -
    name: Visibility
    type: System.Boolean
    description: True if the toolbar is visible, false if hidden
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ICommandGroup
  - ICommandManager
  - IModelDoc2.GetToolbarVisibility
  - ISldWorks.AddToolbar4
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
  - ISldWorks.ShowToolbar2
keywords:
  - toolbars
  - settoolbarvisibility
  - imodeldoc2
  - model
  - doc2
  - toolbar
  - visibility
  - int32
  - boolean
  - void
---

# IModelDoc2.SetToolbarVisibility

Sets the visibility of a toolbar.

## Signature

```csharp
void SetToolbarVisibility( 
   System.Int32
Toolbar
,
   System.Boolean
Visibility
)
```
## Parameters

- `Toolbar` (System.Int32): Identifier of toolbar as defined in swToolbar_e
- `Visibility` (System.Boolean): True if the toolbar is visible, false if hidden

## Return Value

Unknown.

## See Also

- `ICommandGroup`
- `ICommandManager`
- `IModelDoc2.GetToolbarVisibility`
- `ISldWorks.AddToolbar4`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`
- `ISldWorks.ShowToolbar2`