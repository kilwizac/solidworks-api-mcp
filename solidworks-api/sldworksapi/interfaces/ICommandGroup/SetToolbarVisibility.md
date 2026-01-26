---
type: method
interface: ICommandGroup
member: SetToolbarVisibility
returns: void
parameters:
  -
    name: Visible
    type: System.Boolean
    description: True to show the toolbar, false to hide it
  -
    name: Mask
    type: System.Int32
    description: Context in which to show or hide toolbar as defined in swDocTemplateTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.HasMenu
  - ICommandGroup.HasToolbar
  - ICommandManager.AddContextMenu
keywords:
  - toolbars
  - settoolbarvisibility
  - icommandgroup
  - command
  - group
  - toolbar
  - visibility
  - visible
  - boolean
  - mask
  - int32
  - void
---

# ICommandGroup.SetToolbarVisibility

Sets the visibility of the toolbar in the CommandGroup.

## Signature

```csharp
void SetToolbarVisibility( 
   System.Boolean
Visible
,
   System.Int32
Mask
)
```
## Parameters

- `Visible` (System.Boolean): True to show the toolbar, false to hide it
- `Mask` (System.Int32): Context in which to show or hide toolbar as defined in swDocTemplateTypes_e

## Return Value

Unknown.

## See Also

- `ICommandGroup.HasMenu`
- `ICommandGroup.HasToolbar`
- `ICommandManager.AddContextMenu`