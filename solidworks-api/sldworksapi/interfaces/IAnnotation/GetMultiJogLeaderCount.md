---
type: method
interface: IAnnotation
member: GetMultiJogLeaderCount
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
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeader3
  - IAnnotation.UseDocDispLeader
keywords:
  - arrows
  - multi
  - jog
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - getmultijogleadercount
  - leader
  - count
  - int32
---

# IAnnotation.GetMultiJogLeaderCount

Gets the number of multi-jog leaders on this annotation.

## Signature

```csharp
System.Int32 GetMultiJogLeaderCount()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Call this method before calling
IAnnotation::IGetMultiJogLeaders
to determine the size of the array for that method.

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetLeaderStyle`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeader3`
- `IAnnotation.UseDocDispLeader`