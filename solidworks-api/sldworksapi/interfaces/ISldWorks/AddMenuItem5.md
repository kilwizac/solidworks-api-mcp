---
type: method
interface: ISldWorks
member: AddMenuItem5
returns: System.Int32
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type to which to add the menu item as defined by swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie as defined in ISwAddin::ConnectToSW
  -
    name: MenuItem
    type: System.String
    description: Menu item string ( e.g., "menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTES: Specify the name of the menu for menuString (e.g., File, View, etc.) where you want your menu item to appear. If you do not specify menu string, then the menu item appears on the Tools menu below the Xpress Products menu item. To add your own menu to which to add this menu item, call ISldWorks::AddMenu and substitute the name of your menu for menuString. Use the & symbol to include an accelerator key, e.g., MyItem@, adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key. The accelerator key is underlined.
  -
    name: Position
    type: System.Int32
    description: Position where to add the new menu item; the first item is position 0; if -1 is specified for Position, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu
  -
    name: MenuCallback
    type: System.String
    description: Function to call when this menu item is selected (see Remarks )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item (See Remarks ) If specified: SOLIDWORKS Design calls this function before displaying the menu item display of the menu item is controlled by the return value of MenuEnableMethod If MenuEnableMethod returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS Design status bar when the user moves the pointer over this menu item; if you specify HintString, then it must be preceded by a comma
  -
    name: ImageList
    type: System.Object
    description: Array of strings for the paths for the image files for the menu item (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenuPopupItem4
  - ISldWorks.AddToolbar5
  - ISldWorks.GetImageSize
  - ISldWorks.GetLocalizedMenuName
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveItemFromThirdPartyPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
keywords:
  - menus
  - bitmaps
  - items
  - addmenuitem5
  - isldworks
  - sld
  - works
  - add
  - menu
  - item5
  - document
  - type
  - int32
  - cookie
  - item
  - string
  - position
  - callback
  - enable
  - hint
  - image
  - list
  - object
  - vb
  - net
---

# ISldWorks.AddMenuItem5

Adds a menu item and image to the SOLIDWORKS Design user interface.

## Signature

```csharp
System.Int32 AddMenuItem5( 
   System.Int32
DocumentType
,
   System.Int32
Cookie
,
   System.String
MenuItem
,
   System.Int32
Position
,
   System.String
MenuCallback
,
   System.String
MenuEnableMethod
,
   System.String
HintString
,
   System.Object
ImageList
)
```
## Parameters

- `DocumentType` (System.Int32): Document type to which to add the menu item as defined by swDocumentTypes_e
- `Cookie` (System.Int32): Cookie as defined in ISwAddin::ConnectToSW
- `MenuItem` (System.String): Menu item string ( e.g., "menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTES: Specify the name of the menu for menuString (e.g., File, View, etc.) where you want your menu item to appear. If you do not specify menu string, then the menu item appears on the Tools menu below the Xpress Products menu item. To add your own menu to which to add this menu item, call ISldWorks::AddMenu and substitute the name of your menu for menuString. Use the & symbol to include an accelerator key, e.g., MyItem@, adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key. The accelerator key is underlined.
- `Position` (System.Int32): Position where to add the new menu item; the first item is position 0; if -1 is specified for Position, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu
- `MenuCallback` (System.String): Function to call when this menu item is selected (see Remarks )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item (See Remarks ) If specified: SOLIDWORKS Design calls this function before displaying the menu item display of the menu item is controlled by the return value of MenuEnableMethod If MenuEnableMethod returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
- `HintString` (System.String): Text to show in the SOLIDWORKS Design status bar when the user moves the pointer over this menu item; if you specify HintString, then it must be preceded by a comma
- `ImageList` (System.Object): Array of strings for the paths for the image files for the menu item (see Remarks )

## Return Value

Runtime command ID if successful or -1 if unsuccessful

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify MenuCallback and MenuEnableMethod.
For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.
You can add a new menu item to any one of the four frames (main, part, assembly, or drawing). To do this, call this method with the appropriate argument in the swDocumentTypes_e.DocumentType parameter. For example, if you want your menu item to be available when a part document is active, then call this method and pass swDocumentTypes_e.swDocPART as the first argument. After you adding your menu item to the part frame, you do not need to do it again during the current SOLIDWORKS Design session. Once a part document is activated by the user, SOLIDWORKS Design automatically displays your menu item.
This method supports scaling for high resolution screens with high resolution operating system scaling options.
ImageList images can be:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
Images should use 256-color palette.
To add a menu item separator:
leave the text for the menu item blank, so that the menu string for the MenuItem argument starts with the at-sign symbol (@):
"@subMenuString@menuString"
specify an existing method for the MenuCallback argument. This method is never called, so its implementation can be empty.
specify empty strings for MenuEnableMethod and HintString.
specify Nothing or null for ImageList.
Read
Add-in Shortcut Menus
for more information.

## Examples

- Add Menu and Menu Item (C#) (Add_Menu_and_Menu_Item_Example_CSharp.htm)
- Add Menu and Menu Item (VB.NET) (Add_Menu_and_Menu_Item_Example_VBNET.htm)

## See Also

- `ISldWorks.AddMenuPopupItem4`
- `ISldWorks.AddToolbar5`
- `ISldWorks.GetImageSize`
- `ISldWorks.GetLocalizedMenuName`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveItemFromThirdPartyPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`