---
type: method
interface: ISldWorks
member: AddToolbar5
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
    name: ImageList
    type: System.Object
    description: Array of strings of the paths for the icons for the toolbar (see Remarks )
  -
    name: MenuPositionForToolbar
    type: System.Int32
    description: Not used (SOLIDWORKS always puts toolbar names in alphabetical order)
  -
    name: DocumentType
    type: System.Int32
    description: Bitwise values indicating what frame window types should have this toolbar's name added to the View > Toolbars menu; values from swDocTemplateTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddMenu
  - ISldWorks.DragToolbarButton
  - ISldWorks.DragToolbarButtonFromCommandID
  - ISldWorks.GetButtonPosition
  - ISldWorks.GetImageSize
  - ISldWorks.GetToolbarDock2
  - ISldWorks.GetToolbarState2
  - ISldWorks.GetToolbarVisibility
  - ISldWorks.HideToolbar2
  - ISldWorks.RemoveFromMenu
  - ISldWorks.SetToolbarDock2
  - ISldWorks.SetToolbarVisibility
keywords:
  - toolbars
  - addtoolbar5
  - isldworks
  - sld
  - works
  - add
  - toolbar5
  - cookie
  - int32
  - title
  - string
  - image
  - list
  - object
  - menu
  - position
  - toolbar
  - document
  - type
  - vb
  - net
---

# ISldWorks.AddToolbar5

Creates a Windows-style dockable toolbar.

## Signature

```csharp
System.Int32 AddToolbar5( 
   System.Int32
Cookie
,
   System.String
Title
,
   System.Object
ImageList
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
- `ImageList` (System.Object): Array of strings of the paths for the icons for the toolbar (see Remarks )
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
only operates properly when the application is implemented as a
.dll
and not as an
.exe
.
adds the toolbar name to the
View >
Toolbars
menu.
only creates the toolbar and passes the images for the icons to SOLIDWORKS. To add functionality, use
ISldWorks::AddToolbarCommand2
.
supports scaling for high resolution screens with high resolution operating system scaling options.
ImageList icons can be:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
Each image file (
.bmp
or
.png
) should contain all of the same-size icons for the toolbar buttons and separators. For example:
Each icon strip should use a 256-color palette.
NOTES:
When your add-in is unloaded, you must call
ISldWorks::RemoveToolbar2
to remove this toolbar.
If you want the toolbar to show up in specific locations only, do not use the now obsolete ISldWorks::ShowToolbar2 method. If your application uses that method, your application ignores the DocumentType argument. ISldWorks::ShowToolbar2 assumes that the application is controlling the visibility state of the toolbar, and not the user. This means that the toolbar will be available in all locations.

## Examples

- Add Toolbars (C#) (Add_Toolbars_Example_CSharp.htm)
- Add Toolbars (VB.NET) (Add_Toolbars_Example_VBNET.htm)

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.DragToolbarButtonFromCommandID`
- `ISldWorks.GetButtonPosition`
- `ISldWorks.GetImageSize`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.GetToolbarVisibility`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.SetToolbarDock2`
- `ISldWorks.SetToolbarVisibility`