---
type: method
interface: IFrame
member: AddMenuPopupIcon
returns: System.Boolean
parameters:
  -
    name: DocType
    type: System.Int32
    description: Document type to which to add the context-sensitive menu icon
  -
    name: SelectType
    type: System.Int32
    description: Selection type to which to add the context-sensitive menu icon
  -
    name: HintString
    type: System.String
    description: Text displayed in the SOLIDWORKS status bar when the user moves the mouse over the icon
  -
    name: CallbackFcnAndModule
    type: System.String
    description: Function called when user clicks the context-sensitive menu icon (see Remarks )
  -
    name: CustomNames
    type: System.String
    description: Names of custom feature types (see Remarks )
  -
    name: BitmapFilePath
    type: System.String
    description: Path and file name of the bitmap for the context-sensitive menu icon
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.AddMenu
  - IFrame.AddMenuItem2
  - IFrame.AddMenuPopupIcon2
  - IFrame.AddMenuPopupItem2
  - IFrame.GetMenu
  - IFrame.GetSubMenuCount
  - IFrame.GetSubMenus
  - IFrame.RemoveMenuPopupIcon
  - IFrame.RenameMenu
  - ISldWorks.AddItemToThirdPartyPopupMenu
keywords:
  - menus
  - frames
  - frame
  - see
  - also
  - iframe
  - context
  - sensitive
  - addmenupopupicon
  - add
  - menu
  - popup
  - icon
  - doc
  - type
  - int32
  - select
  - hint
  - string
  - callback
  - fcn
  - module
  - custom
  - names
  - bitmap
  - file
  - path
  - boolean
---

# IFrame.AddMenuPopupIcon

Adds an icon to a context-sensitive menu of a C++ SOLIDWORKS add-in.

## Signature

```csharp
System.Boolean AddMenuPopupIcon( 
   System.Int32
DocType
,
   System.Int32
SelectType
,
   System.String
HintString
,
   System.String
CallbackFcnAndModule
,
   System.String
CustomNames
,
   System.String
BitmapFilePath
)
```
## Parameters

- `DocType` (System.Int32): Document type to which to add the context-sensitive menu icon
- `SelectType` (System.Int32): Selection type to which to add the context-sensitive menu icon
- `HintString` (System.String): Text displayed in the SOLIDWORKS status bar when the user moves the mouse over the icon
- `CallbackFcnAndModule` (System.String): Function called when user clicks the context-sensitive menu icon (see Remarks )
- `CustomNames` (System.String): Names of custom feature types (see Remarks )
- `BitmapFilePath` (System.String): Path and file name of the bitmap for the context-sensitive menu icon

## Return Value

True if the context-sensitive menu icon is added, false if not

## Remarks

This method is supported in C++ applications only, and it only works for C++ applications implemented as
.dll
files, not as
.exe
files. Any function exposed as a callback from an context-sensitive menu icon must be declared as an EXPORT or included in your
.def
file.
The CallbackFcnAndModule argument specifies which function to call when the shortcut menu icon is clicked by the user. The syntax is as follows:
dllname@function
where:
dllname
Name of your library as specified in the project
.def
file. The actual file name and the definition in the
.def
file must be the same.
function
Name of the function that gets called when the user clicks the icon. This function must also be declared as an EXPORT in your
.def
file.
See
Add-in Callback and Enable Methods
to learn how to implement your callback function.
CustomNames is a semi-colon separated list of the names of the custom feature types. This argument is applicable only if SelectType is a custom feature type (like swSelATTRIBUTES); in the case of swSelATTRIBUTES, set this field to the name of the attribute definition.

## Examples

- C++ (#i-tab-content-237890da-8241-42db-8526-d13790097978)

## See Also

- `IFrame.AddMenu`
- `IFrame.AddMenuItem2`
- `IFrame.AddMenuPopupIcon2`
- `IFrame.AddMenuPopupItem2`
- `IFrame.GetMenu`
- `IFrame.GetSubMenuCount`
- `IFrame.GetSubMenus`
- `IFrame.RemoveMenuPopupIcon`
- `IFrame.RenameMenu`
- `ISldWorks.AddItemToThirdPartyPopupMenu`