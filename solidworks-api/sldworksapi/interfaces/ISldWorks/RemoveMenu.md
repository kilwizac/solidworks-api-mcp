---
type: method
interface: ISldWorks
member: RemoveMenu
returns: System.Boolean
parameters:
  -
    name: DocType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: MenuItemString
    type: System.String
    description: Menu string (e.g., submenuString@menuString)
  -
    name: CallbackFcnAndModule
    type: System.String
    description: Callback function and module for this menu item as specified when the menu item was added; see IFrame::AddMenuItem2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddMenuItem3
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.GetMenuStrings
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenuPopupItem2
keywords:
  - menus
  - remove
  - items
  - menu
  - removemenu
  - isldworks
  - sld
  - works
  - doc
  - type
  - int32
  - item
  - string
  - callback
  - fcn
  - module
  - boolean
---

# ISldWorks.RemoveMenu

Removes a menu item from the specified document frame.

## Signature

```csharp
System.Boolean RemoveMenu( 
   System.Int32
DocType
,
   System.String
MenuItemString
,
   System.String
CallbackFcnAndModule
)
```
## Parameters

- `DocType` (System.Int32): Document type as defined in swDocumentTypes_e
- `MenuItemString` (System.String): Menu string (e.g., submenuString@menuString)
- `CallbackFcnAndModule` (System.String): Callback function and module for this menu item as specified when the menu item was added; see IFrame::AddMenuItem2

## Return Value

True if the menu item was removed successfully, false if not

## Remarks

When a menu item is added with
ISldWorks::AddMenuItem4
or
IFrame::AddMenu
, the document type for which the menu appears is specified. The DocType argument for this method must match the one used when the menu was created.

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuItem3`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.GetMenuStrings`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenuPopupItem2`