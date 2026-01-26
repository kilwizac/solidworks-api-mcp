---
type: property
interface: ILinearPatternFeatureData
member: D2PatternSeedOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.D2Axis
  - ILinearPatternFeatureData.D2ReverseDirection
  - ILinearPatternFeatureData.D2Spacing
  - ILinearPatternFeatureData.D2TotalInstances
  - ILinearPatternFeatureData.GetD2AxisType
  - ILinearPatternFeatureData.IsDirection2Specified
keywords:
  - d2patternseedonly
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - d2
  - seed
  - only
  - boolean
readonly: null
---

# ILinearPatternFeatureData.D2PatternSeedOnly

Gets or sets whether to create a pattern in Direction 2 using the seed feature only, without replicating the pattern instances of Direction 1, in this bidirectional linear pattern feature.

## Signature

```csharp
System.Boolean D2PatternSeedOnly {get; set;}
```
## Parameters

None.

## Return Value

True to create a pattern in Direction 2 using the seed feature only, false to create a pattern in Direction 2 using the seed feature and all of the instances generated in Direction 1

## Examples

- ILinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILinearPatternFeatureData)

## See Also

- `ILinearPatternFeatureData.D2Axis`
- `ILinearPatternFeatureData.D2ReverseDirection`
- `ILinearPatternFeatureData.D2Spacing`
- `ILinearPatternFeatureData.D2TotalInstances`
- `ILinearPatternFeatureData.GetD2AxisType`
- `ILinearPatternFeatureData.IsDirection2Specified`