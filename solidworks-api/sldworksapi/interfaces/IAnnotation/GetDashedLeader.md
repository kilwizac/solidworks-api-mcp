---
type: method
interface: IAnnotation
member: GetDashedLeader
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.BentLeaderLength
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
  - getdashedleader
  - dashed
  - leader
  - boolean
---

# IAnnotation.GetDashedLeader

Gets whether this leader is a dashed line or a solid line.

## Signature

```csharp
System.Boolean GetDashedLeader()
```
## Parameters

None.

## Return Value

True if leader is dashed line, false if it is solid line

## Remarks

A datum target symbol is the only type of annotation that uses dashed leaders. For all other types of annotations, this method returns false, which indicates that the leader is a solid line.
Use...
To...
IAnnotation::GetLeaderStyle
Get leader characteristics
IAnnotation::SetLeader3
Set leader characteristics

## See Also

- `IAnnotation.BentLeaderLength`
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