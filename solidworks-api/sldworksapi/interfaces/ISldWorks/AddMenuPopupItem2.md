---
type: method
interface: ISldWorks
member: AddMenuPopupItem2
returns: System.Boolean
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
    description: Description displayed on the shortcut menu
  -
    name: MenuCallback
    type: System.String
    description: Function to be called when the user clicks your menu item (see description in ISldWorks::AddMenuItem3 )
  -
    name: MenuEnableMethod
    type: System.String
    description: Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item. 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item
  -
    name: HintString
    type: System.String
    description: Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
  -
    name: CustomNames
    type: System.String
    description: Semi-colon separated list of the names of the custom feature types; this argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition
docset: sldworksapi
deprecated: true
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
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
keywords:
  - addmenupopupitem2
  - isldworks
  - sld
  - works
  - add
  - menu
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

# ISldWorks.AddMenuPopupItem2

Obsolete. Superseded by ISldWorks::AddMenuPopupItem3 and ISldWorks::AddMenuPopupItem4.

## Signature

```csharp
System.Boolean AddMenuPopupItem2( 
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
- `PopupItemName` (System.String): Description displayed on the shortcut menu
- `MenuCallback` (System.String): Function to be called when the user clicks your menu item (see description in ISldWorks::AddMenuItem3 )
- `MenuEnableMethod` (System.String): Optional function that controls the state of the menu item If specified: SOLIDWORKS calls this function before displaying the menu Display of the menu item is controlled by the return value of MenuEnableMethod If your method returns... Then SOLIDWORKS... 0 Deselects and disables the menu item. 1 Deselects and enables the menu item (this is the default menu state if no update function is specified) 2 Selects and disables the menu item 3 Selects and enables the menu item 4 Hides the menu item
- `HintString` (System.String): Text to show in the SOLIDWORKS status bar when the user moves their mouse over this menu item; if you specify a HintString, it must be preceded by a comma
- `CustomNames` (System.String): Semi-colon separated list of the names of the custom feature types; this argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition

## Return Value

True if the item was added, false if not

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddToolbar4`
- `ISldWorks.AddToolbarCommand2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`