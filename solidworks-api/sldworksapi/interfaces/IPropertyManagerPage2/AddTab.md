---
type: method
interface: IPropertyManagerPage2
member: AddTab
returns: PropertyManagerPageTab
parameters:
  -
    name: ID
    type: System.Int32
    description: Identifier defined by the add-in for this tab
  -
    name: Caption
    type: System.String
    description: Text for tab
  -
    name: Bitmap
    type: System.String
    description: Bitmap for tab
  -
    name: Options
    type: System.Int32
    description: Not used; specify 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - tabs
  - addtab
  - manager
  - page2
  - add
  - tab
  - id
  - int32
  - caption
  - string
  - bitmap
  - options
---

# IPropertyManagerPage2.AddTab

Adds a tab to a PropertyManager page.

## Signature

```csharp
PropertyManagerPageTab AddTab( 
   System.Int32
ID
,
   System.String
Caption
,
   System.String
Bitmap
,
   System.Int32
Options
)
```
## Parameters

- `ID` (System.Int32): Identifier defined by the add-in for this tab
- `Caption` (System.String): Text for tab
- `Bitmap` (System.String): Bitmap for tab
- `Options` (System.Int32): Not used; specify 0

## Return Value

Newly created PropertyManager page tab

## Remarks

The ID argument provides an add-in with a way of identifying which tab is being handled when one of the callbacks is called; for example, when
IPropertyManagerPage2Handler8::OnTabClicked
is called. The IDis passed as an argument, identifying the tab clicked.
The Bitmap argument allows you to place a bitmap before the text on the tab. The argument is the full path and filename to a bitmap on disk. The bitmap should be 16 x 18 (width x height) pixels. It can be either 16 or 256 colors. Any portions of the bitmap that are RGB(255,255,255) will be transparent, letting the tab background show through. If this argument is an empty string or not the name of a valid bitmap file, no bitmap is placed on the tab.
Use this method to add tabs to your PropertyManager page before the page is displayed. It cannot be used if the page is already displayed.
Use
IPropertyManagerPageTab::Caption
to add a caption to the tab.