---
type: method
interface: IFeatMgrView
member: DeleteView
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFeatMgrView.ActivateView
  - IFeatMgrView.DeActivateView
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
  - deleteview
  - feat
  - mgr
  - view
  - delete
  - boolean
---

# IFeatMgrView.DeleteView

Removes this view from the FeatureManager design tree.

## Signature

```csharp
System.Boolean DeleteView()
```
## Parameters

None.

## Return Value

True if the tab is deleted, false if not

## Remarks

Use this method to delete a tab created by
IModelViewManager::AddControl
.

## See Also

- `IFeatMgrView.ActivateView`
- `IFeatMgrView.DeActivateView`