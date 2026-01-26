---
type: method
interface: IFeatureManager
member: InsertFeatureLock
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IsFrozen
keywords:
  - insertfeaturelock
  - ifeaturemanager
  - feature
  - manager
  - insert
  - lock
---

# IFeatureManager.InsertFeatureLock

Locks or freezes a selected feature.

## Signature

```csharp
Feature InsertFeatureLock()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

After calling this method, a temporary freeze bar displays after the feature in the FeatureManager design tree. If you move the freeze bar to the top, the feature unlocks and the freeze bar disappears. To permanently enable the freeze bar, select
Tools > Options > System Options > General > Enable Freeze bar
.
This method is analogous to freezing a feature. For more information, see
SOLIDWORKS Design user-interface help > Parts and Features > Features > Feature Freeze > Freezing Features
.

## See Also

- `IFeature.IsFrozen`