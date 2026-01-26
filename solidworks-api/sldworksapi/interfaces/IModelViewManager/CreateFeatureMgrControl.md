---
type: method
interface: IModelViewManager
member: CreateFeatureMgrControl
returns: FeatMgrView
parameters:
  -
    name: PPicture
    type: System.Object
    description: Pointer to the bitmap that you want to use for the tab
  -
    name: Class
    type: System.String
    description: Class ID for the ActiveX control
  -
    name: LicKey
    type: System.String
    description: License key for the ActiveX control
  -
    name: ToolTip
    type: System.String
    description: Text for the ToolTip
  -
    name: WhichPane
    type: System.Int32
    description: Pane to use as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - ui
related: []
keywords:
  - createfeaturemgrcontrol
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - control
  - picture
  - object
  - string
  - lic
  - key
  - tool
  - tip
  - which
  - pane
  - int32
  - feat
---

# IModelViewManager.CreateFeatureMgrControl

Obsolete. Superseded by IModelViewManager::CreateFeatureMgrControl2.

## Signature

```csharp
FeatMgrView CreateFeatureMgrControl( 
   System.Object
PPicture
,
   System.String
Class
,
   System.String
LicKey
,
   System.String
ToolTip
,
   System.Int32
WhichPane
)
```
## Parameters

- `PPicture` (System.Object): Pointer to the bitmap that you want to use for the tab
- `Class` (System.String): Class ID for the ActiveX control
- `LicKey` (System.String): License key for the ActiveX control
- `ToolTip` (System.String): Text for the ToolTip
- `WhichPane` (System.Int32): Pane to use as defined in swFeatMgrPane_e

## Return Value

Pointer to the new tab

## Remarks

This method is not supported in applications written in .NET languages.
The user can click the tab to activate an ActiveX control.
This method references the IPictureDisp interface. Use
IModelViewManager::CreateFeatureMgrControl2
to specify the fully qualified path to the bitmap file on disk. Use
IModelViewManager::CreateFeatureMgrControl3
if tab traversal support is needed and specify a fully qualified path to the bitmap file on disk.
This method sets the class ID and license key information for the ActiveX control when the API PropertyManager page is shown and the ActiveX control is created. The Class argument can be either the name of the control (ProgID) or the class ID (CLSID), for example, "MSCAL.calendar" or "{8E27C92B-1264-101C-8A2F-040224009C02}". Both provide the calendar protocol. You can obtain these strings using a combination of the Microsoft OLE/COM Object Viewer and the registry editor.
For example:
' ProgID
bRet = m_pActiveXControl.SetClass("MSCAL.Calendar", "")
bRet = m_pActiveXControl2.SetClass("MSComctlLib.ListViewCtrl", "")
' CLSID
bRet = m_pActiveXControl.SetClass("{8E27C92B-1264-101C-8A2F-040224009C02}", "")
bRet = m_pActiveXControl2.SetClass("{BDD1F04B-858B-11D1-B16A-00C0F0283628}", "")
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.