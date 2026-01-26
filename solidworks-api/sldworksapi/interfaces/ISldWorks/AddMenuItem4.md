---
type: method
interface: ISldWorks
member: AddMenuItem4
returns: System.Int32
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type to add the menu item as defined by swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie as defined in ISwAddin::ConnectToSW
  -
    name: MenuItem
    type: System.String
    description: Menu string ("menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTES: If you do not specify menuString, then the menu item appears on the Tools menu below the Xpress Products menu item. Use the & symbol to include an accelerator key, e.g., "MyItem@&File" adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key. The accelerator key is underlined.
  -
    name: Position
    type: System.Int32
    description: Position where to add the new menu item; the first item is at position 0; if -1 is specified for Position, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu.
  -
    name: MenuCallback
    type: System.String
    description: Function to call when this menu item is selected (see Remarks )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item (See Remarks ) If specified: SOLIDWORKS Design calls this function before displaying the menu. Display of the menu item is controlled by the return value of MenuEnableMethod. If MenuEnableMethod returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS Design status bar when the user moves the pointer over this menu item; if you specify HintString, then it must be preceded by a comma
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
  - ISldWorks.AddMenuPopupItem3
  - ISldWorks.AddToolbar4
  - ISldWorks.GetLocalizedMenuName
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
keywords:
  - addmenuitem4
  - isldworks
  - sld
  - works
  - add
  - menu
  - item4
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
---

# ISldWorks.AddMenuItem4

Obsolete. Superseded by ISldWorks::AddMenuItem5.

## Signature

```csharp
System.Int32 AddMenuItem4( 
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
- `Cookie` (System.Int32): Cookie as defined in ISwAddin::ConnectToSW
- `MenuItem` (System.String): Menu string ("menuItem@menuString"); SOLIDWORKS Design creates menu items only if they do not already exist NOTES: If you do not specify menuString, then the menu item appears on the Tools menu below the Xpress Products menu item. Use the & symbol to include an accelerator key, e.g., "MyItem@&File" adds MyItem to the File menu with an accelerator key. To display the accelerator key, press the Alt key. The accelerator key is underlined.
- `Position` (System.Int32): Position where to add the new menu item; the first item is at position 0; if -1 is specified for Position, then the new menu item is added to the bottom of the list; this argument specifies the position of the menu item in relation to its immediate parent menu.
- `MenuCallback` (System.String): Function to call when this menu item is selected (see Remarks )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item (See Remarks ) If specified: SOLIDWORKS Design calls this function before displaying the menu. Display of the menu item is controlled by the return value of MenuEnableMethod. If MenuEnableMethod returns... Then SOLIDWORKS Design... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
- `HintString` (System.String): Text to show in the SOLIDWORKS Design status bar when the user moves the pointer over this menu item; if you specify HintString, then it must be preceded by a comma
- `BitmapFilePath` (System.String): Path and filename of bitmap

## Return Value

Runtime command ID if successful, -1 if unsuccessful

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify MenuCallback and MenuEnableMethod.
For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.
The bitmap must be 16w x 16h x 256 colors.
You can add a new menu item to any one of the four frames (main, part, assembly, or drawing). To do this, call this method with the appropriate argument in the DocumentType parameter. For example, if you want your menu item to be available when a part document is active, then call this method and pass swDocPART as the first argument. After you have added your menu item to the part frame, you do not need to do it again during the current SOLIDWORKS Design session. Once a part document is activated by the user, SOLIDWORKS Design automatically displays your menu item.
To add a menu separator:
leave the text for the menu item blank, so that the menu string for the MenuItem argument starts with the at-sign symbol ( @):
"@subMenuString@menuString"
specify an existing method for the MenuCallback argument. This method is never called, so its implementation can be empty.
specify empty strings for the MenuEnableMethod, HintString, and bitmapFilePath arguments.
Read about
Add-in Shortcut Menus
.

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuPopupItem3`
- `ISldWorks.AddToolbar4`
- `ISldWorks.GetLocalizedMenuName`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`