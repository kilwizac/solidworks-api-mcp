---
type: method
interface: IFlatPatternFeatureData
member: GetBreakCorners
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
  - IBreakCornerFeatureData
  - IFlatPatternFeatureData.BreakCornerRadius
  - IFlatPatternFeatureData.BreakCornerType
  - IFlatPatternFeatureData.SetBreakCorners
keywords:
  - break
  - corners
  - see
  - ibreakcornerfeaturedata
  - corner
  - getbreakcorners
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - feat
  - boolean
---

# IFlatPatternFeatureData.GetBreakCorners

Gets whether to add break corners to the Flat-Pattern feature.

## Signature

```csharp
System.Boolean GetBreakCorners( 
   out Feature
PFeat
)
```
## Parameters

- `PFeat` (Feature): Flat-Pattern feature object

## Return Value

True to add break corners, false to not

## See Also

- `IBreakCornerFeatureData`
- `IFlatPatternFeatureData.BreakCornerRadius`
- `IFlatPatternFeatureData.BreakCornerType`
- `IFlatPatternFeatureData.SetBreakCorners`