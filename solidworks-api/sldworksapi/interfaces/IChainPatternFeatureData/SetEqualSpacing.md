---
type: method
interface: IChainPatternFeatureData
member: SetEqualSpacing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChainPatternFeatureData.InstanceCount
keywords:
  - setequalspacing
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - equal
  - spacing
  - boolean
---

# IChainPatternFeatureData.SetEqualSpacing

Sets equal spacing between each chain pattern instance in this chain pattern feature.

## Signature

```csharp
System.Boolean SetEqualSpacing()
```
## Parameters

None.

## Return Value

True if equal spacing is set between each chain pattern instance, false if not

## Remarks

This method is only available for distance and distance linkage chain patterns when
IChainPatternFeatureData::FillPath
is false.

## See Also

- `IChainPatternFeatureData.InstanceCount`