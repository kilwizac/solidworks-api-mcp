---
type: method
interface: IFeatureManager
member: GetFreezeLocation
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsFrozen
  - IFeature.IsHiddenLock
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.EditFreeze
  - IModelDocExtension.NeedsRebuild2
  - IModelDocExtension.UpdateFrozenFeatures
keywords:
  - freeze
  - bar
  - getfreezelocation
  - ifeaturemanager
  - feature
  - manager
  - location
  - move
  - vba
  - vb
  - net
---

# IFeatureManager.GetFreezeLocation

Gets the location of the freeze bar in the FeatureManager design tree.

## Signature

```csharp
Feature GetFreezeLocation()
```
## Parameters

None.

## Return Value

IFeature ; Null, if the freeze bar is at the top of the FeatureManager design tree

## Examples

- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.IsHiddenLock`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.EditFreeze`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`