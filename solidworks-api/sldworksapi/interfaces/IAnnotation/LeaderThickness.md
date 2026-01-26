---
type: property
interface: IAnnotation
member: LeaderThickness
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.BentLeaderLength
  - IAnnotation.GetDashedLeader
  - IAnnotation.GetLeaderAllAround
  - IAnnotation.GetLeaderCount
  - IAnnotation.GetLeaderPerpendicular
  - IAnnotation.GetLeaderPointsAtIndex
  - IAnnotation.GetLeaderSide
  - IAnnotation.GetLeaderStyle
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeader3
keywords:
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - leaderthickness
  - leader
  - thickness
  - int32
readonly: null
---

# IAnnotation.LeaderThickness

Gets or sets the leader's line thickness for this annotation.

## Signature

```csharp
System.Int32 LeaderThickness {get; set;}
```
## Parameters

None.

## Return Value

Leader's line thickness as defined by swLineWeights_e

## Remarks

IAnnotation::UseDocDispLeader
must be false for this property to have any effect.

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetLeaderStyle`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeader3`