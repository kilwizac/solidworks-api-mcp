---
type: method
interface: ICommandManager
member: CreateCommandGroup2
returns: CommandGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: Unique user-defined ID for the new CommandGroup
  -
    name: Title
    type: System.String
    description: Name of the CommandGroup to create (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: Tool tip for the CommandGroup
  -
    name: Hint
    type: System.String
    description: Text displayed in SOLIDWORKS status bar when a user's mouse pointer is over the CommandGroup
  -
    name: Position
    type: System.Int32
    description: Position of the CommandGroup in the CommandManager for all document templates (see Remarks ) NOTE: Specify 0 to add the CommandGroup to the beginning of the CommandMananger, or specify -1 to add it to the end of the CommandManager.
  -
    name: IgnorePreviousVersion
    type: System.Boolean
    description: True to remove all previously saved customization and toolbar information before creating a new CommandGroup, false to not (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Error code as defined in swCreateCommandGroupErrors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetCommandGroup
  - ICommandManager.GetGroups
  - ICommandManager.IGetGroups
  - ICommandManager.NumberOfGroups
  - ICommandManager.RemoveCommandGroup2
keywords:
  - createcommandgroup2
  - icommandmanager
  - command
  - manager
  - create
  - group2
  - user
  - id
  - int32
  - title
  - string
  - tool
  - tip
  - hint
  - position
  - ignore
  - previous
  - version
  - boolean
  - errors
  - group
  - flyouts
  - commandmanager
  - vb
  - net
---

# ICommandManager.CreateCommandGroup2

Creates a new CommandGroup in the CommandManager.

## Signature

```csharp
CommandGroup CreateCommandGroup2( 
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
,
   System.Boolean
IgnorePreviousVersion
,
   out System.Int32
Errors
)
```
## Parameters

- `UserID` (System.Int32): Unique user-defined ID for the new CommandGroup
- `Title` (System.String): Name of the CommandGroup to create (see Remarks )
- `ToolTip` (System.String): Tool tip for the CommandGroup
- `Hint` (System.String): Text displayed in SOLIDWORKS status bar when a user's mouse pointer is over the CommandGroup
- `Position` (System.Int32): Position of the CommandGroup in the CommandManager for all document templates (see Remarks ) NOTE: Specify 0 to add the CommandGroup to the beginning of the CommandMananger, or specify -1 to add it to the end of the CommandManager.
- `IgnorePreviousVersion` (System.Boolean): True to remove all previously saved customization and toolbar information before creating a new CommandGroup, false to not (see Remarks )
- `Errors` (System.Int32): Error code as defined in swCreateCommandGroupErrors

## Return Value

ICommandGroup

## Remarks

Call
ICommandManager::GetGroupDataFromRegistry
or
ICommandManager::IGetGroupDataFromRegistry
before calling this method to determine how to set IgnorePreviousVersion. Set IgnorePreviousVersion to true to prevent SOLIDWORKS from saving the current toolbar setting to the registry, even if there is no previous version.
You can also use
ICommandGroup::MenuPosition
to control the position of the CommandGroup in specific document templates.
If you change the definition of an existing CommandGroup (i.e., add or remove toolbar buttons), you must assign a new unique user-defined UserID to that CommandGroup. You must perform this action to avoid conflicts with any previously existing CommandGroups and to allow for backward and forward compatibility of the CommandGroups in your application.
To add a menu item for a CommandGroup to an existing SOLIDWORKS menu, specify the name of a parent menu in Title. For example, to add a CommandGroup to the Help menu, specify:
Visual Basic:
"&Help/MyApp Help"
Visual C++ or C#:
"&Help\\MyApp Help"
NOTE
: If you do not specify the name of a parent menu in Title, then the menu item for the CommandGroup appears on the Tools menu below the
Xpress Products
menu item.
You can turn off all menus or all toolbars for a CommandGroup. See
ICommandGroup::HasMenu
and
ICommandGroup::HasToolbar
for details.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandManager.GetCommandGroup`
- `ICommandManager.GetGroups`
- `ICommandManager.IGetGroups`
- `ICommandManager.NumberOfGroups`
- `ICommandManager.RemoveCommandGroup2`