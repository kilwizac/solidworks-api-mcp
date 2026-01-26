---
type: method
interface: IFeatureManager
member: EditFreeze
returns: System.Int32
parameters:
  -
    name: Location
    type: System.Int32
    description: Location as defined in swMoveFreezeBarTo_e
  -
    name: FeatureName
    type: System.String
    description: Name of the feature
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
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - editfreeze
  - ifeaturemanager
  - feature
  - manager
  - edit
  - freeze
  - location
  - int32
  - name
  - string
  - update
  - all
  - configs
  - boolean
---

# IFeatureManager.EditFreeze

Obsolete. Superseded by IFeatureManager::EditFreeze2.

## Signature

```csharp
System.Int32 EditFreeze( 
   System.Int32
Location
,
   System.String
FeatureName
,
   System.Boolean
UpdateAllConfigs
)
```
## Parameters

- `Location` (System.Int32): Location as defined in swMoveFreezeBarTo_e
- `FeatureName` (System.String): Name of the feature
- `UpdateAllConfigs` (System.Boolean): True to update all configurations, false to not

## Return Value

0 indicates that the freeze bar did not move to the specified location in the FeatureManager design tree; a non-0 value indicates that the freeze bar did move to the specified location in the FeatureManager design tree

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`