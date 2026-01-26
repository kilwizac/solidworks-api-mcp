---
type: method
interface: IFrame
member: GetSubMenuCount
returns: System.Int32
parameters:
  -
    name: DocType
    type: System.Int32
    description: Type of document as defined by swDocumentTypes_e
  -
    name: FullMenuName
    type: System.String
    description: Full name of the menu
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupItem
  - IFrame.GetSubMenus
  - IFrame.RemoveMenu
  - IFrame.RenameMenu
keywords:
  - menus
  - frames
  - getsubmenucount
  - iframe
  - frame
  - sub
  - menu
  - count
  - doc
  - type
  - int32
  - full
  - name
  - string
---

# IFrame.GetSubMenuCount

Gets the number of submenus for this frame.

## Signature

```csharp
System.Int32 GetSubMenuCount( 
   System.Int32
DocType
,
   System.String
FullMenuName
)
```
## Parameters

- `DocType` (System.Int32): Type of document as defined by swDocumentTypes_e
- `FullMenuName` (System.String): Full name of the menu

## Return Value

Number of submenus

## Remarks

Call this method before calling
IFrame::IGetSubMenus
to get the size of the array.

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupItem`
- `IFrame.GetSubMenus`
- `IFrame.RemoveMenu`
- `IFrame.RenameMenu`