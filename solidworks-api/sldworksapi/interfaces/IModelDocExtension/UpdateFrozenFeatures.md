---
type: method
interface: IModelDocExtension
member: UpdateFrozenFeatures
returns: System.Int32
parameters:
  -
    name: UpdateAllConfigs
    type: System.Boolean
    description: True to update all configurations, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - ui
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsFrozen
  - IFeature.IsHiddenLock
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.EditFreeze
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
keywords:
  - frozen
  - features
  - updatefrozenfeatures
  - imodeldocextension
  - model
  - doc
  - extension
  - update
  - all
  - configs
  - boolean
  - int32
---

# IModelDocExtension.UpdateFrozenFeatures

Updates frozen features of the model.

## Signature

```csharp
System.Int32 UpdateFrozenFeatures( 
   System.Boolean
UpdateAllConfigs
)
```
## Parameters

- `UpdateAllConfigs` (System.Boolean): True to update all configurations, false to not

## Return Value

Number of frozen features updated

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.EditFreeze`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`