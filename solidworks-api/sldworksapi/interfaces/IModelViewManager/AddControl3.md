---
type: method
interface: IModelViewManager
member: AddControl3
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: User-defined label that appears on the tab
  -
    name: ControlName
    type: System.String
    description: Name or class ID for the ActiveX control
  -
    name: BstrLicKey
    type: System.String
    description: Optional license key; this data is needed to create ActiveX controls that require a runtime license key; if the ActiveX control supports licensing, then provide a license key for the creation of the ActiveX control; default value is NULL
  -
    name: SplitWindow
    type: System.Boolean
    description: True to add a splitter window, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.ActivateControlTab
  - IModelViewManager.ActivateModelTab
  - IModelViewManager.CreateFeatureMgrView2
  - IModelViewManager.DeleteControlTab
  - IModelViewManager.GetControl
  - IModelViewManager.IGetControl
  - IModelViewManager.IsControlTabActive
  - IModelViewManager.IsModelTabActive
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - controls
  - addcontrol3
  - view
  - manager
  - add
  - control3
  - name
  - string
  - control
  - bstr
  - lic
  - key
  - split
  - window
  - boolean
  - object
---

# IModelViewManager.AddControl3

Adds a tab to this model view that supports tab traversal using the specified ActiveX control.

## Signature

```csharp
System.Object AddControl3( 
   System.String
Name
,
   System.String
ControlName
,
   System.String
BstrLicKey
,
   System.Boolean
SplitWindow
)
```
## Parameters

- `Name` (System.String): User-defined label that appears on the tab
- `ControlName` (System.String): Name or class ID for the ActiveX control
- `BstrLicKey` (System.String): Optional license key; this data is needed to create ActiveX controls that require a runtime license key; if the ActiveX control supports licensing, then provide a license key for the creation of the ActiveX control; default value is NULL
- `SplitWindow` (System.Boolean): True to add a splitter window, false to not

## Return Value

Pointer to the new ActiveX control

## Remarks

If your ActiveX control does not need tab traversal support, then use
IModelViewManager::AddControl
.
This method sets the class ID and license key information for the ActiveX control when the API PropertyManager page is shown and the ActiveX control is created. The controlName argument can be either the name of the control (ProgID) or the class ID (CLSID), for example, "MSCAL.calendar" or "{8E27C92B-1264-101C-8A2F-040224009C02}". Both provide the calendar protocol. You can obtain these strings using a combination of the Microsoft OLE/COM Object Viewer and the registry editor.
For example:
' ProgID
bRet = m_pActiveXControl.SetClass("MSCAL.Calendar", "")
bRet = m_pActiveXControl2.SetClass("MSComctlLib.ListViewCtrl", "")
' CLSID
bRet = m_pActiveXControl.SetClass("{8E27C92B-1264-101C-8A2F-040224009C02}", "")
bRet = m_pActiveXControl2.SetClass("{BDD1F04B-858B-11D1-B16A-00C0F0283628}", "")
Two or more tabs cannot be added with the same name.
To delete a tab created by this method, use
IModelViewManager::DeleteControlTab
. Each use of IModelViewManager::AddControl3 must use a corresponding IModelViewManager::DeleteControlTab before exiting your macro or application.
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.

## See Also

- `IModelViewManager.ActivateControlTab`
- `IModelViewManager.ActivateModelTab`
- `IModelViewManager.CreateFeatureMgrView2`
- `IModelViewManager.DeleteControlTab`
- `IModelViewManager.GetControl`
- `IModelViewManager.IGetControl`
- `IModelViewManager.IsControlTabActive`
- `IModelViewManager.IsModelTabActive`