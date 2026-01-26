---
type: method
interface: IModelViewManager
member: CreateFeatureMgrControl4
returns: FeatMgrView
parameters:
  -
    name: BitMapFileNames
    type: System.Object
    description: Array of fully qualified paths to three bitmap files, one for each size (small, medium, and large), to be used for the tab icon in different screen resolutions
  -
    name: Class
    type: System.String
    description: CLSID or ProgID for the ActiveX control (see Remarks )
  -
    name: LicKey
    type: System.String
    description: License key for the ActiveX control; empty string if unknown
  -
    name: ToolTip
    type: System.String
    description: Text to display when hovering over the tab icon
  -
    name: WhichPane
    type: System.Int32
    description: Pane where to add the tab as defined in swFeatMgrPane_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IModelViewManager.AddControl3
  - IModelViewManager.CreateFeatureMgrView2
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - tabs
  - createfeaturemgrcontrol4
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - control4
  - bit
  - map
  - file
  - names
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
  - add
  - activex
  - tab
  - vba
  - vb
  - net
---

# IModelViewManager.CreateFeatureMgrControl4

Creates a new FeatureManager design tree view containing the specified ActiveX control with a tab that displays the specified scaleable icon.

## Signature

```csharp
FeatMgrView CreateFeatureMgrControl4( 
   System.Object
BitMapFileNames
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

- `BitMapFileNames` (System.Object): Array of fully qualified paths to three bitmap files, one for each size (small, medium, and large), to be used for the tab icon in different screen resolutions
- `Class` (System.String): CLSID or ProgID for the ActiveX control (see Remarks )
- `LicKey` (System.String): License key for the ActiveX control; empty string if unknown
- `ToolTip` (System.String): Text to display when hovering over the tab icon
- `WhichPane` (System.Int32): Pane where to add the tab as defined in swFeatMgrPane_e (see Remarks )

## Return Value

Pointer to the new tab

## Remarks

To:
Add a tab to the FeatureManager design tree, specify WhichPane with swFeatMgrPane_e.FeatMgrPaneBottom.
Add a tab to a split FeatureManager design tree, specify WhichPane with either swFeatMgrPane_e.swFeatMgrPaneTop or swFeatMgrPane_e.swFeatMgrPaneBottom. See
IModelDoc2::FeatureManagerSplitterPosition
for details on splitting and positioning the split panel bar in the FeatureManager design tree.
Delete the tab created by this method, use
IFeatMgrView::DeleteView
.
Specify Class with either the ProgID or the CLSID of the registered ActiveX control. You can obtain these strings by searching for the registered ActiveX control in the registry editor.
For example,
RichEditCtrol.ocx
resides in
c:\Program files\SOLIDWORKS Corp\SOLIDWORKS\sldUtils
. It is registered during the SOLIDWORKS installation. When you search for
RichEditCtrl.ocx
in the registry, you find ProgID = GTSWRICHEDITCTRL.RichEditCtrlCtrl.1 and CLSID = {7632C33C-A935-48FF-84D9-F0F173EF543D}. Use either the registry's ActiveX ProgID or CLSID to specify Class. The ActiveX control library names displayed in the Object Browser may not be the same as the ActiveX control names in the registry. Do not use the Object Browser to specify Class.
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.

## Examples

- Add ActiveX Tab to FeatureManager Design Tree (VBA) (Add_ActiveX_Tab_to_FeatureManager_Design_Tree_Example_VB.htm)
- Add ActiveX Tab to FeatureManager Design Tree (VB.NET) (Add_ActiveX_Tab_to_FeatureManager_Design_Tree_Example_VBNET.htm)
- Add ActiveX Tab to FeatureManager Design Tree (C#) (Add_ActiveX_Tab_to_FeatureManager_Design_Tree_Example_CSharp.htm)

## See Also

- `IModelViewManager.AddControl3`
- `IModelViewManager.CreateFeatureMgrView2`