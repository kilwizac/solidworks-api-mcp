---
type: method
interface: ISldWorks
member: AddItemToThirdPartyPopupMenu2
returns: System.Boolean
parameters:
  -
    name: RegisterId
    type: System.Int32
    description: ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
  -
    name: DocType
    type: System.Int32
    description: Document type where to display shortcut menu, as defined in swDocumentTypes_e
  -
    name: Item
    type: System.String
    description: Unique display name of shortcut menu item (see Remarks ); specify an empty string if adding an icon to the menu bar
  -
    name: Identifier
    type: System.Int32
    description: ID of the add-in; value of the Cookie argument passed by ISwAddin::ConnectToSW
  -
    name: CallbackFunction
    type: System.String
    description: Function called when user clicks the shortcut menu item; specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator (see Remarks )
  -
    name: EnableFunction
    type: System.String
    description: Optional function that controls the state of the shortcut menu item If specified, SOLIDWORKS: calls this function before displaying the menu displays the menu item according to the return value of this function If EnableFunction returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if EnableFunction is not specified 2 Selects and disables the menu item 3 Selects and enables the menu item Specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator (see Remarks )
  -
    name: CustomName
    type: System.String
    description: Empty string
  -
    name: HintString
    type: System.String
    description: Text to display in the SOLIDWORKS status bar when users move the mouse over this shortcut menu item
  -
    name: BitmapFileName
    type: System.String
    description: Path and filename of bitmap for icons (menu bar or menu item) Specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator
  -
    name: MenuItemTypeOption
    type: System.Int32
    description: Type of menu item as defined in swMenuItemType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - parts
  - ui
related:
  - ISldWorks.AddItemToThirdPartyPopupMenu
keywords:
  - popup
  - menus
  - shortcut
  - add
  - ins
  - additemtothirdpartypopupmenu2
  - isldworks
  - sld
  - works
  - item
  - third
  - party
  - menu2
  - register
  - id
  - int32
  - doc
  - type
  - string
  - identifier
  - callback
  - function
  - enable
  - custom
  - name
  - hint
  - bitmap
  - file
  - menu
  - option
  - boolean
  - vb
  - net
---

# ISldWorks.AddItemToThirdPartyPopupMenu2

Adds menu items to a pop-up (shortcut) menu in a SOLIDWORKS add-in.

## Signature

```csharp
System.Boolean AddItemToThirdPartyPopupMenu2( 
   System.Int32
RegisterId
,
   System.Int32
DocType
,
   System.String
Item
,
   System.Int32
Identifier
,
   System.String
CallbackFunction
,
   System.String
EnableFunction
,
   System.String
CustomName
,
   System.String
HintString
,
   System.String
BitmapFileName
,
   System.Int32
MenuItemTypeOption
)
```
## Parameters

- `RegisterId` (System.Int32): ID of shortcut menu from ISldWorks::RegisterThirdPartyPopupMenu
- `DocType` (System.Int32): Document type where to display shortcut menu, as defined in swDocumentTypes_e
- `Item` (System.String): Unique display name of shortcut menu item (see Remarks ); specify an empty string if adding an icon to the menu bar
- `Identifier` (System.Int32): ID of the add-in; value of the Cookie argument passed by ISwAddin::ConnectToSW
- `CallbackFunction` (System.String): Function called when user clicks the shortcut menu item; specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator (see Remarks )
- `EnableFunction` (System.String): Optional function that controls the state of the shortcut menu item If specified, SOLIDWORKS: calls this function before displaying the menu displays the menu item according to the return value of this function If EnableFunction returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item; this is the default menu state if EnableFunction is not specified 2 Selects and disables the menu item 3 Selects and enables the menu item Specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator (see Remarks )
- `CustomName` (System.String): Empty string
- `HintString` (System.String): Text to display in the SOLIDWORKS status bar when users move the mouse over this shortcut menu item
- `BitmapFileName` (System.String): Path and filename of bitmap for icons (menu bar or menu item) Specify an empty string if MenuItemTypeOption is: swMenuItemType_e .swMenuItemType_Break swMenuItemType_e .swMenuItemType_Separator
- `MenuItemTypeOption` (System.Int32): Type of menu item as defined in swMenuItemType_e

## Return Value

True if the shortcut menu item is added, false if not

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify CallbackFunction and EnableFunction.
Read about
Add-in Shortcut Menus
.

## Examples

- VB.NET (#i-tab-content-5fe66d46-ff03-4dfd-b81c-6620cd573155)

## See Also

- `ISldWorks.AddItemToThirdPartyPopupMenu`