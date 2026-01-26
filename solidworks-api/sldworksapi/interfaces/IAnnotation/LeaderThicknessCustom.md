---
type: property
interface: IAnnotation
member: LeaderThicknessCustom
returns: System.Double
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
  - IAnnotation.LeaderThickness
  - IAnnotation.SetLeader3
keywords:
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - leaderthicknesscustom
  - leader
  - thickness
  - custom
  - double
readonly: null
---

# IAnnotation.LeaderThicknessCustom

Gets or sets the leader's custom line thickness for this annotation.

## Signature

```csharp
System.Double LeaderThicknessCustom {get; set;}
```
## Parameters

None.

## Return Value

Value for leader's custom line thickness

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
- `IAnnotation.LeaderThickness`
- `IAnnotation.SetLeader3`