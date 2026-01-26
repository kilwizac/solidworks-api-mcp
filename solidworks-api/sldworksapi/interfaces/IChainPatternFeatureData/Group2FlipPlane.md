---
type: property
interface: IChainPatternFeatureData
member: Group2FlipPlane
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChainPatternFeatureData.ClearGroup2Selections
  - IChainPatternFeatureData.Group2PathLink1
  - IChainPatternFeatureData.Group2PathLink2
  - IChainPatternFeatureData.Group2PathPlane
  - IChainPatternFeatureData.Group2PatternComponent
keywords:
  - group2flipplane
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - group2
  - flip
  - plane
  - boolean
readonly: null
---

# IChainPatternFeatureData.Group2FlipPlane

Gets or sets whether to flip the position plane for Chain Group 2 in this chain pattern feature.

## Signature

```csharp
System.Boolean Group2FlipPlane {get; set;}
```
## Parameters

None.

## Return Value

True to flip the position plane, false to not

## Remarks

This property is only available for connected linkage chain patterns.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IChainPatternFeatureData.ClearGroup2Selections`
- `IChainPatternFeatureData.Group2PathLink1`
- `IChainPatternFeatureData.Group2PathLink2`
- `IChainPatternFeatureData.Group2PathPlane`
- `IChainPatternFeatureData.Group2PatternComponent`