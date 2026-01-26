---
type: method
interface: IFrame
member: AddMenuPopupIcon3
returns: System.Boolean
parameters:
  -
    name: DocType
    type: System.Int32
    description: Document type whose context-sensitive menus display the icon
  -
    name: SelectType
    type: System.Int32
    description: Selection type whose context-sensitive menus display the icon
  -
    name: HintString
    type: System.String
    description: Text displayed in the SOLIDWORKS status bar when the user moves the pointer over the icon
  -
    name: Identifier
    type: System.Int32
    description: ID of the add-in; value of the Cookie argument passed by ISwAddin::ConnectToSW
  -
    name: CallbackFunction
    type: System.String
    description: Function called when user clicks the context-sensitive menu icon ( see Remarks )
  -
    name: CallbackUpdateFunction
    type: System.String
    description: Optional function that controls the state of the icon; if specified, then SOLIDWORKS calls this function before displaying the icon If CallbackUpdateFunction returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 4 Hides the item (see Remarks )
  -
    name: CustomNames
    type: System.String
    description: Names of custom feature types (see Remarks )
  -
    name: ImageList
    type: System.Object
    description: Array of strings for the paths for the image files for the context-sensitive menu icon (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupIcon
  - IFrame.AddMenuPopupItem2
  - IFrame.GetMenu
  - IFrame.GetMenux64
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.IGetSubMenus
  - IFrame.MenuPinned
  - IFrame.RemoveMenu
  - IFrame.RemoveMenuPopupIcon
  - IFrame.RenameMenu
  - ISldWorks.AddItemToThirdPartyPopupMenu2
  - ISldWorks.GetImageSize
keywords:
  - context
  - sensitive
  - menus
  - frame
  - see
  - also
  - iframe
  - frames
  - addmenupopupicon3
  - add
  - menu
  - popup
  - icon3
  - doc
  - type
  - int32
  - select
  - hint
  - string
  - identifier
  - callback
  - function
  - update
  - custom
  - names
  - image
  - list
  - object
  - boolean
  - button
  - vb
  - net
---

# IFrame.AddMenuPopupIcon3

Adds an icon to a context-sensitive menu of a SOLIDWORKS add-in.

## Signature

```csharp
System.Boolean AddMenuPopupIcon3( 
   System.Int32
DocType
,
   System.Int32
SelectType
,
   System.String
HintString
,
   System.Int32
Identifier
,
   System.String
CallbackFunction
,
   System.String
CallbackUpdateFunction
,
   System.String
CustomNames
,
   System.Object
ImageList
)
```
## Parameters

- `DocType` (System.Int32): Document type whose context-sensitive menus display the icon
- `SelectType` (System.Int32): Selection type whose context-sensitive menus display the icon
- `HintString` (System.String): Text displayed in the SOLIDWORKS status bar when the user moves the pointer over the icon
- `Identifier` (System.Int32): ID of the add-in; value of the Cookie argument passed by ISwAddin::ConnectToSW
- `CallbackFunction` (System.String): Function called when user clicks the context-sensitive menu icon ( see Remarks )
- `CallbackUpdateFunction` (System.String): Optional function that controls the state of the icon; if specified, then SOLIDWORKS calls this function before displaying the icon If CallbackUpdateFunction returns... Then SOLIDWORKS... 0 Deselects and disables the item 1 Deselects and enables the item; this is the default state if no update function is specified 4 Hides the item (see Remarks )
- `CustomNames` (System.String): Names of custom feature types (see Remarks )
- `ImageList` (System.Object): Array of strings for the paths for the image files for the context-sensitive menu icon (see Remarks )

## Return Value

True if the context-sensitive menu icon is added, false if not

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify CallbackFunction and CallbackUpdateFunction.
When the icon is clicked, the function specified in CallbackFunction can perform actions such as
displaying a third-party pop-up menu
.
CustomNames is a semi-colon separated list of the names of the custom feature types. This argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition.
This method supports scaling for high resolution screens with high resolution operating system scaling options.
ImageList images can be:
20 x 20 pixels
32 x 32 pixels
40 x 40 pixels
64 x 64 pixels
96 x 96 pixels
128 x128 pixels
Images should use 256-color palette.

## Examples

- Add Button to Context-sensitive Menu (C#) (Add_Button_to_Context-sensitive_Menu_Example_CSharp.htm)
- Add Button to Context-sensitive Menu (VB.NET) (Add_Button_to_Context-sensitive_Menu_Example_VBNET.htm)

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupIcon`
- `IFrame.AddMenuPopupItem2`
- `IFrame.GetMenu`
- `IFrame.GetMenux64`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.IGetSubMenus`
- `IFrame.MenuPinned`
- `IFrame.RemoveMenu`
- `IFrame.RemoveMenuPopupIcon`
- `IFrame.RenameMenu`
- `ISldWorks.AddItemToThirdPartyPopupMenu2`
- `ISldWorks.GetImageSize`