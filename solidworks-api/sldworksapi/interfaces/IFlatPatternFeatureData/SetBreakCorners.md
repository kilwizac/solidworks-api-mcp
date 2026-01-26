---
type: method
interface: IFlatPatternFeatureData
member: SetBreakCorners
returns: void
parameters:
  -
    name: BBreakCorner
    type: System.Boolean
    description: True to add break corners, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBreakCornerFeatureData
  - IFlatPatternFeatureData.BreakCornerRadius
  - IFlatPatternFeatureData.BreakCornerType
  - IFlatPatternFeatureData.GetBreakCorners
keywords:
  - break
  - corners
  - see
  - ibreakcornerfeaturedata
  - corner
  - setbreakcorners
  - iflatpatternfeaturedata
  - flat
  - pattern
  - feature
  - data
  - boolean
  - void
---

# IFlatPatternFeatureData.SetBreakCorners

Sets whether to add break corners to the Flat-Pattern feature.

## Signature

```csharp
void SetBreakCorners( 
   System.Boolean
BBreakCorner
)
```
## Parameters

- `BBreakCorner` (System.Boolean): True to add break corners, false to not

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IBreakCornerFeatureData`
- `IFlatPatternFeatureData.BreakCornerRadius`
- `IFlatPatternFeatureData.BreakCornerType`
- `IFlatPatternFeatureData.GetBreakCorners`