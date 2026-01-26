---
type: method
interface: ISldWorks
member: AddItemToThirdPartyPopupMenu
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
    description: Name of shortcut menu item (see Remarks )
  -
    name: CallbackFcnAndModule
    type: System.String
    description: Function called when user clicks the shortcut menu item (see Remarks )
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
    description: Path and filename of the bitmap
  -
    name: MenuItemTypeOption
    type: System.Int32
    description: Menu item as defined in swMenuItemType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - parts
  - ui
related:
  - ISldWorks.AddItemToThirdPartyPopupMenu2
keywords:
  - popup
  - menus
  - shortcut
  - add
  - ins
  - additemtothirdpartypopupmenu
  - isldworks
  - sld
  - works
  - item
  - third
  - party
  - menu
  - register
  - id
  - int32
  - doc
  - type
  - string
  - callback
  - fcn
  - module
  - custom
  - name
  - hint
  - bitmap
  - file
  - option
  - boolean
---

# ISldWorks.AddItemToThirdPartyPopupMenu

Adds menu items to a pop-up (shortcut) menu in a C++ SOLIDWORKS add-in.

## Signature

```csharp
System.Boolean AddItemToThirdPartyPopupMenu( 
   System.Int32
RegisterId
,
   System.Int32
DocType
,
   System.String
Item
,
   System.String
CallbackFcnAndModule
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
- `Item` (System.String): Name of shortcut menu item (see Remarks )
- `CallbackFcnAndModule` (System.String): Function called when user clicks the shortcut menu item (see Remarks )
- `CustomName` (System.String): Empty string
- `HintString` (System.String): Text to display in the SOLIDWORKS status bar when users move the mouse over this shortcut menu item
- `BitmapFileName` (System.String): Path and filename of the bitmap
- `MenuItemTypeOption` (System.Int32): Menu item as defined in swMenuItemType_e

## Return Value

True if the shortcut menu item is added, false if not

## Remarks

This method is supported in C++ applications only, and it only works in C++ applications implemented as DLLs, not as EXEs.
Read about
Add-in Shortcut Menus
.
The CallbackFcnAndModule argument specifies which function to call when this shortcut menu item is selected by the user. The syntax is as follows:
"dllname@function@updatefunction"
where:
dllname
Name of your library as specified in the project .def file. The actual DLL filename and the definition in the .def file must be the same.
function
Name of the function that gets called when the user clicks the shortcut menu item. This function must also be declared as an EXPORT in your .def file.
See
Add-in Callback and Enable Methods
to learn how to implement your function.
updatefunction
Optional argument that controls the state of the shortcut menu item. If specified, then SOLIDWORKS calls this function before the shortcut menu item is displayed. Define your updatefunction to return an integer and declare it as an EXPORT or included in your .def file.
The display of the third-party shortcut menu item is controlled by the return value of the function as follows:
return 0 - Unchecked and disabled.
return 1 - Unchecked and enabled. This is the default menu state if no updatefunction is specified.
return 2 - Checked and disabled.
return 3 - Checked and enabled.
See
Add-in Callback and Enable Methods
to learn how to implement your updatefunction.

## Examples

- C++ (#i-tab-content-357a052a-bccb-4bb3-a908-2a77d10ee6fe)

## See Also

- `ISldWorks.AddItemToThirdPartyPopupMenu2`