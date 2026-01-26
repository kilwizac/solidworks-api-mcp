---
type: method
interface: IAnnotation
member: GetLeaderStyle
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
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.UseDocDispLeader
keywords:
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - getleaderstyle
  - leader
  - style
  - int32
---

# IAnnotation.GetLeaderStyle

Gets the style of this leader.

## Signature

```csharp
System.Int32 GetLeaderStyle()
```
## Parameters

None.

## Return Value

Style of the leader as defined by swLeaderStyle_e

## Remarks

Use
IAnnotation::SetLeader3
to set the leader style.

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.UseDocDispLeader`