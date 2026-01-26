---
type: method
interface: IFlyoutGroup
member: ReplaceCommandItem
returns: System.Int32
parameters:
  -
    name: Position
    type: System.Int32
    description: 0-based index of the item to replace in the flyout
  -
    name: Name
    type: System.String
    description: Name of the item to add to the flyout
  -
    name: HintString
    type: System.String
    description: Text displayed in the SOLIDWORKS Design status bar when the pointer is on the item
  -
    name: ImageListIndex
    type: System.Int32
    description: Index of the image in the icon list assigned to the parent flyout (see Remarks )
  -
    name: CallbackFunction
    type: System.String
    description: Function to call when this item is selected
  -
    name: UpdateCallbackFunction
    type: System.String
    description: Optional function that controls the state of the item; if specified, then SOLIDWORKS Design calls this function before displaying the item If your method returns... Then SOLIDWORKS Design... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Hides the item
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFlyoutGroup.AddCommandItem
  - IFlyoutGroup.RemoveAllCommandItems
  - IFlyoutGroup.RemoveCommandItem
keywords:
  - replacecommanditem
  - iflyoutgroup
  - flyout
  - group
  - replace
  - command
  - item
  - position
  - int32
  - name
  - string
  - hint
  - image
  - list
  - index
  - callback
  - function
  - update
---

# IFlyoutGroup.ReplaceCommandItem

Replaces a command item at the specified position.

## Signature

```csharp
System.Int32 ReplaceCommandItem( 
   System.Int32
Position
,
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

- `Position` (System.Int32): 0-based index of the item to replace in the flyout
- `Name` (System.String): Name of the item to add to the flyout
- `HintString` (System.String): Text displayed in the SOLIDWORKS Design status bar when the pointer is on the item
- `ImageListIndex` (System.Int32): Index of the image in the icon list assigned to the parent flyout (see Remarks )
- `CallbackFunction` (System.String): Function to call when this item is selected
- `UpdateCallbackFunction` (System.String): Optional function that controls the state of the item; if specified, then SOLIDWORKS Design calls this function before displaying the item If your method returns... Then SOLIDWORKS Design... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 2 Selects and disables the item 3 Selects and enables the item 4 Hides the item

## Return Value

Unknown.

## Remarks

ImageListIndex is 0-based. The size of the index is equal to the number of images in the large or small graphic file for that flyout. See
IFlyoutGroup::LargeIconList
and
IFlyoutGroup::SmallIconList
for details.
You can use -1 for ImageListIndex to specify that no icon is needed.

## See Also

- `IFlyoutGroup.AddCommandItem`
- `IFlyoutGroup.RemoveAllCommandItems`
- `IFlyoutGroup.RemoveCommandItem`