---
type: method
interface: ICommandManager
member: CreateCommandGroup
returns: CommandGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: Unique user-defined ID for this CommandGroup
  -
    name: Title
    type: System.String
    description: Name of the CommandGroup to create (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: ToolTip for this CommandGroup
  -
    name: Hint
    type: System.String
    description: Text displayed in SOLIDWORKS status bar when a user's mouse pointer is over this CommandGroup
  -
    name: Position
    type: System.Int32
    description: Position of the CommandGroup in the CommandManager for all document templates (see Remarks ) NOTE: Specify 0 to add the CommandGroup to the beginning of the CommandMananger, or specify -1 to add it to the end of the CommandManager.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetCommandGroup
  - ICommandManager.GetGroups
  - ICommandManager.IGetGroups
  - ICommandManager.NumberOfGroups
  - ICommandManager.RemoveCommandGroup
keywords:
  - createcommandgroup
  - icommandmanager
  - command
  - manager
  - create
  - group
  - user
  - id
  - int32
  - title
  - string
  - tool
  - tip
  - hint
  - position
---

# ICommandManager.CreateCommandGroup

Obsolete. Superseded by ICommandManager::CreateCommandGroup2.

## Signature

```csharp
CommandGroup CreateCommandGroup( 
   System.Int32
UserID
,
   System.String
Title
,
   System.String
ToolTip
,
   System.String
Hint
,
   System.Int32
Position
)
```
## Parameters

- `UserID` (System.Int32): Unique user-defined ID for this CommandGroup
- `Title` (System.String): Name of the CommandGroup to create (see Remarks )
- `ToolTip` (System.String): ToolTip for this CommandGroup
- `Hint` (System.String): Text displayed in SOLIDWORKS status bar when a user's mouse pointer is over this CommandGroup
- `Position` (System.Int32): Position of the CommandGroup in the CommandManager for all document templates (see Remarks ) NOTE: Specify 0 to add the CommandGroup to the beginning of the CommandMananger, or specify -1 to add it to the end of the CommandManager.

## Return Value

Pointer to ICommandGroup object

## Remarks

You can also use
ICommandGroup::MenuPosition
to control the position of the CommandGroup in specific document templates.
If you change the definition of an existing CommandGroup (i.e., add or remove toolbar buttons), you must assign a new unique user-defined UserID to that CommandGroup. You must perform this action to avoid conflicts with any previously existing CommandGroupa and to allow for backward and forward compatibility of the CommandGroups in your application.
To add a CommandGroup to an existing SOLIDWORKS menu, specify the name of a parent menu in Title. For example, to add a CommandGroup to the Help menu, specify:
Visual Basic:
"&Help/MyApp Help"
Visual C++ or C#:
"&Help\\MyApp Help"
NOTE
: If you do not specify the name of a parent menu in Title, then the menu item appears on the Tools menu below the
Xpress Products
menu item.
You can turn off all menus or all toolbars for a CommandGroup . See
ICommandGroup::HasMenu
and
ICommandGroup::HasToolbar
for details.

## See Also

- `ICommandManager.GetCommandGroup`
- `ICommandManager.GetGroups`
- `ICommandManager.IGetGroups`
- `ICommandManager.NumberOfGroups`
- `ICommandManager.RemoveCommandGroup`