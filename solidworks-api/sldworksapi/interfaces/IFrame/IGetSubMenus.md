---
type: method
interface: IFrame
member: IGetSubMenus
returns: System.String
parameters:
  -
    name: DocType
    type: System.Int32
    description: Type of document as defined by swDocumentTypes_e
  -
    name: FullMenuName
    type: System.String
    description: Full name of menu
  -
    name: NumSubMenus
    type: System.Int32
    description: Number of submenus
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
keywords:
  - menus
  - frames
  - igetsubmenus
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
  - num
---

# IFrame.IGetSubMenus

Gets the submenus for this frame.

## Signature

```csharp
System.String IGetSubMenus( 
   System.Int32
DocType
,
   System.String
FullMenuName
,
   System.Int32
NumSubMenus
)
```
## Parameters

- `DocType` (System.Int32): Type of document as defined by swDocumentTypes_e
- `FullMenuName` (System.String): Full name of menu
- `NumSubMenus` (System.Int32): Number of submenus

## Return Value

in-process, unmanaged C++: Pointer to an array of the names of the submenus of size NumSubMenus VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IFrame::GetSubMenuCount
before calling this method to get the size of the array.

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupItem`
- `IFrame.GetSubMenus`