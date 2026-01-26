---
type: property
interface: IChainPatternFeatureData
member: InstanceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - instancecount
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - instance
  - count
  - int32
  - create
  - modify
  - distance
  - vb
  - net
  - vba
readonly: null
---

# IChainPatternFeatureData.InstanceCount

Gets or sets the number of pattern instances in this chain pattern feature.

## Signature

```csharp
System.Int32 InstanceCount {get; set;}
```
## Parameters

None.

## Return Value

Number of pattern instances

## Remarks

This property is available to all types of chain patterns when
IChainPatternFeatureData::FillPath
is false.
If the pattern instances are not
equally spaced
, then use
IChainPatternFeatureData::Spacing
to specify the distance between each pattern instance.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create and Modify Distance Chain Pattern Feature (C#) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_CSharp.htm)
- Create and Modify Distance Chain Pattern Feature (VB.NET) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VBNET.htm)
- Create and Modify Distance Chain Pattern Feature (VBA) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VB.htm)