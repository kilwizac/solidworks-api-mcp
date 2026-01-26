---
type: property
interface: ISecondaryMemberBetweenPointsFeatureData
member: LengthRatioMember1
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - lengthratiomember1
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - length
  - ratio
  - member1
  - double
readonly: null
---

# ISecondaryMemberBetweenPointsFeatureData.LengthRatioMember1

Gets and sets the length ratio offset from the end of the first member of the primary structure system member pair.

## Signature

```csharp
System.Double LengthRatioMember1 {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Length ratio offset from the end of the first member <= 1.0

## Remarks

This property is valid only if
ISecondaryMemberBetweenPointsFeatureData::SecondaryMemberOffsetType
is set to
swSecondaryMemberBetweenPointsDistanceFromEndType_e
.swSecondaryMemberBetweenPointsDistanceFromEndType_LengthRatio.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)