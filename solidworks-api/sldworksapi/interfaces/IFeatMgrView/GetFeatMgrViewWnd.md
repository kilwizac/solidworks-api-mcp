---
type: method
interface: IFeatMgrView
member: GetFeatMgrViewWnd
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.GetFeatureMgrViewHWnd
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - window
  - handles
  - getfeatmgrviewwnd
  - feat
  - mgr
  - view
  - wnd
  - int32
---

# IFeatMgrView.GetFeatMgrViewWnd

Gets the FeatureManager design tree view window handle as a CWnd object.

## Signature

```csharp
System.Int32 GetFeatMgrViewWnd()
```
## Parameters

None.

## Return Value

CWnd handle of the FeatureManager design tree view

## Remarks

If your application must be x64 compatible, then use
IFeatMgrView::GetFeatMgrViewWndx64
.
You can use this CWnd in combination with standard MFC calls to draw into this view.
Call this method when the FeatureManager design tree is created with
IModelViewManager::CreateFeatureMgrView2
. You do not need to call this method with
IModelDoc2::AddFeatureMgrView3
, because you created the view and already have its handle.

## See Also

- `IModelViewManager.GetFeatureMgrViewHWnd`