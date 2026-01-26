---
type: method
interface: ISldWorks
member: AddMenuPopupItem4
returns: System.Int32
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined by swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie as defined in ISwAddin::ConnectToSW
  -
    name: SelectType
    type: System.String
    description: Selection type as returned by IFeature::GetTypeName2 (see Remarks )
  -
    name: PopupItemName
    type: System.String
    description: Description displayed on the shortcut menu (see Remarks )
  -
    name: MenuCallback
    type: System.String
    description: Function to call when this menu item is selected (see Remarks )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If MenuEnableMethod returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item (see Remarks )
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS status bar when the user moves a mouse over this menu item
  -
    name: CustomNames
    type: System.String
    description: Semi-colon separated list of the names of the custom features; this argument is applicable only if SelectType is a custom feature type (like Attribute); in the case of Attribute, set this field to a list of attribute definitions
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
  - menus
  - items
  - shortcut
  - popup
  - addmenupopupitem4
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
  - select
  - string
  - item
  - name
  - callback
  - enable
  - hint
  - custom
  - names
---

# ISldWorks.AddMenuPopupItem4

Adds a menu item and zero or more submenus to shortcut menus of features of the specified type in documents of the specified type.

## Signature

```csharp
System.Int32 AddMenuPopupItem4( 
   System.Int32
DocumentType
,
   System.Int32
Cookie
,
   System.String
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
- `Cookie` (System.Int32): Cookie as defined in ISwAddin::ConnectToSW
- `SelectType` (System.String): Selection type as returned by IFeature::GetTypeName2 (see Remarks )
- `PopupItemName` (System.String): Description displayed on the shortcut menu (see Remarks )
- `MenuCallback` (System.String): Function to call when this menu item is selected (see Remarks )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If MenuEnableMethod returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item (see Remarks )
- `HintString` (System.String): Text to show in the SOLIDWORKS status bar when the user moves a mouse over this menu item
- `CustomNames` (System.String): Semi-colon separated list of the names of the custom features; this argument is applicable only if SelectType is a custom feature type (like Attribute); in the case of Attribute, set this field to a list of attribute definitions

## Return Value

SOLIDWORKS runtime command ID or -1 if the method fails

## Remarks

Call this method for every unique set of DocumentType and SelectType in whose menus you want this menu item to display.
For SelectTypes that are macro features, components, faces, edges or other non-feature entities, use
ISldWorks::AddMenuPopupItem3
instead of this method.
In PopupItemName use the at-sign (@) to create submenus. To add a separator bar after a menu item, append an at-sign to PopupItemName and enclose PopupItemName in double quotes ("").
For example, specifying:
Feature
adds menu item
Feature
to the shortcut menu.
Feature@Color
adds menu item
Feature
to the shortcut menu and submenu
Color
to
Feature
.
Feature@Appearance@Color
adds menu item
Feature
to the shortcut menu, submenu
Appearance
to
Feature
,
and submenu
Color
to
Appearance
.
"Feature@"
adds menu item
Feature
to the shortcut menu and a separator bar after
Feature
.
"Feature@Appearance@"
adds menu item
Feature
to the shortcut menu, submenu
Appearance
to
Feature
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