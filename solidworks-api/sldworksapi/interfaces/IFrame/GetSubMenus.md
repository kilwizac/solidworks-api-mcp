---
type: method
interface: IFrame
member: GetSubMenus
returns: System.Object
parameters:
  -
    name: DocType
    type: System.Int32
    description: Type of document as defined by swDocumentTypes_e
  -
    name: FullMenuName
    type: System.String
    description: Full name of menu
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupItem
  - IFrame.GetSubMenuCount
  - IFrame.RemoveMenu
  - IFrame.RenameMenu
keywords:
  - menus
  - frames
  - getsubmenus
  - iframe
  - frame
  - sub
  - doc
  - type
  - int32
  - full
  - menu
  - name
  - string
  - object
---

# IFrame.GetSubMenus

Gets the submenus for this frame.

## Signature

```csharp
System.Object GetSubMenus( 
   System.Int32
DocType
,
   System.String
FullMenuName
)
```
## Parameters

- `DocType` (System.Int32): Type of document as defined by swDocumentTypes_e
- `FullMenuName` (System.String): Full name of menu

## Return Value

Pointer to an array of the names of the submenus

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupItem`
- `IFrame.GetSubMenuCount`
- `IFrame.RemoveMenu`
- `IFrame.RenameMenu`