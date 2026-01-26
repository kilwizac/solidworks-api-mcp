---
type: method
interface: ISldWorks
member: GetLocalizedMenuName
returns: System.String
parameters:
  -
    name: MenuId
    type: System.Int32
    description: Menu ID as defined in swMenuIdentifiers_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - menus
  - items
  - getlocalizedmenuname
  - isldworks
  - sld
  - works
  - localized
  - menu
  - name
  - id
  - int32
  - string
  - language
  - names
  - vba
---

# ISldWorks.GetLocalizedMenuName

Gets a localized menu name for the specified menu ID.

## Signature

```csharp
System.String GetLocalizedMenuName( 
   System.Int32
MenuId
)
```
## Parameters

- `MenuId` (System.Int32): Menu ID as defined in swMenuIdentifiers_e

## Return Value

String containing the localized menu name

## Remarks

The string returned allows the application to provide a correctly localized string representing the menu name that menus and menu items can be when added to in the SOLIDWORKS Design user interface.
This method should be called before
ISldWorks::AddMenu
,
ISldWorks::AddMenuItem3
,
IFrame::AddMenu
, or
IFrame::AddMenuItem2
.

## Examples

- Get Language and Localized Menu Names (VBA) (Get_Language_and_Localized_Menu_Names_Example_VB.htm)