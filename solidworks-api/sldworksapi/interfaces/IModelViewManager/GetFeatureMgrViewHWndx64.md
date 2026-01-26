---
type: method
interface: IModelViewManager
member: GetFeatureMgrViewHWndx64
returns: System.Int64
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
  - microsoft
  - handle
  - getfeaturemgrviewhwndx64
  - imodelviewmanager
  - model
  - view
  - manager
  - feature
  - mgr
  - wndx64
  - feat
  - pane
  - int32
  - int64
---

# IModelViewManager.GetFeatureMgrViewHWndx64

Gets the window handle for the specified FeatureManager design tree view in 64-bit applications.

## Signature

```csharp
System.Int64 GetFeatureMgrViewHWndx64( 
   System.Int32
FeatMgrViewPane
)
```
## Parameters

- `FeatMgrViewPane` (System.Int32): FeatureManager design tree view as defined by swFeatMgrPane_e

## Return Value

Window handle for the specified FeatMgrViewPane

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## See Also

- `IFeatMgrView`
- `IModelViewManager.GetFeatureMgrViewHWnd`