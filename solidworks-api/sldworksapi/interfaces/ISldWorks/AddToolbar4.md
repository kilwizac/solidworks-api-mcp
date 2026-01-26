---
type: method
interface: ISldWorks
member: AddToolbar4
returns: System.Int32
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
  -
    name: Title
    type: System.String
    description: Title of the toolbar
  -
    name: SmallBitmapImage
    type: System.String
    description: Bitmap file to use for the small bitmap for the toolbar (see Remarks )
  -
    name: LargeBitmapImage
    type: System.String
    description: Bitmap file to use for the large bitmap for the toolbar (see Remarks )
  -
    name: MenuPositionForToolbar
    type: System.Int32
    description: Not used (SOLIDWORKS always puts toolbar names in alphabetical order)
  -
    name: DocumentType
    type: System.Int32
    description: Bitwise values indicating what frame window types should have this toolbar's name added to the View > Toolbars menu; values from swDocTemplateTypes_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.AddMenuItem3
  - ISldWorks.AddMenuPopupItem2
  - ISldWorks.DragToolbarButton
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveFromMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.SetToolbarDock2
keywords:
  - addtoolbar4
  - isldworks
  - sld
  - works
  - add
  - toolbar4
  - cookie
  - int32
  - title
  - string
  - small
  - bitmap
  - image
  - large
  - menu
  - position
  - toolbar
  - document
  - type
  - create
  - toolbars
---

# ISldWorks.AddToolbar4

Obsolete. Superseded by ISldWorks::AddToolbar5.

## Signature

```csharp
System.Int32 AddToolbar4( 
   System.Int32
Cookie
,
   System.String
Title
,
   System.String
SmallBitmapImage
,
   System.String
LargeBitmapImage
,
   System.Int32
MenuPositionForToolbar
,
   System.Int32
DocumentType
)
```
## Parameters

- `Cookie` (System.Int32): Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
- `Title` (System.String): Title of the toolbar
- `SmallBitmapImage` (System.String): Bitmap file to use for the small bitmap for the toolbar (see Remarks )
- `LargeBitmapImage` (System.String): Bitmap file to use for the large bitmap for the toolbar (see Remarks )
- `MenuPositionForToolbar` (System.Int32): Not used (SOLIDWORKS always puts toolbar names in alphabetical order)
- `DocumentType` (System.Int32): Bitwise values indicating what frame window types should have this toolbar's name added to the View > Toolbars menu; values from swDocTemplateTypes_e

## Return Value

Toolbar ID for use with other methods or -1 if not created

## Remarks

For information about using this method with the
ISwAddin
object, see
Using ISwAddin to Create a SOLIDWORKS Add-in
.
This method:
Only operates properly when the application is implemented as a DLL and not as an .exe.
Adds the toolbar name to the
View >
Toolbars
menu.
Only creates the toolbar and passes the image for the buttons to SOLIDWORKS. To add functionality, use
ISldWorks::AddToolbarCommand2
.
The bitmap images should contain the bitmaps for each of the buttons, including separators, in the toolbar as a single bitmap. For a small bitmap, the image for each button must be 16x16; for a large bitmap, it must be 24x24. The bitmaps should use a 256-color palette.
If either SmallBitmapImage or LargeBitmapImage is null or empty, then the provided image is scaled to create the appropriately sized bitmap for the other argument.
NOTES:
When your add-in is unloaded, you must call
ISldWorks::RemoveToolbar2
to remove this toolbar.
If you want the toolbar to show up in specific locations only, do not use the now obsolete ISldWorks::ShowToolbar2 method. If your application uses that method, your application ignores the DocumentType argument. ISldWorks::ShowToolbar2 assumes that the application is controlling the visibility state of the toolbar, and not the user. This means that the toolbar will be available in all locations.

## Examples

- Create Toolbars (C++) (Create_Toolbars_Example_CPlusPlus_COM.htm)

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuItem3`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.SetToolbarDock2`