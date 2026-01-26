---
type: method
interface: IFeature
member: IsFrozen
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsHiddenLock
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.EditFreeze
  - IFeatureManager.GetFreezeLocation
  - IFeatureManager.InsertFeatureLock
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - feature
  - see
  - also
  - ifeature
  - frozen
  - isfrozen
  - boolean
  - whether
  - vba
  - vb
  - net
  - move
  - freeze
  - bar
---

# IFeature.IsFrozen

Gets whether this feature is frozen.

## Signature

```csharp
System.Boolean IsFrozen()
```
## Parameters

None.

## Return Value

True if the feature is frozen, false if not (see Remarks )

## Remarks

When a feature is frozen, you cannot edit the feature and the feature is excluded from rebuilds of the model.

## Examples

- Get Whether Feature is Frozen (VBA) (Get_Whether_Feature_is_Locked_Example_VB.htm)
- Get Whether Feature is Frozen (VB.NET) (Get_Whether_Feature_is_Locked_Example_VBNET.htm)
- Get Whether Feature is Frozen (C#) (Get_Whether_Feature_is_Locked_Example_CSharp.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.EditFreeze`
- `IFeatureManager.GetFreezeLocation`
- `IFeatureManager.InsertFeatureLock`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`