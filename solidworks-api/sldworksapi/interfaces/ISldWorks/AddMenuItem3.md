---
type: method
interface: ISldWorks
member: AddMenuItem3
returns: System.Boolean
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type to add the menu item as defined by swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified as defined in ISwAddin::ConnectToSW
  -
    name: MenuItem
    type: System.String
    description: Menu string ("menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTE: If you do not specify menuString, then the menu item appears on the Tools menu below the Xpress Products menu item. Use the & symbol to include an accelerator key, e.g., "MyItem@&File" adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key in SOLIDWORKS Design. The accelerator key is underlined.
  -
    name: Position
    type: System.Int32
    description: Position at which to add the new menu item The first item is at position 0; if Position is -1, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu
  -
    name: MenuCallback
    type: System.String
    description: Function to call when this menu item is selected
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item If specified: SOLIDWORKS Design calls this function before displaying the menu. Display of the menu item is controlled by the return value of MenuEnableMethod. If your method returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS Design status bar when the user moves their mouse over this menu item; if you specify HintString, then it must be preceded by a comma
  -
    name: BitmapFilePath
    type: System.String
    description: Path and filename of bitmap
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.AddToolbar4
  - ISldWorks.GetLocalizedMenuName
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
keywords:
  - addmenuitem3
  - isldworks
  - sld
  - works
  - add
  - menu
  - item3
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
  - bitmap
  - file
  - path
  - boolean
---

# ISldWorks.AddMenuItem3

Obsolete. Superseded by ISldWorks::AddMenuItem4.

## Signature

```csharp
System.Boolean AddMenuItem3( 
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
   System.String
BitmapFilePath
)
```
## Parameters

- `DocumentType` (System.Int32): Document type to add the menu item as defined by swDocumentTypes_e
- `Cookie` (System.Int32): Cookie specified as defined in ISwAddin::ConnectToSW
- `MenuItem` (System.String): Menu string ("menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTE: If you do not specify menuString, then the menu item appears on the Tools menu below the Xpress Products menu item. Use the & symbol to include an accelerator key, e.g., "MyItem@&File" adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key in SOLIDWORKS Design. The accelerator key is underlined.
- `Position` (System.Int32): Position at which to add the new menu item The first item is at position 0; if Position is -1, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu
- `MenuCallback` (System.String): Function to call when this menu item is selected
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item If specified: SOLIDWORKS Design calls this function before displaying the menu. Display of the menu item is controlled by the return value of MenuEnableMethod. If your method returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
- `HintString` (System.String): Text to show in the SOLIDWORKS Design status bar when the user moves their mouse over this menu item; if you specify HintString, then it must be preceded by a comma
- `BitmapFilePath` (System.String): Path and filename of bitmap

## Return Value

True if menu item and bitmap are added, false if not

## Remarks

For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.
The bitmap must be 16w x 16h x 256 colors.
You can add a new menu to any one of the four frames (main, part, assembly, or drawing). To do this, call this method with the appropriate argument in the DocumentType parameter. For example, if you want your menu to be available when a part document is active, then call this method and pass swDocPART as the first argument. After you have added your menu to the part frame, you do not need to do it again during the current SOLIDWORKS Design session. Once a part document is activated by the user, SOLIDWORKS Design automatically displays your menu item.
To add a menu separator:
leave the text for the menu item blank, so that the menu string for the MenuItem argument starts with the at-sign symbol ( @):
"@subMenuString@menuString"
specify an existing method for the MenuCallback argument. This method is never called, so its implementation can be empty.
specify empty strings for the MenuEnableMethod, HintString, and bitmapFilePath arguments.

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.AddToolbar4`
- `ISldWorks.GetLocalizedMenuName`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`