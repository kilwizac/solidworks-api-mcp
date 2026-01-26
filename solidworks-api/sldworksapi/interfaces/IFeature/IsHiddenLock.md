---
type: method
interface: IFeature
member: IsHiddenLock
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.HasFrozenUpdatePending
  - IFeature.IsFrozen
  - IFeature.MoveFreezeBarTo
  - IFeatureManager.EditFreeze
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
  - ishiddenlock
  - hidden
  - lock
  - boolean
  - move
  - vba
  - vb
  - net
---

# IFeature.IsHiddenLock

Gets whether this feature is the freeze bar.

## Signature

```csharp
System.Boolean IsHiddenLock()
```
## Parameters

None.

## Return Value

True if the freeze bar, false if not

## Remarks

Call this property during FeatureManager tree traversal to locate the position of the freeze bar. During a traversal, the freeze bar has been located if:
IFeature::Name
returns "Freeze***"
-and-
IFeature::IsHiddenLock returns true

## Examples

- Move Freeze Bar (VBA) (Move_Freeze_Bar_Example_VB.htm)
- Move Freeze Bar (VB.NET) (Move_Freeze_Bar_Example_VBNET.htm)
- Move Freeze Bar (C#) (Move_Freeze_Bar_Example_CSharp.htm)

## See Also

- `IFeature.HasFrozenUpdatePending`
- `IFeature.IsFrozen`
- `IFeature.MoveFreezeBarTo`
- `IFeatureManager.EditFreeze`
- `IFeatureManager.GetFreezeLocation`
- `IModelDocExtension.NeedsRebuild2`
- `IModelDocExtension.UpdateFrozenFeatures`