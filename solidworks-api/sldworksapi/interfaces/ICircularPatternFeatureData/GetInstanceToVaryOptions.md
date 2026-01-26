---
type: method
interface: ICircularPatternFeatureData
member: GetInstanceToVaryOptions
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.SetInstanceToVaryOptions
keywords:
  - getinstancetovaryoptions
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - instance
  - vary
  - options
  - object
---

# ICircularPatternFeatureData.GetInstanceToVaryOptions

Gets the options for varying the spacing of pattern instances in this circular pattern feature.

## Signature

```csharp
System.Object GetInstanceToVaryOptions()
```
## Parameters

None.

## Return Value

IInstanceToVaryOptions

## Remarks

This method is valid only if
ICircularPatternFeatureData::InstancesToVary
is true.

## See Also

- `ICircularPatternFeatureData.SetInstanceToVaryOptions`