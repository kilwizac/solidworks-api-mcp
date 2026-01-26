---
type: method
interface: IAnnotation
member: GetLeaderSide
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
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.UseDocDispLeader
keywords:
  - annotation
  - see
  - also
  - iannotation
  - leaders
  - annotations
  - getleaderside
  - leader
  - side
  - int32
---

# IAnnotation.GetLeaderSide

Gets the leader attachment side setting for this annotation.

## Signature

```csharp
System.Int32 GetLeaderSide()
```
## Parameters

None.

## Return Value

Leader side as define in swLeaderSide_e

## Remarks

The leader attachment side setting is a characteristic of the annotation, not of individual leaders. Therefore, you can get or set it regardless of whether leaders are currently displayed.
Use...
To...
IAnnotation::GetLeaderStyle
Get leader characteristics
IAnnotation::SetLeader3
Set leader characteristics

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.UseDocDispLeader`