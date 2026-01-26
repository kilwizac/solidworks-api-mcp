---
type: property
interface: IAnnotation
member: LeaderLineStyle
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
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeader3
keywords:
  - annotation
  - see
  - also
  - iannotation
  - leaders
  - annotations
  - leaderlinestyle
  - leader
  - line
  - style
  - int32
readonly: null
---

# IAnnotation.LeaderLineStyle

Gets or sets the leader's lines style for this annotation.

## Signature

```csharp
System.Int32 LeaderLineStyle {get; set;}
```
## Parameters

None.

## Return Value

Leader's line style as defined by swLineStyles_e

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
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeader3`