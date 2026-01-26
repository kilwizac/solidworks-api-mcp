---
type: method
interface: IChainPatternFeatureData
member: ClearGroup2Selections
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IChainPatternFeatureData.Group2FlipPlane
  - IChainPatternFeatureData.Group2PathLink1
  - IChainPatternFeatureData.Group2PathLink2
  - IChainPatternFeatureData.Group2PathPlane
  - IChainPatternFeatureData.Group2PatternComponent
keywords:
  - cleargroup2selections
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - clear
  - group2
  - selections
  - boolean
---

# IChainPatternFeatureData.ClearGroup2Selections

Clears Chain Group 2 selections in this connected linkage chain pattern feature.

## Signature

```csharp
System.Boolean ClearGroup2Selections()
```
## Parameters

None.

## Return Value

True if Chain Group 2 selections are cleared, false if no selections for Chain Group 2 existed (see Remarks )

## Remarks

This method allows you to change a
Chain Group 1
and
Chain Group 2
connected linkage chain pattern feature to a
Chain Group 1
connected linkage chain pattern feature.
This property is only available to connected linkage chain patterns.

## See Also

- `IChainPatternFeatureData.Group2FlipPlane`
- `IChainPatternFeatureData.Group2PathLink1`
- `IChainPatternFeatureData.Group2PathLink2`
- `IChainPatternFeatureData.Group2PathPlane`
- `IChainPatternFeatureData.Group2PatternComponent`