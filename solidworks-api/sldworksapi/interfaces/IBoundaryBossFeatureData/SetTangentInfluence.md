---
type: method
interface: IBoundaryBossFeatureData
member: SetTangentInfluence
returns: void
parameters:
  -
    name: Direction
    type: System.Int32
    description: Direction as defined in swBoundaryBossDirection_e
  -
    name: GuideIndex
    type: System.Int32
    description: Index of the curve (see Remarks )
  -
    name: Influence
    type: System.Double
    description: Percentage of curve influence; 0.0 <= value for curve influence <= 1.0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetTangentApplyToAll
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.MergeTangentFaces
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - settangentinfluence
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - tangent
  - influence
  - direction
  - int32
  - guide
  - index
  - double
  - void
---

# IBoundaryBossFeatureData.SetTangentInfluence

Sets the curve influence toward the next curve for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetTangentInfluence( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Double
Influence
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `Influence` (System.Double): Percentage of curve influence; 0.0 <= value for curve influence <= 1.0

## Return Value

Unknown.

## Remarks

This method is only available if curves in both directions exist and the type of curve influence is:
swBoundaryBossCurveInfluenceType_e
.swBoundaryBossCurve_GlobalInfluence
- or-
swBoundaryBossCurveInfluenceType_e.swBoundaryBossCurve_ToNextSharpInfluence
Call
IBoundaryBossFeatureData::D1CurveInfluence
and
IBoundaryBossFeatureData::D2CurveInfluence
to determine the type of curve influences in both directions.
This method is not available if the type of tangency is:
swBoundaryBossTangencyType_e
.swBoundaryBossTangency_None
- or -
swBoundaryBossTangencyType_e.swBoundaryBossTangency_Default
Call
IBoundaryBossFeatureData::GetGuideTangencyType
to determine the type of tangency.
To get a valid range of values for GuideIndex, call
IBoundaryBossFeatureData::GetCurvesCount
.

## See Also

- `IBoundaryBossFeatureData.GetTangentApplyToAll`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeTangentFaces`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentLength`