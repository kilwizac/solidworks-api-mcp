---
type: method
interface: ICommandGroup
member: AddCommandItem2
returns: System.Int32
parameters:
  -
    name: Name
    type: System.String
    description: Name of the item to add to the CommandGroup
  -
    name: Position
    type: System.Int32
    description: Position of the item within the CommandGroup NOTE: Specify 0 to add this item to the beginning of the CommandGroup, or specify -1 to add it to the end of the CommandGroup. This argument specifies the position of the item in relation to its immediate parent item.
  -
    name: HintString
    type: System.String
    description: Text displayed in the SOLIDWORKS status bar when the pointer is on the item
  -
    name: ToolTip
    type: System.String
    description: ToolTip displayed when the pointer is on the item
  -
    name: ImageListIndex
    type: System.Int32
    description: Index number of the image for the item in the parent CommandGroup (see Remarks )
  -
    name: CallbackFunction
    type: System.String
    description: Function to call when this item is selected (see Remarks )
  -
    name: EnableMethod
    type: System.String
    description: Optional function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item If your method returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Not supported (see Remarks )
  -
    name: UserID
    type: System.Int32
    description: User-defined command ID or 0 if not used
  -
    name: MenuTBOption
    type: System.Int32
    description: Command item type as defined in swCommandItemType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.CommandID
  - ICommandGroup.HasEnabledButton
  - ISldWorks.GetCommandID
keywords:
  - id
  - command
  - addcommanditem2
  - icommandgroup
  - group
  - add
  - item2
  - name
  - string
  - position
  - int32
  - hint
  - tool
  - tip
  - image
  - list
  - index
  - callback
  - function
  - enable
  - user
  - menu
  - tb
  - option
  - create
  - flyouts
  - commandmanager
  - vb
  - net
  - submenus
---

# ICommandGroup.AddCommandItem2

Adds a combination menu item and toolbar item to a CommandGroup.

## Signature

```csharp
System.Int32 AddCommandItem2( 
   System.String
Name
,
   System.Int32
Position
,
   System.String
HintString
,
   System.String
ToolTip
,
   System.Int32
ImageListIndex
,
   System.String
CallbackFunction
,
   System.String
EnableMethod
,
   System.Int32
UserID
,
   System.Int32
MenuTBOption
)
```
## Parameters

- `Name` (System.String): Name of the item to add to the CommandGroup
- `Position` (System.Int32): Position of the item within the CommandGroup NOTE: Specify 0 to add this item to the beginning of the CommandGroup, or specify -1 to add it to the end of the CommandGroup. This argument specifies the position of the item in relation to its immediate parent item.
- `HintString` (System.String): Text displayed in the SOLIDWORKS status bar when the pointer is on the item
- `ToolTip` (System.String): ToolTip displayed when the pointer is on the item
- `ImageListIndex` (System.Int32): Index number of the image for the item in the parent CommandGroup (see Remarks )
- `CallbackFunction` (System.String): Function to call when this item is selected (see Remarks )
- `EnableMethod` (System.String): Optional function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item If your method returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Not supported (see Remarks )
- `UserID` (System.Int32): User-defined command ID or 0 if not used
- `MenuTBOption` (System.Int32): Command item type as defined in swCommandItemType_e

## Return Value

Index of the item within the CommandGroup as assigned by SOLIDWORKS

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify CallbackFunction and EnableMethod.
ImageListIndex is 0-based. The size of the index is equal to number of the images in the image files for that CommandGroup. See
ICommandGroup::IconList
for details. You can use -1 for ImageListIndex to specify that no icon is needed for a command item of type swCommandItemType_e.swMenuItem; however, command items of type swCommandItemType_e.swToolbarItem always need an icon.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)
- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.CommandID`
- `ICommandGroup.HasEnabledButton`
- `ISldWorks.GetCommandID`