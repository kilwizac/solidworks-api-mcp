---
type: method
interface: IBoundaryBossFeatureData
member: GetTangentInfluence
returns: System.Double
parameters:
  -
    name: Direction
    type: System.Int32
    description: Direction as defined in swBoundaryBossDirection_e
  -
    name: GuideIndex
    type: System.Int32
    description: Index of the curve (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetTangentApplyToAll
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.MergeTangentFaces
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - gettangentinfluence
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
---

# IBoundaryBossFeatureData.GetTangentInfluence

Gets the curve influence for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
System.Double GetTangentInfluence( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )

## Return Value

Percentage of curve influence; 0.0 <= value for curve influence <= 1.0

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
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeTangentFaces`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`