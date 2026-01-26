---
type: method
interface: ICircularPatternFeatureData
member: SetInstanceToVaryOptions
returns: System.Boolean
parameters:
  -
    name: InstancesToVaryObj
    type: System.Object
    description: IInstanceToVaryOptions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.GetInstanceToVaryOptions
keywords:
  - setinstancetovaryoptions
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - instance
  - vary
  - options
  - instances
  - obj
  - object
  - boolean
---

# ICircularPatternFeatureData.SetInstanceToVaryOptions

Sets the options for varying the spacing of pattern instances in this circular pattern feature.

## Signature

```csharp
System.Boolean SetInstanceToVaryOptions( 
   System.Object
InstancesToVaryObj
)
```
## Parameters

- `InstancesToVaryObj` (System.Object): IInstanceToVaryOptions

## Return Value

True if options successfully set, false if not

## Remarks

This method is valid only if
ICircularPatternFeatureData::InstancesToVary
is true.

## See Also

- `ICircularPatternFeatureData.GetInstanceToVaryOptions`