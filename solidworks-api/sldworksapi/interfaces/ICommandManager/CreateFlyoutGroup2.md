---
type: method
interface: ICommandManager
member: CreateFlyoutGroup2
returns: FlyoutGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: Unique user-defined ID for the new flyout
  -
    name: Title
    type: System.String
    description: Name of the flyout to create
  -
    name: ToolTip
    type: System.String
    description: ToolTip for the new flyout
  -
    name: Hint
    type: System.String
    description: Text displayed in SOLIDWORKS Design status bar when a user's mouse pointer is over the flyout
  -
    name: MainIconList
    type: System.Object
    description: Array of strings for the paths to the image files for this flyout button (see Remarks )
  -
    name: IconList
    type: System.Object
    description: Array of strings for the paths to the image files containing all of the flyout toolbar buttons and separators (see Remarks )
  -
    name: CallbackFunction
    type: System.String
    description: Function to call when the flyout is selected
  -
    name: UpdateCallbackFunction
    type: System.String
    description: Optional update function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item (see Remarks ) If the update function returns... Then SOLIDWORKS... 0 Disables the item 1 Enables the item; this is the default state if no update function is specified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetFlyoutGroup
  - ICommandManager.GetFlyoutGroups
  - ICommandManager.NumberOfFlyoutGroups
  - ICommandManager.RemoveFlyoutGroup
  - ISldWorks.GetImageSize
keywords:
  - flyoutgroup
  - see
  - iflyoutgroup
  - command
  - manager
  - also
  - icommandmanager
  - flyouts
  - createflyoutgroup2
  - create
  - flyout
  - group2
  - user
  - id
  - int32
  - title
  - string
  - tool
  - tip
  - hint
  - main
  - icon
  - list
  - object
  - callback
  - function
  - update
  - group
  - commandmanager
  - vb
  - net
---

# ICommandManager.CreateFlyoutGroup2

Creates a new flyout in the CommandManager and context-sensitive menus.

## Signature

```csharp
FlyoutGroup CreateFlyoutGroup2( 
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
   System.Object
MainIconList
,
   System.Object
IconList
,
   System.String
CallbackFunction
,
   System.String
UpdateCallbackFunction
)
```
## Parameters

- `UserID` (System.Int32): Unique user-defined ID for the new flyout
- `Title` (System.String): Name of the flyout to create
- `ToolTip` (System.String): ToolTip for the new flyout
- `Hint` (System.String): Text displayed in SOLIDWORKS Design status bar when a user's mouse pointer is over the flyout
- `MainIconList` (System.Object): Array of strings for the paths to the image files for this flyout button (see Remarks )
- `IconList` (System.Object): Array of strings for the paths to the image files containing all of the flyout toolbar buttons and separators (see Remarks )
- `CallbackFunction` (System.String): Function to call when the flyout is selected
- `UpdateCallbackFunction` (System.String): Optional update function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item (see Remarks ) If the update function returns... Then SOLIDWORKS... 0 Disables the item 1 Enables the item; this is the default state if no update function is specified

## Return Value

IFlyoutGroup

## Remarks

After creating the flyout, display it on a CommandManager tab by calling
ICommandTabBox::AddCommands
. Call:
IFlyoutGroup::AddContextMenuFlyout
to add the flyout to context menus.
IFlyoutGroup::AddCommandItem
to add menu items to the flyout group.
If any flyout menu items are enabled, then the flyout button cannot be disabled by the flyout group's UpdateCallbackFunction. The sensitivity of the top-level flyout button is always determined by its enabled menu items. Disabled flyout menu items do not appear in the flyout menu. If there are no flyout menu items, then control of the top-level flyout button is returned to the flyout group's UpdateCallbackFunction.
This method supports scaling for high resolution screens with high resolution operating system scaling options.
The array of strings for the paths to the image files for MainIconList and IconList can contain images of the following sizes:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
The order in which you specify the image files must be the same for MainIconList and IconList. For example, if you specify an array of paths to 20 x 20 pixels, 32 x 32 pixels, and 40 x 40 pixels images for MainIconList, then you must specify an array of paths to 20 x 20 pixels, 32 x 32 pixels, and 40 x 40 pixels images for IconList. The images should use a 256-color palette.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `ICommandManager.GetFlyoutGroup`
- `ICommandManager.GetFlyoutGroups`
- `ICommandManager.NumberOfFlyoutGroups`
- `ICommandManager.RemoveFlyoutGroup`
- `ISldWorks.GetImageSize`