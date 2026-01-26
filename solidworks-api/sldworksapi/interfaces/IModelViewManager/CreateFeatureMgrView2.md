---
type: method
interface: IModelViewManager
member: CreateFeatureMgrView2
returns: FeatMgrView
parameters:
  -
    name: BitMapFile
    type: System.String
    description: Bitmap file that you want to use for the tab
  -
    name: ToolTip
    type: System.String
    description: Text for the ToolTip
  -
    name: WhichPane
    type: System.Int32
    description: Pane to use as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IModelViewManager.CreateFeatureMgrControl
  - IModelViewManager.CreateFeatureMgrControl2
  - IModelViewManager.CreateFeatureMgrControl3
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
  - createfeaturemgrview2
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - view2
  - bit
  - map
  - file
  - string
  - tool
  - tip
  - which
  - pane
  - int32
  - feat
---

# IModelViewManager.CreateFeatureMgrView2

Creates a new view (tab) in this FeatureManager design tree.

## Signature

```csharp
FeatMgrView CreateFeatureMgrView2( 
   System.String
BitMapFile
,
   System.String
ToolTip
,
   System.Int32
WhichPane
)
```
## Parameters

- `BitMapFile` (System.String): Bitmap file that you want to use for the tab
- `ToolTip` (System.String): Text for the ToolTip
- `WhichPane` (System.Int32): Pane to use as defined in swFeatMgrPane_e

## Return Value

Pointer to the new tab

## Remarks

This method provides the ability to place your newly created Feature Manager tab on either the top or bottom pane. The pane may or may not be visible. However, the tab is added to the specified pane.
Under certain conditions, for example while the
Surface, Extend
command is active in the user interface, SOLIDWORKS locks the bottom pane and does not allow the activation of any other tab. If your application needs the ability to activate your new tab at all times, consider adding it either to the top pane or to both panes. If you add it to the top pane only, it may not be apparent to the user until the top pane is made visible.
If you receive a non-NULL return value, you can use
IFeatMgrView::GetFeatMgrViewWnd
or
IFeatureMgrView::GetFeatMgrViewWndx64
to get the new view handle. Because the view created is empty, you can use the new view handle in combination with standard MFC calls to draw, as desired, into the view.
The FeatureManager design tree view added to this document is not persistent. In other words, the FeatureManager design tree view is not stored with this document and must be recreated upon reloading the document.
This method automatically sets up to receive FeatMgrView
ActivateNotify
and
DeactivateNotify
events. On the appropriate notification, you can call
IModelDoc2::DeleteFeatureMgrView
or
IModelDocExtension::DeleteFeatureMgrViewx64
to clean up and delete your view.

## See Also

- `IModelViewManager.CreateFeatureMgrControl`
- `IModelViewManager.CreateFeatureMgrControl2`
- `IModelViewManager.CreateFeatureMgrControl3`