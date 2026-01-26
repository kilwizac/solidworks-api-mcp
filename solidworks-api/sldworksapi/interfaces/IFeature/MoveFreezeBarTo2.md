---
type: method
interface: IFeature
member: MoveFreezeBarTo2
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
  -
    name: UnlockConfigs
    type: System.Boolean
    description: True to unlock configurations, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsFrozen
  - IFeature.IsHiddenLock
  - IFeatureManager.EditFreeze2
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - feature
  - see
  - also
  - ifeature
  - freeze
  - bar
  - movefreezebarto2
  - move
  - to2
  - location
  - int32
  - update
  - all
  - configs
  - boolean
  - unlock
---

# IFeature.MoveFreezeBarTo2

Moves the freeze bar to the specified location in the FeatureManager design tree.

## Signature

```csharp
System.Int32 MoveFreezeBarTo2( 
   System.Int32
Location
,
   System.Boolean
UpdateAllConfigs
,
   System.Boolean
UnlockConfigs
)
```
## Parameters

- `Location` (System.Int32): swMoveFreezeBarTo_e .swMoveFreezeBarToBeforeFeature -or- swMoveFreezeBarTo_e.swMoveFreezeBarToAfterFeature
- `UpdateAllConfigs` (System.Boolean): True to update all configurations, false to not
- `UnlockConfigs` (System.Boolean): True to unlock configurations, false to not

## Return Value

1 indicates that the freeze bar did not move to the specified location in the FeatureManager design tree; 0 indicates that the freeze bar did move to the specified location in the FeatureManager design tree

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeatureManager.EditFreeze2`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`