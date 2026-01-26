---
type: method
interface: IFeature
member: MoveFreezeBarTo
returns: System.Int32
parameters:
  -
    name: Location
    type: System.Int32
    description: swMoveFreezeBarTo_e .swMoveFreezeBarToBeforeFeature -or- swMoveFreezeBarTo_e.swMoveFreezeBarToAfterFeature
  -
    name: UpdateAllConfigs
    type: System.Boolean
    description: True to update all configurations, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsFrozen
  - IFeature.IsHiddenLock
  - IFeatureManager.EditFreeze
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - movefreezebarto
  - ifeature
  - feature
  - move
  - freeze
  - bar
  - location
  - int32
  - update
  - all
  - configs
  - boolean
---

# IFeature.MoveFreezeBarTo

Obsolete. Superseded by IFeature::MoveFreezeBarTo2.

## Signature

```csharp
System.Int32 MoveFreezeBarTo( 
   System.Int32
Location
,
   System.Boolean
UpdateAllConfigs
)
```
## Parameters

- `Location` (System.Int32): swMoveFreezeBarTo_e .swMoveFreezeBarToBeforeFeature -or- swMoveFreezeBarTo_e.swMoveFreezeBarToAfterFeature
- `UpdateAllConfigs` (System.Boolean): True to update all configurations, false to not

## Return Value

0 indicates that the freeze bar did not move to the specified location in the FeatureManager design tree; a non-0 value indicates that the freeze bar did move to the specified location in the FeatureManager design tree

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeatureManager.EditFreeze`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`