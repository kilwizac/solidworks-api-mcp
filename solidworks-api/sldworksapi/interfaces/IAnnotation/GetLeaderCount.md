---
type: method
interface: IAnnotation
member: GetLeaderCount
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
  - IAnnotation.GetLeaderPerpendicular
  - IAnnotation.GetLeaderPointsAtIndex
  - IAnnotation.GetLeaderSide
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeaderAttachmentPointAtIndex
  - IAnnotation.UseDocDispLeader
keywords:
  - annotation
  - see
  - also
  - iannotation
  - leaders
  - annotations
  - getleadercount
  - leader
  - count
  - int32
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
---

# IAnnotation.GetLeaderCount

Gets the number of leaders on this annotation.

## Signature

```csharp
System.Int32 GetLeaderCount()
```
## Parameters

None.

## Return Value

Number of leaders

## Remarks

If leader display is disabled for this annotation, then the number of leaders is 0.
Use...
To...
IAnnotation::GetLeaderStyle
Get leader characteristics
IAnnotation::SetLeader3
Set leader characteristics

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderAllAround`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeaderAttachmentPointAtIndex`
- `IAnnotation.UseDocDispLeader`