---
type: method
interface: IFrame
member: RemoveMenuPopupIcon
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index value of the context-sensitive menu icon; index is 1-based
  -
    name: DocType
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: SelectType
    type: System.Int32
    description: Selection type from which to remove the context-sensitive menu icon
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuPopupIcon
  - IFrame.AddMenuPopupItem2
  - IFrame.GetMenu
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.RemoveMenu
keywords:
  - menus
  - frames
  - frame
  - see
  - also
  - iframe
  - context
  - sensitive
  - removemenupopupicon
  - remove
  - menu
  - popup
  - icon
  - index
  - int32
  - doc
  - type
  - select
  - boolean
---

# IFrame.RemoveMenuPopupIcon

Removes an icon from a context-sensitive shortcut (popup) menu.

## Signature

```csharp
System.Boolean RemoveMenuPopupIcon( 
   System.Int32
Index
,
   System.Int32
DocType
,
   System.Int32
SelectType
)
```
## Parameters

- `Index` (System.Int32): Index value of the context-sensitive menu icon; index is 1-based
- `DocType` (System.Int32): Document type as defined in swDocumentTypes_e
- `SelectType` (System.Int32): Selection type from which to remove the context-sensitive menu icon

## Return Value

True if the icon is removed from the context-sensitive menu, false if not

## Remarks

This method is supported in C++ applications only.

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuPopupIcon`
- `IFrame.AddMenuPopupItem2`
- `IFrame.GetMenu`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.RemoveMenu`