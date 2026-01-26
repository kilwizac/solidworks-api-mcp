---
type: method
interface: ICommandManager
member: CreateFlyoutGroup
returns: FlyoutGroup
parameters:
  -
    name: UserID
    type: System.Int32
    description: Unique, user-defined ID for the new flyout
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
    name: SmallIcon
    type: System.String
    description: Path to the small bitmap or PNG used in the flyout
  -
    name: LargeIcon
    type: System.String
    description: Path to the large bitmap or PNG used in the flyout
  -
    name: SmallImageList
    type: System.String
    description: Path to the bitmap or PNG containing all of the small button and separator images for this flyout
  -
    name: LargeImageList
    type: System.String
    description: Path to the bitmap or PNG containing all of the large button and separator images for this flyout
  -
    name: CallbackFunction
    type: System.String
    description: Function to call when the flyout is selected
  -
    name: UpdateCallbackFunction
    type: System.String
    description: Optional update function that controls the state of the item; if specified, then SOLIDWORKS Design calls this function before displaying the item (see Remarks ) If this update function returns... Then the SOLIDWORKS Design... 0 Disables the item 1 Enables the item; this is the default state if no update function is specified
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetFlyoutGroup
  - ICommandManager.GetFlyoutGroups
  - ICommandManager.NumberOfFlyoutGroups
  - ICommandManager.RemoveFlyoutGroup
keywords:
  - createflyoutgroup
  - icommandmanager
  - command
  - manager
  - create
  - flyout
  - group
  - user
  - id
  - int32
  - title
  - string
  - tool
  - tip
  - hint
  - small
  - icon
  - large
  - image
  - list
  - callback
  - function
  - update
---

# ICommandManager.CreateFlyoutGroup

Obsolete. Superseded by ICommandManager::CreateFlyoutGroup2.

## Signature

```csharp
FlyoutGroup CreateFlyoutGroup( 
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
   System.String
SmallIcon
,
   System.String
LargeIcon
,
   System.String
SmallImageList
,
   System.String
LargeImageList
,
   System.String
CallbackFunction
,
   System.String
UpdateCallbackFunction
)
```
## Parameters

- `UserID` (System.Int32): Unique, user-defined ID for the new flyout
- `Title` (System.String): Name of the flyout to create
- `ToolTip` (System.String): ToolTip for the new flyout
- `Hint` (System.String): Text displayed in SOLIDWORKS Design status bar when a user's mouse pointer is over the flyout
- `SmallIcon` (System.String): Path to the small bitmap or PNG used in the flyout
- `LargeIcon` (System.String): Path to the large bitmap or PNG used in the flyout
- `SmallImageList` (System.String): Path to the bitmap or PNG containing all of the small button and separator images for this flyout
- `LargeImageList` (System.String): Path to the bitmap or PNG containing all of the large button and separator images for this flyout
- `CallbackFunction` (System.String): Function to call when the flyout is selected
- `UpdateCallbackFunction` (System.String): Optional update function that controls the state of the item; if specified, then SOLIDWORKS Design calls this function before displaying the item (see Remarks ) If this update function returns... Then the SOLIDWORKS Design... 0 Disables the item 1 Enables the item; this is the default state if no update function is specified

## Return Value

IFlyoutGroup

## Remarks

After creating the flyout, display it on a CommandManager tab by calling
ICommandTabBox::AddCommands
. Call
IFlyoutGroup::AddContextMenuFlyout
to add it to context menus. Call
IFlyoutGroup::AddCommandItem
to add menu items to the flyout group.
If any flyout menu items are enabled, then the flyout button cannot be disabled by the flyout group's UpdateCallbackFunction. The sensitivity of the top-level flyout button is always determined by its enabled menu items. Disabled flyout menu items do not appear in the flyout menu. If there are no flyout menu items, then control of the top-level flyout button is returned to the flyout group's UpdateCallbackFunction.

## See Also

- `ICommandManager.GetFlyoutGroup`
- `ICommandManager.GetFlyoutGroups`
- `ICommandManager.NumberOfFlyoutGroups`
- `ICommandManager.RemoveFlyoutGroup`