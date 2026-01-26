---
type: property
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - instances
  - vary
  - boolean
readonly: null
---

# ICircularPatternFeatureData.InstancesToVary

Gets or sets whether to vary the spacing of pattern instances in this circular pattern feature.

## Signature

```csharp
System.Boolean InstancesToVary {get; set;}
```
## Parameters

None.

## Return Value

True to vary the spacing of pattern instances, false to not

## Remarks

This property is valid only when editing the circular pattern feature. You cannot set this property during creation of the feature.
To vary instances in a circular pattern feature:
Call
IFeature::GetDefinition
.
Call
ICircularPatternFeatureData::AccessSelections
.
Set this property to true.
Call
IFeature::ModifyDefinition
.
Call ICircularPatternFeatureData::AccessSelections.
Call
ICircularPatternFeatureData::GetInstanceToVaryOptions
.
Modify
IInstanceToVaryOptions
properties.
Call
ICircularPatternFeatureData::SetInstanceToVaryOptions
.
Call IFeature::ModifyDefinition.