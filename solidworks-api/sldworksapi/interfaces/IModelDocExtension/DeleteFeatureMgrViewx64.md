---
type: method
interface: IModelDocExtension
member: DeleteFeatureMgrViewx64
returns: void
parameters:
  -
    name: AppView
    type: System.Int64
    description: View handle of the FeatureManager design tree view to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - ui
related:
  - IFeatMgrView.GetFeatMgrViewWndx64
  - IModelDoc2.DeleteFeatureMgrView
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
  - tabs
  - deletefeaturemgrviewx64
  - imodeldocextension
  - model
  - doc
  - extension
  - delete
  - feature
  - mgr
  - viewx64
  - app
  - view
  - int64
  - void
---

# IModelDocExtension.DeleteFeatureMgrViewx64

Removes the specified tab in the FeatureManager design tree in 64-bit applications.

## Signature

```csharp
void DeleteFeatureMgrViewx64( 
   ref System.Int64
AppView
)
```
## Parameters

- `AppView` (System.Int64): View handle of the FeatureManager design tree view to delete

## Return Value

Unknown.

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
On the appropriate notification, you can call this method to clean up and delete your FeatureManager design tree view.
Use this method with
IModelViewManager::CreateFeatureMgrView2
or
IModelDoc2::AddFeatureMgrView3
.
If you created the FeatureManager design tree view using...
Then...
IModelViewManager::CreateFeatureMgrView2
Calling IModelDocExtension::DeleteFeatureMgrViewx64 destroys the CView object used for the FeatureManager design tree view.
IModelDoc2::AddFeatureMgrView3
Your application allocated the CView object and calling IModelDocExtension::DeleteFeatureMgrViewx64 does not destroy the CView object. In this case, you must destroy the CView object using the appropriate destructor. Never use the delete operator directly on the CView object. Always use one of the appropriate MFC view destructors.

## See Also

- `IFeatMgrView.GetFeatMgrViewWndx64`
- `IModelDoc2.DeleteFeatureMgrView`
- `IModelViewManager.GetFeatureMgrViewHWndx64`