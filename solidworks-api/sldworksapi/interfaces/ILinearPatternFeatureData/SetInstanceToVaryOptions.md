---
type: method
interface: ILinearPatternFeatureData
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
  - ILinearPatternFeatureData.GetInstanceToVaryOptions
keywords:
  - setinstancetovaryoptions
  - ilinearpatternfeaturedata
  - linear
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
  - iinstancetovaryoptions
---

# ILinearPatternFeatureData.SetInstanceToVaryOptions

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
ILinearPatternFeatureData::InstancesToVary
is true.

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)

## See Also

- `ILinearPatternFeatureData.GetInstanceToVaryOptions`