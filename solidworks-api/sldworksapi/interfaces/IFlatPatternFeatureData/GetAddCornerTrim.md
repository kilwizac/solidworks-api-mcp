---
type: method
interface: IFlatPatternFeatureData
member: GetAddCornerTrim
returns: System.Boolean
parameters:
  -
    name: PFeat
    type: Feature
    description: Flat-Pattern feature object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFlatPatternFeatureData.CornerTrimRatioToThickness
  - IFlatPatternFeatureData.CornerTrimReliefDistance
  - IFlatPatternFeatureData.CornerTrimReliefType
  - IFlatPatternFeatureData.ShowSlitInCornerRelief
  - IFlatPatternFeatureData.UseRatioToThickness
keywords:
  - corner
  - trim
  - getaddcornertrim
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - add
  - feat
  - boolean
---

# IFlatPatternFeatureData.GetAddCornerTrim

Gets whether to add a corner trim to the Flat-Pattern feature.

## Signature

```csharp
System.Boolean GetAddCornerTrim( 
   out Feature
PFeat
)
```
## Parameters

- `PFeat` (Feature): Flat-Pattern feature object

## Return Value

True to add a corner trim, false to not

## See Also

- `IFlatPatternFeatureData.CornerTrimRatioToThickness`
- `IFlatPatternFeatureData.CornerTrimReliefDistance`
- `IFlatPatternFeatureData.CornerTrimReliefType`
- `IFlatPatternFeatureData.ShowSlitInCornerRelief`
- `IFlatPatternFeatureData.UseRatioToThickness`