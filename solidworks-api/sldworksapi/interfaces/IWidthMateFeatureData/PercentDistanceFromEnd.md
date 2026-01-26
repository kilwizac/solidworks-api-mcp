---
type: property
interface: IWidthMateFeatureData
member: PercentDistanceFromEnd
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - percentdistancefromend
  - iwidthmatefeaturedata
  - width
  - mate
  - feature
  - data
  - percent
  - distance
  - end
  - double
readonly: null
---

# IWidthMateFeatureData.PercentDistanceFromEnd

Gets or sets the percentage of distance from the end of this width mate.

## Signature

```csharp
System.Double PercentDistanceFromEnd {get; set;}
```
## Parameters

None.

## Return Value

Percentage of distance from the end

## Remarks

This property is valid only if
IWidthMateFeatureData::ConstraintType
is set to
swMateWidthOptions_e
.swMateWidth_Percent.