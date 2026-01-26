---
type: method
interface: IBoundaryBossFeatureData
member: SetTangentLength
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
    name: Length
    type: System.Double
    description: Tangent length
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
  - IBoundaryBossFeatureData.MergeResult
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
keywords:
  - settangentlength
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - tangent
  - length
  - direction
  - int32
  - guide
  - index
  - double
  - void
---

# IBoundaryBossFeatureData.SetTangentLength

Sets the tangent length, which controls the amount of influence for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetTangentLength( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Double
Length
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `Length` (System.Double): Tangent length

## Return Value

Unknown.

## Remarks

This method is not available when the type of tangency is
swBoundaryBossTangencyType_e
.swBoundaryBossTangency_None. Call
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
- `IBoundaryBossFeatureData.MergeResult`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`