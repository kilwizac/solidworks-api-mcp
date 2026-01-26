---
type: property
interface: IChainPatternFeatureData
member: Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - spacing
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - double
  - create
  - modify
  - distance
  - vb
  - net
  - vba
readonly: null
---

# IChainPatternFeatureData.Spacing

Gets or sets the distance between the pattern instances in the path in this chain pattern feature.

## Signature

```csharp
System.Double Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance between the pattern instances (see Remarks )

## Remarks

This property is only available for distance and linkage distance chain patterns when
equal spacing
is not set.
To:
have SOLIDWORKS calculate the maximum number of pattern instances to fill the path using the specified distance, use
IChainPatternFeatureData::FillPath
.
- or -
set the number of pattern instances for the path using the specified distance, use
IChainPatternFeatureData::InstanceCount
.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create and Modify Distance Chain Pattern Feature (C#) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_CSharp.htm)
- Create and Modify Distance Chain Pattern Feature (VB.NET) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VBNET.htm)
- Create and Modify Distance Chain Pattern Feature (VBA) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VB.htm)