---
type: method
interface: ISldWorks
member: RemoveMenuPopupItem2
returns: System.Boolean
parameters:
  -
    name: DocumentType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: SelectType
    type: System.Int32
    description: Selection type as defined in swSelectType_e
  -
    name: PopupItemName
    type: System.String
    description: Description displayed on the shortcut menu
  -
    name: MenuCallback
    type: System.String
    description: Function to call when the user clicks your menu item (see description in ISldWorks::AddMenuItem3 )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item If specified, SOLIDWORKS: Calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item. This is the default menu state with if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
  -
    name: CustomNames
    type: System.String
    description: Semi-colon separated list of the names of the custom feature types. This argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
keywords:
  - menus
  - remove
  - items
  - menu
  - removemenupopupitem2
  - isldworks
  - sld
  - works
  - popup
  - item2
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
  - boolean
---

# ISldWorks.RemoveMenuPopupItem2

Removes an item on a pop-up (shortcut) menu.

## Signature

```csharp
System.Boolean RemoveMenuPopupItem2( 
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

- `DocumentType` (System.Int32): Document type as defined in swDocumentTypes_e
- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `SelectType` (System.Int32): Selection type as defined in swSelectType_e
- `PopupItemName` (System.String): Description displayed on the shortcut menu
- `MenuCallback` (System.String): Function to call when the user clicks your menu item (see description in ISldWorks::AddMenuItem3 )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item If specified, SOLIDWORKS: Calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item 1 Deselects and enables the menu item. This is the default menu state with if no update function is specified 2 Selects and disables the menu item 3 Selects and enables the menu item
- `HintString` (System.String): Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
- `CustomNames` (System.String): Semi-colon separated list of the names of the custom feature types. This argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition

## Return Value

True if the item was removed, false if not

## Remarks

The enumeration swDocNONE is not valid for DocumentType.

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`