---
type: method
interface: ISldWorks
member: AddMenuPopupItem3
returns: System.Int32
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined by swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified as defined in ISwAddin::ConnectToSW
  -
    name: SelectType
    type: System.Int32
    description: Selection type as defined in swSelectType_e
  -
    name: PopupItemName
    type: System.String
    description: Description displayed on the shortcut menu (see Remarks )
  -
    name: MenuCallback
    type: System.String
    description: Function to be called when the user clicks your menu item (see description in ISldWorks::AddMenuItem4 ) (see Remarks )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item. 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item (See Remarks )
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
  -
    name: CustomNames
    type: System.String
    description: Semi-colon separated list of the names of the custom feature types; this argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddToolbar4
  - ISldWorks.AddToolbarCommand2
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
keywords:
  - addmenupopupitem3
  - isldworks
  - sld
  - works
  - add
  - menu
  - popup
  - item3
  - document
  - type
  - int32
  - cookie
  - select
  - item
  - name
  - string
  - callback
  - enable
  - hint
  - custom
  - names
---

# ISldWorks.AddMenuPopupItem3

Adds a menu item and zero or more submenus to shortcut menus of entities of the specified type in documents of the specified type.

## Signature

```csharp
System.Int32 AddMenuPopupItem3( 
   System.Int32
DocumentType
,
   System.Int32
Cookie
,
   System.Int32
SelectType
,
   System.String
PopupItemName
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
CustomNames
)
```
## Parameters

- `DocumentType` (System.Int32): Document type as defined by swDocumentTypes_e
- `Cookie` (System.Int32): Cookie specified as defined in ISwAddin::ConnectToSW
- `SelectType` (System.Int32): Selection type as defined in swSelectType_e
- `PopupItemName` (System.String): Description displayed on the shortcut menu (see Remarks )
- `MenuCallback` (System.String): Function to be called when the user clicks your menu item (see description in ISldWorks::AddMenuItem4 ) (see Remarks )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item. 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item (See Remarks )
- `HintString` (System.String): Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
- `CustomNames` (System.String): Semi-colon separated list of the names of the custom feature types; this argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition

## Return Value

SOLIDWORKS runtime command ID or -1 if the method fails

## Remarks

Call this method for every unique set of DocumentType and SelectType in whose menus you want this menu item to display.
In PopupItemName use the at-sign (@) to create submenus. To add a separator bar after a menu item, append an at-sign to PopupItemName and enclose PopupItemName in double quotes ("").
For example, specifying:
Edge
adds menu item
Edge
to the shortcut menu.
Edge@Color
adds menu item
Edge
to the shortcut menu and submenu
Color
to
Edge
.
Edge@Appearance@Color
adds menu item
Edge
to the shortcut menu, submenu
Appearance
to
Edge
,
and submenu
Color
to
Appearance
.
"Edge@"
adds menu item
Edge
to the shortcut menu and a separator bar after
Edge
.
"Edge@Appearance@"
adds menu item
Edge
to the shortcut menu, submenu
Appearance
to
Edge
, and a separator bar after
Appearance
.
See
Add-in Callback and Enable Methods
to learn how to specify MenuCallback and MenuEnableMethod.

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`