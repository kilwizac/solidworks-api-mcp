---
type: method
interface: IFlyoutGroup
member: AddCommandItem
returns: System.Int32
parameters:
  -
    name: Name
    type: System.String
    description: Name of the item to add to the flyout
  -
    name: HintString
    type: System.String
    description: Text displayed in the SOLIDWORKS status bar when the pointer is on the item
  -
    name: ImageListIndex
    type: System.Int32
    description: Index of the image in the icon list (see Remarks )
  -
    name: CallbackFunction
    type: System.String
    description: Function to call when this item is selected (see Remarks )
  -
    name: UpdateCallbackFunction
    type: System.String
    description: Optional function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item If UpdateCallbackFunction returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Hides the item (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFlyoutGroup.RemoveAllCommandItems
  - IFlyoutGroup.RemoveCommandItem
  - IFlyoutGroup.ReplaceCommandItem
keywords:
  - addcommanditem
  - iflyoutgroup
  - flyout
  - group
  - add
  - command
  - item
  - name
  - string
  - hint
  - image
  - list
  - index
  - int32
  - callback
  - function
  - update
  - create
  - flyouts
  - commandmanager
  - vb
  - net
---

# IFlyoutGroup.AddCommandItem

Adds an item to a flyout menu.

## Signature

```csharp
System.Int32 AddCommandItem( 
   System.String
Name
,
   System.String
HintString
,
   System.Int32
ImageListIndex
,
   System.String
CallbackFunction
,
   System.String
UpdateCallbackFunction
)
```
## Parameters

- `Name` (System.String): Name of the item to add to the flyout
- `HintString` (System.String): Text displayed in the SOLIDWORKS status bar when the pointer is on the item
- `ImageListIndex` (System.Int32): Index of the image in the icon list (see Remarks )
- `CallbackFunction` (System.String): Function to call when this item is selected (see Remarks )
- `UpdateCallbackFunction` (System.String): Optional function that controls the state of the item; if specified, then SOLIDWORKS calls this function before displaying the item If UpdateCallbackFunction returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Hides the item (see Remarks )

## Return Value

Index of the item within the flyout as assigned by SOLIDWORKS

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify CallbackFunction and UpdateCallbackFunction.
Flyouts are created at runtime. Call this method from the callback method defined in
ICommandManager::CreateFlyoutGroup
.
ImageListIndex is 0-based. The size of the index is equal to the number of images in the large or small graphic file for that flyout. See
IFlyoutGroup::LargeIconList
and
IFlyoutGroup::SmallIconList
for details.

## Examples

- Create Flyouts in the CommandManager (C#) (Create_Flyouts_in_the_CommandManager_Example_CSharp.htm)
- Create Flyouts in the CommandManager (VB.NET) (Create_Flyouts_in_the_CommandManager_Example_VBNET.htm)

## See Also

- `IFlyoutGroup.RemoveAllCommandItems`
- `IFlyoutGroup.RemoveCommandItem`
- `IFlyoutGroup.ReplaceCommandItem`