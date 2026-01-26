---
type: method
interface: ITaskpaneView
member: AddControl
returns: System.Object
parameters:
  -
    name: ClassName
    type: System.String
    description: Name or class ID for the ActiveX control
  -
    name: LicKey
    type: System.String
    description: License key for the ActiveX control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - task
  - pane
  - see
  - also
  - itaskpaneview
  - controls
  - addcontrol
  - taskpane
  - view
  - add
  - control
  - name
  - string
  - lic
  - key
  - object
  - buttons
  - vba
  - vb
  - net
---

# ITaskpaneView.AddControl

Adds an ActiveX control to the Task Pane view.

## Signature

```csharp
System.Object AddControl( 
   System.String
ClassName
,
   System.String
LicKey
)
```
## Parameters

- `ClassName` (System.String): Name or class ID for the ActiveX control
- `LicKey` (System.String): License key for the ActiveX control

## Return Value

Pointer to the IUnknown interface for this ActiveX control

## Remarks

If the ActiveX control added is a dialog, then see
Microsoft KB Archive/92905
, "DlgTab.exe - Infinite Loop Moving through Dialog Ctrl". Follow the instructions in this article, or turn off Control Parent in Extended Styles of Dialog for the dialog.
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.

## Examples

- Add Buttons to Task Pane (VBA) (Add_Buttons_to_Task_Pane_Example_VB.htm)
- Add Buttons to Task Pane (VB.NET) (Add_Buttons_to_Task_Pane_Example_VBNET.htm)
- Add Buttons to Task Pane (C#) (Add_Buttons_to_Task_Pane_Example_CSharp.htm)