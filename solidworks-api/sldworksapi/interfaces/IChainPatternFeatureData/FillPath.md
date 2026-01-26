---
type: property
interface: IChainPatternFeatureData
member: FillPath
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fillpath
  - ichainpatternfeaturedata
  - chain
  - pattern
  - feature
  - data
  - fill
  - path
  - boolean
  - create
  - modify
  - distance
  - vb
  - net
  - vba
readonly: null
---

# IChainPatternFeatureData.FillPath

Gets or sets whether the maximum number of pattern instances to fill the path is calculated by SOLIDWORKS for this chain pattern feature.

## Signature

```csharp
System.Boolean FillPath {get; set;}
```
## Parameters

None.

## Return Value

True if the maximum number of pattern instances to fill the path is calculated by SOLIDWORKS, false if not (see Remarks )

## Remarks

This property is available for all types of chain patterns, but it is only available for distance and distance linkage chain patterns when
equal spacing
is not set.
To set the distance between the pattern instances, use
IChainPatternFeatureData::Spacing
.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create and Modify Distance Chain Pattern Feature (C#) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_CSharp.htm)
- Create and Modify Distance Chain Pattern Feature (VB.NET) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VBNET.htm)
- Create and Modify Distance Chain Pattern Feature (VBA) (Create_and_Modify_Distance_Chain_Pattern_Feature_Example_VB.htm)