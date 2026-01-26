---
type: property
interface: ILinearPatternFeatureData
member: InstancesToVary
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - instancestovary
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - instances
  - vary
  - boolean
  - iinstancetovaryoptions
readonly: null
---

# ILinearPatternFeatureData.InstancesToVary

Gets or sets whether to vary the spacing of pattern instances in this linear pattern feature.

## Signature

```csharp
System.Boolean InstancesToVary {get; set;}
```
## Parameters

None.

## Return Value

True to vary the spacing of pattern instances, false to not

## Remarks

This property is valid only when editing the linear pattern feature. You cannot set this property during creation of the feature.
To vary instances in a linear pattern feature:
Call
IFeature::GetDefinition
.
Call
ILinearPatternFeatureData::AccessSelections
.
Set this property to true.
Call
IFeature::ModifyDefinition
.
Call ILinearPatternFeatureData::AccessSelections.
Call
ILinearPatternFeatureData::GetInstanceToVaryOptions
.
Modify
IInstanceToVaryOptions
properties.
Call
ILinearPatternFeatureData::SetInstanceToVaryOptions
.
Call IFeature::ModifyDefinition.

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)