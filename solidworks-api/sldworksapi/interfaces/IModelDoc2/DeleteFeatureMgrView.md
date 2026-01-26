---
type: method
interface: IModelDoc2
member: DeleteFeatureMgrView
returns: void
parameters:
  -
    name: AppView
    type: System.Int32
    description: View handle of the FeatureManager design tree view to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
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
  - deletefeaturemgrview
  - imodeldoc2
  - model
  - doc2
  - delete
  - feature
  - mgr
  - view
  - app
  - int32
  - void
---

# IModelDoc2.DeleteFeatureMgrView

Removes the specified tab in the FeatureManager design tree.

## Signature

```csharp
void DeleteFeatureMgrView( 
   ref System.Int32
AppView
)
```
## Parameters

- `AppView` (System.Int32): View handle of the FeatureManager design tree view to delete

## Return Value

Unknown.

## Remarks

If your application must be x64 compatible, then use
IModelDocExtension::DeleteFeatureMgrViewx64
.
On the appropriate notification, you can call this method to clean up and delete your FeatureManager design tree view.
Use this method with
IModelViewManager::CreateFeatureMgrView2
or
IModelDoc2::AddFeatureMgrView3
.
If you created the FeatureManager design tree view using...
Then...
IModelViewManager::CreateFeatureMgrView2
Calling IModelDoc2::DeleteFeatureMgrView destroys the CView object used for the FeatureManager design tree view.
IModelDoc2::AddFeatureMgrView3
Your application allocated the CView object and calling IModelDoc2::DeleteFeatureMgrView does not destroy the CView object. In this case, you must destroy the CVew object using the appropriate destructor. Never use the delete operator directly on the CView object. Always use one of the appropriate MFC view destructors.