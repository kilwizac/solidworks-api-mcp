---
type: property
interface: IFlatPatternFeatureData
member: ShowSlitInCornerRelief
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFlatPatternFeatureData.CornerTreatment
  - IFlatPatternFeatureData.CornerTrimRatioToThickness
  - IFlatPatternFeatureData.CornerTrimReliefDistance
  - IFlatPatternFeatureData.CornerTrimReliefType
  - IFlatPatternFeatureData.GetAddCornerTrim
  - IFlatPatternFeatureData.SetAddCornerTrim
  - IFlatPatternFeatureData.UseRatioToThickness
keywords:
  - corner
  - trim
  - showslitincornerrelief
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - show
  - slit
  - relief
  - boolean
readonly: null
---

# IFlatPatternFeatureData.ShowSlitInCornerRelief

Get or set whether to show the slit in the corner relief of this Flat-Pattern feature.

## Signature

```csharp
System.Boolean ShowSlitInCornerRelief {get; set;}
```
## Parameters

None.

## Return Value

True to display the slit in the corner relief of this feature, false to not

## Remarks

When you create a rectangular or circular corner relief that is smaller than the bend area, a slit is added so that the part can bend. Setting this property to true makes the slit available in the flat pattern.
This property corresponds to the
Show Slit
option in the Parameters section of the Flat-Pattern PropertyManager.

## See Also

- `IFlatPatternFeatureData.CornerTreatment`
- `IFlatPatternFeatureData.CornerTrimRatioToThickness`
- `IFlatPatternFeatureData.CornerTrimReliefDistance`
- `IFlatPatternFeatureData.CornerTrimReliefType`
- `IFlatPatternFeatureData.GetAddCornerTrim`
- `IFlatPatternFeatureData.SetAddCornerTrim`
- `IFlatPatternFeatureData.UseRatioToThickness`