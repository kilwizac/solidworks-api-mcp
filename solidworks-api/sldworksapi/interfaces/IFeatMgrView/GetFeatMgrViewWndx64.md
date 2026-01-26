---
type: method
interface: IFeatMgrView
member: GetFeatMgrViewWndx64
returns: System.Int64
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFeatMgrView.GetFeatMgrViewWnd
  - IModelViewManager.GetFeatureMgrViewHWndx64
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
  - getfeatmgrviewwndx64
  - feat
  - mgr
  - view
  - wndx64
  - int64
---

# IFeatMgrView.GetFeatMgrViewWndx64

Gets the FeatureManager design tree view window handle as a CWnd object in 64-bit applications.

## Signature

```csharp
System.Int64 GetFeatMgrViewWndx64()
```
## Parameters

None.

## Return Value

Window handle for this FeatureManager design tree view

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## See Also

- `IFeatMgrView.GetFeatMgrViewWnd`
- `IModelViewManager.GetFeatureMgrViewHWndx64`