---
type: method
interface: IFeatureManager
member: EditFreeze2
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
  - IFeature.MoveFreezeBarTo2
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - freeze
  - bar
  - editfreeze2
  - ifeaturemanager
  - feature
  - manager
  - edit
  - freeze2
  - location
  - int32
  - name
  - string
  - update
  - all
  - configs
  - boolean
  - unlock
  - move
  - vba
  - vb
  - net
---

# IFeatureManager.EditFreeze2

Moves the freeze bar to the specified location in the FeatureManager design tree.

## Signature

```csharp
System.Int32 EditFreeze2( 
   System.Int32
Location
,
   System.String
FeatureName
,
   System.Boolean
UpdateAllConfigs
,
   System.Boolean
UnlockConfigs
)
```
## Parameters

- `Location` (System.Int32): Location as defined in swMoveFreezeBarTo_e
- `FeatureName` (System.String): Name of the feature
- `UpdateAllConfigs` (System.Boolean): True to update all configurations, false to not
- `UnlockConfigs` (System.Boolean): True to unlock configurations, false to not

## Return Value

1 indicates that the freeze bar did not move to the specified location in the FeatureManager design tree; 0 indicates that the freeze bar did move to the specified location in the FeatureManager design tree

## Examples

- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo2`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`