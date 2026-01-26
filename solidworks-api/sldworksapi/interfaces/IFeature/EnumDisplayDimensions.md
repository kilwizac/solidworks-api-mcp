---
type: method
interface: IFeature
member: EnumDisplayDimensions
returns: EnumDisplayDimensions
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IFeature.GetDisplayDimension
  - IFeature.GetFirstDisplayDimension
  - IFeature.GetNextDisplayDimension
keywords:
  - enumerations
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - feature
  - enumdisplaydimensions
  - ifeature
---

# IFeature.EnumDisplayDimensions

This method returns a display dimensions enumeration for this feature.

## Signature

```csharp
EnumDisplayDimensions EnumDisplayDimensions()
```
## Parameters

None.

## Return Value

Pointer to a display dimensions enumeration for this feature

## Remarks

Before you can get a feature's display dimensions, use
IModelDoc2::SetUserPreferenceToggle
and swDisplayFeatureDimension to display them.
All dimensions on this feature and its sub-features are returned in the enumeration. In the user-interface, this is equivalent to double-clicking a feature in the FeatureManager design tree to display all of the feature and sub-feature dimensions.
If you call this method from a sub-feature (for example, the sketch of a boss-extrude), then the returned dimensions contain only the dimensions found in the sketch.

## See Also

- `IFeature.GetDisplayDimension`
- `IFeature.GetFirstDisplayDimension`
- `IFeature.GetNextDisplayDimension`