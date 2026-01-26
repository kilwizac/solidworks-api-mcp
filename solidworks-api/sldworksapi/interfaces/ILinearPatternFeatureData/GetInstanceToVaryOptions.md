---
type: method
interface: ILinearPatternFeatureData
member: GetInstanceToVaryOptions
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.SetInstanceToVaryOptions
keywords:
  - getinstancetovaryoptions
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - instance
  - vary
  - options
  - object
  - iinstancetovaryoptions
---

# ILinearPatternFeatureData.GetInstanceToVaryOptions

Gets the options for varying the spacing of pattern instances in this linear pattern feature.

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
ILinearPatternFeatureData::InstancesToVary
is true.

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)

## See Also

- `ILinearPatternFeatureData.SetInstanceToVaryOptions`