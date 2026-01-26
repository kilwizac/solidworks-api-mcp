---
type: property
interface: IAnnotation
member: BentLeaderLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
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
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeader3
  - IAnnotation.UseDocDispLeader
keywords:
  - annotation
  - see
  - also
  - iannotation
  - leaders
  - annotations
  - bentleaderlength
  - bent
  - leader
  - length
  - double
  - insert
  - gtol
  - vb
  - net
  - vba
readonly: null
---

# IAnnotation.BentLeaderLength

Gets or sets the length of the bent leader for this annotation.

## Signature

```csharp
System.Double BentLeaderLength {get; set;}
```
## Parameters

None.

## Return Value

Length of the bent leader or -1 (see Remarks )

## Remarks

This property returns -1 if:
this
type
of annotation does not support bent leaders,
this annotation does not have a bent leader, or
the length of the bent leader is set by a
document property
.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

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
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeader3`
- `IAnnotation.UseDocDispLeader`