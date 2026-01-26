---
type: method
interface: IModelViewManager
member: CreateFeatureMgrControl3
returns: FeatMgrView
parameters:
  -
    name: BitMapFile
    type: System.String
    description: Fully qualified path to the bitmap file that you want to use for the tab
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
related:
  - IModelViewManager.AddControl3
  - IModelViewManager.CreateFeatureMgrView2
keywords:
  - createfeaturemgrcontrol3
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - control3
  - bit
  - map
  - file
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

# IModelViewManager.CreateFeatureMgrControl3

Obsolete. Superseded by IModelViewManager::CreateFeatureMgrControl4.

## Signature

```csharp
FeatMgrView CreateFeatureMgrControl3( 
   System.String
BitMapFile
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

- `BitMapFile` (System.String): Fully qualified path to the bitmap file that you want to use for the tab
- `Class` (System.String): Class ID for the ActiveX control
- `LicKey` (System.String): License key for the ActiveX control
- `ToolTip` (System.String): Text for the ToolTip
- `WhichPane` (System.Int32): Pane to use as defined in swFeatMgrPane_e

## Return Value

Pointer to the new tab

## Remarks

This method lets you add a tab for a registered ActiveX control to the FeatureManager design tree. A user can click the tab to activate the ActiveX control.
To add a tab to the FeatureManager design tree, specify swFeatMgrPane_e.FeatMgrPaneBottom for WhichPane. To add a tab to a FeatureManager design tree that has been split, specify swFeatMgrPane_e.swFeatMgrPaneTop and swFeatMgrPane_e.swFeatMgrPaneBottom, respectively, for WhichPane. See
IModelDoc2::FeatureManagerSplitterPosition
for details on splitting and positioning the split panel bar on a split FeatureManager design tree.
To delete a tab created by this method, use
IFeatMgrView::DeleteView
.
Class can be either the name of the registered control (ProgID) or its class ID (CLSID), for example, "MSCAL.calendar" or "{8E27C92B-1264-101C-8A2F-040224009C02}".  You must obtain these strings by searching for the registered ActiveX control in the registry editor. The ActiveX control library names displayed in the Object Browser may not be the same as the ActiveX control names in the registry. Do not use the Object Browser to specify Class.
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.

## See Also

- `IModelViewManager.AddControl3`
- `IModelViewManager.CreateFeatureMgrView2`