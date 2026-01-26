---
type: method
interface: IModelDoc2
member: DeActivateFeatureMgrView
returns: System.Boolean
parameters:
  -
    name: AppView
    type: System.Int32
    description: Pointer to the FeatureManager design tree view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IModelDoc2.AddFeatureMgrView3
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
  - deactivatefeaturemgrview
  - imodeldoc2
  - model
  - doc2
  - de
  - activate
  - feature
  - mgr
  - view
  - app
  - int32
  - boolean
---

# IModelDoc2.DeActivateFeatureMgrView

Deactivates a tab in the FeatureManager design tree view.

## Signature

```csharp
System.Boolean DeActivateFeatureMgrView( 
   ref System.Int32
AppView
)
```
## Parameters

- `AppView` (System.Int32): Pointer to the FeatureManager design tree view

## Return Value

True if deactivated, false if not

## See Also

- `IModelDoc2.AddFeatureMgrView3`