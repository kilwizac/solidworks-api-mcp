---
type: method
interface: IFeature
member: HasFrozenUpdatePending
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IsFrozen
  - IFeature.IsHiddenLock
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.EditFreeze
  - IFeatureManager.GetFreezeLocation
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.ShowPartRebuildIndicators
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - feature
  - see
  - also
  - ifeature
  - frozen
  - hasfrozenupdatepending
  - has
  - update
  - pending
  - boolean
  - move
  - freeze
  - bar
  - vba
  - vb
  - net
---

# IFeature.HasFrozenUpdatePending

Gets whether this feature has pending freeze updates.

## Signature

```csharp
System.Boolean HasFrozenUpdatePending()
```
## Parameters

None.

## Return Value

True if the feature needs an update, false if not

## Examples

- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)

## See Also

- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.EditFreeze`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.ShowPartRebuildIndicators`
- `IModelDocExtension.UpdateFrozenFeatures`