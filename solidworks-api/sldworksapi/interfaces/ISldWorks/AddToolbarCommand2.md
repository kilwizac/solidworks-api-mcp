---
type: method
interface: ISldWorks
member: AddToolbarCommand2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
  -
    name: ToolbarId
    type: System.Int32
    description: Toolbar ID from ISldWorks::AddToolbar5
  -
    name: ToolbarIndex
    type: System.Int32
    description: 0-based index of the bitmap button
  -
    name: ButtonCallback
    type: System.String
    description: Function called when the user clicks the button (see Remarks )
  -
    name: ButtonEnableMethod
    type: System.String
    description: Function called to check whether the button should be enabled; typically used to check the type of object selected (see Remarks )
  -
    name: ToolTip
    type: System.String
    description: ToolTip for the toolbar button
  -
    name: HintString
    type: System.String
    description: Text that SOLIDWORKS Design displays in the status bar when the user moves their mouse over this toolbar button
docset: sldworksapi
deprecated: false
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
  - ISldWorks.RemoveFromPopupMenu
  - ISldWorks.RemoveMenu
  - ISldWorks.RemoveMenuPopupItem2
  - ISldWorks.RemoveToolbar2
  - ISldWorks.SetToolbarDock2
keywords:
  - toolbars
  - addtoolbarcommand2
  - isldworks
  - sld
  - works
  - add
  - toolbar
  - command2
  - cookie
  - int32
  - id
  - index
  - button
  - callback
  - string
  - enable
  - tool
  - tip
  - hint
  - boolean
  - create
  - vb
  - net
---

# ISldWorks.AddToolbarCommand2

Specifies the application functions to call when a toolbar button is clicked or sets a separator.

## Signature

```csharp
System.Boolean AddToolbarCommand2( 
   System.Int32
Cookie
,
   System.Int32
ToolbarId
,
   System.Int32
ToolbarIndex
,
   System.String
ButtonCallback
,
   System.String
ButtonEnableMethod
,
   System.String
ToolTip
,
   System.String
HintString
)
```
## Parameters

- `Cookie` (System.Int32): Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
- `ToolbarId` (System.Int32): Toolbar ID from ISldWorks::AddToolbar5
- `ToolbarIndex` (System.Int32): 0-based index of the bitmap button
- `ButtonCallback` (System.String): Function called when the user clicks the button (see Remarks )
- `ButtonEnableMethod` (System.String): Function called to check whether the button should be enabled; typically used to check the type of object selected (see Remarks )
- `ToolTip` (System.String): ToolTip for the toolbar button
- `HintString` (System.String): Text that SOLIDWORKS Design displays in the status bar when the user moves their mouse over this toolbar button

## Return Value

True if successful, false if unsuccessful

## Remarks

See
Add-in Callback and Enable Methods
to learn how to specify ButtonCallback and ButtonEnableMethod.
Call this method to specify the functions that get called by the SOLIDWORKS Design software when the button is pressed and to check if the button is enabled. Until this method is called, the SOLIDWORKS Design software does not display the button.
If ButtonEnableMethod returns...
Then SOLIDWORKS Design...
0
Deselects and disables the menu item
1
Deselects and enables the menu item; this is the default menu state if no update function is specified
2
Selects and disables the menu item
3
Selects and enables the menu item
To create a separator, all of the method's string parameters (ButtonCallback, ButtonEnableMethod, ToolTip, and HintString) must be blank strings. A bitmap button must still be defined in the add-in's resources, but it is not used.

## Examples

- Create Toolbars (C++) (Create_Toolbars_Example_CPlusPlus_COM.htm)
- Add Toolbars (C#) (Add_Toolbars_Example_CSharp.htm)
- Add Toolbars (VB.NET) (Add_Toolbars_Example_VBNET.htm)

## See Also

- `ISldWorks.AddMenu`
- `ISldWorks.AddMenuItem3`
- `ISldWorks.AddMenuPopupItem2`
- `ISldWorks.DragToolbarButton`
- `ISldWorks.GetToolbarDock2`
- `ISldWorks.GetToolbarState2`
- `ISldWorks.HideToolbar2`
- `ISldWorks.RemoveFromMenu`
- `ISldWorks.RemoveFromPopupMenu`
- `ISldWorks.RemoveMenu`
- `ISldWorks.RemoveMenuPopupItem2`
- `ISldWorks.RemoveToolbar2`
- `ISldWorks.SetToolbarDock2`