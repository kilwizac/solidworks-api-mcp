---
type: method
interface: ICommandManager
member: AddContextMenu
returns: CommandGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: User-defined ID for this context-sensitive menu
  -
    name: Title
    type: System.String
    description: Name of the context-sensitive menu to add to the CommandManager
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.Name
  - ICommandGroup.SelectType
  - ICommandManager.RemoveCommandGroup
keywords:
  - addcontextmenu
  - icommandmanager
  - command
  - manager
  - add
  - context
  - menu
  - user
  - id
  - int32
  - title
  - string
  - group
---

# ICommandManager.AddContextMenu

Adds a new context-sensitive menu to the CommandManager.

## Signature

```csharp
CommandGroup AddContextMenu( 
   System.Int32
UserID
,
   System.String
Title
)
```
## Parameters

- `UserID` (System.Int32): User-defined ID for this context-sensitive menu
- `Title` (System.String): Name of the context-sensitive menu to add to the CommandManager

## Return Value

Pointer to ICommandGroup object

## Remarks

A context-sensitive menu is a pop-up menu that is displayed when a user right-clicks a selectable object type defined by
ICommandGroup::SelectType
and, if the object type is a custom feature,
ICommandGroup::CustomNames
.
You can turn off all menus or all toolbars for a CommandGroup. See
ICommandGroup::HasMenu
and
ICommandGroup::HasToolbar
for details.

## See Also

- `ICommandGroup.Name`
- `ICommandGroup.SelectType`
- `ICommandManager.RemoveCommandGroup`