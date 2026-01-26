---
type: property
interface: IWidthMateFeatureData
member: DistanceFromEnd
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
  - distancefromend
  - iwidthmatefeaturedata
  - width
  - mate
  - feature
  - data
  - distance
  - end
  - double
readonly: null
---

# IWidthMateFeatureData.DistanceFromEnd

Gets or sets the distance from the end of this width mate.

## Signature

```csharp
System.Double DistanceFromEnd {get; set;}
```
## Parameters

None.

## Return Value

Distance from the end

## Remarks

This property is valid only if
IWidthMateFeatureData::ConstraintType
is set to
swMateWidthOptions_e
.swMateWidth_Dimension.