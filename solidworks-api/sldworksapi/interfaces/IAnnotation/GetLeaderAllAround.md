---
type: method
interface: IAnnotation
member: GetLeaderAllAround
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
  - IAnnotation.GetLeaderCount
  - IAnnotation.GetLeaderPerpendicular
  - IAnnotation.GetLeaderSide
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
  - getleaderallaround
  - leader
  - all
  - around
  - boolean
---

# IAnnotation.GetLeaderAllAround

Gets the setting for all-around symbol display of this annotation.

## Signature

```csharp
System.Boolean GetLeaderAllAround()
```
## Parameters

None.

## Return Value

True if this annotation has the all-around symbol enabled, false if this annotation has the all-around symbol disabled

## Remarks

The all-around display flag is a characteristic of the annotation, not of individual leaders. You can get or set it whether leaders are displayed.
If bent leaders are disabled for this annotation, you can still get or set the all-around display flag. However, SOLIDWORKS does not use it to display the annotation.
The all-around symbol applies only to geometric tolerances and weld symbols. For all other types of annotations, this method returns false.
Use...
To...
IAnnotation::GetLeaderStyle
Get leader characteristics
IAnnotation::SetLeader3
Set leader characteristics

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetDashedLeader`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPerpendicular`
- `IAnnotation.GetLeaderSide`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.UseDocDispLeader`