---
type: property
interface: ICommandGroup
member: HasToolbar
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.DockingState
  - ICommandGroup.HasMenu
  - ICommandGroup.SetToolbarVisibility
keywords:
  - toolbars
  - hastoolbar
  - icommandgroup
  - command
  - group
  - has
  - toolbar
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
  - submenus
readonly: null
---

# ICommandGroup.HasToolbar

Gets or sets whether this CommandGroup has a toolbar.

## Signature

```csharp
System.Boolean HasToolbar {get; set;}
```
## Parameters

None.

## Return Value

True if this CommandGroup has a toolbar, false if not (see Remarks )

## Remarks

By default, this CommandGroup has a toolbar.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.DockingState`
- `ICommandGroup.HasMenu`
- `ICommandGroup.SetToolbarVisibility`