---
type: method
interface: IModelViewManager
member: GetFeatureMgrViewHWnd
returns: System.Int32
parameters:
  -
    name: FeatMgrViewPane
    type: System.Int32
    description: FeatureManager design tree view as defined by swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IFeatMgrView
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
  - microsoft
  - handle
  - getfeaturemgrviewhwnd
  - imodelviewmanager
  - model
  - view
  - manager
  - feature
  - mgr
  - wnd
  - feat
  - pane
  - int32
---

# IModelViewManager.GetFeatureMgrViewHWnd

Gets the window handle for the specified FeatureManager design tree view.

## Signature

```csharp
System.Int32 GetFeatureMgrViewHWnd( 
   System.Int32
FeatMgrViewPane
)
```
## Parameters

- `FeatMgrViewPane` (System.Int32): FeatureManager design tree view as defined by swFeatMgrPane_e

## Return Value

Window handle for the specified FeatMgrViewPane

## Remarks

If your application must be x64 compatible, then use
IModelViewManager::GetFeatureMgrViewHWndx64
.

## See Also

- `IFeatMgrView`