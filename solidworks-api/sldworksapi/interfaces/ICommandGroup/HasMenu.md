---
type: property
interface: ICommandGroup
member: HasMenu
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.MenuPosition
  - ICommandManager.AddContextMenu
keywords:
  - hasmenu
  - icommandgroup
  - command
  - group
  - has
  - menu
  - boolean
  - create
  - flyouts
  - commandmanager
  - vb
  - net
  - submenus
readonly: null
---

# ICommandGroup.HasMenu

Gets or sets whether this CommandGroup has a menu.

## Signature

```csharp
System.Boolean HasMenu {get; set;}
```
## Parameters

None.

## Return Value

True if this CommandGroup has a menu, false if not (see Remarks )

## Remarks

By default, this CommandGroup has a menu.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.MenuPosition`
- `ICommandManager.AddContextMenu`