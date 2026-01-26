---
type: method
interface: IFlatPatternFeatureData
member: SetAddCornerTrim
returns: void
parameters:
  -
    name: BCT
    type: System.Boolean
    description: True to add corner trims, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFlatPatternFeatureData.CornerTrimRatioToThickness
  - IFlatPatternFeatureData.CornerTrimReliefDistance
  - IFlatPatternFeatureData.CornerTrimReliefType
  - IFlatPatternFeatureData.GetAddCornerTrim
  - IFlatPatternFeatureData.ShowSlitInCornerRelief
  - IFlatPatternFeatureData.UseRatioToThickness
keywords:
  - corner
  - trim
  - setaddcornertrim
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - add
  - bct
  - boolean
  - void
---

# IFlatPatternFeatureData.SetAddCornerTrim

Sets whether to add corner trims to the Flat-Pattern feature.

## Signature

```csharp
void SetAddCornerTrim( 
   System.Boolean
BCT
)
```
## Parameters

- `BCT` (System.Boolean): True to add corner trims, false to not

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFlatPatternFeatureData.CornerTrimRatioToThickness`
- `IFlatPatternFeatureData.CornerTrimReliefDistance`
- `IFlatPatternFeatureData.CornerTrimReliefType`
- `IFlatPatternFeatureData.GetAddCornerTrim`
- `IFlatPatternFeatureData.ShowSlitInCornerRelief`
- `IFlatPatternFeatureData.UseRatioToThickness`