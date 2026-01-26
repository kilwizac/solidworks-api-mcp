---
type: method
interface: IAnnotation
member: GetLeaderPerpendicular
returns: System.Boolean
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
  - getleaderperpendicular
  - leader
  - perpendicular
  - boolean
---

# IAnnotation.GetLeaderPerpendicular

Gets the perpendicular bent leader display setting for this annotation.

## Signature

```csharp
System.Boolean GetLeaderPerpendicular()
```
## Parameters

None.

## Return Value

True if this annotation has perpendicular bent leader display enabled, false if this annotation has perpendicular bent leader display disabled

## Remarks

The perpendicular bent leader display flag is a characteristic of the annotation, not individual leaders. You can get or set it whether leaders are displayed.
If this annotation has bent leaders disabled, then you can still get or set the perpendicular bent leader flag. However, SOLIDWORKS does not use it to display the annotation.
The perpendicular bent leader display flag applies only to geometric tolerances. For all other types of annotations, this method returns false.
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
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.UseDocDispLeader`