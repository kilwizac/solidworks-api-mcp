---
type: property
interface: IChainPatternFeatureData
member: Group2PathPlane
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChainPatternFeatureData.ClearGroup2Selections
  - IChainPatternFeatureData.Group2FlipPlane
  - IChainPatternFeatureData.Group2PathLink1
  - IChainPatternFeatureData.Group2PathLink2
keywords:
  - group2pathplane
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - group2
  - path
  - plane
  - object
readonly: null
---

# IChainPatternFeatureData.Group2PathPlane

Gets or sets the position of the pattern component relative to the path in Chain Group 2 in this chain pattern feature.

## Signature

```csharp
System.Object Group2PathPlane {get; set;}
```
## Parameters

None.

## Return Value

Component plane or planar face

## Remarks

This property is only available for connected linkage chain patterns.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IChainPatternFeatureData.ClearGroup2Selections`
- `IChainPatternFeatureData.Group2FlipPlane`
- `IChainPatternFeatureData.Group2PathLink1`
- `IChainPatternFeatureData.Group2PathLink2`