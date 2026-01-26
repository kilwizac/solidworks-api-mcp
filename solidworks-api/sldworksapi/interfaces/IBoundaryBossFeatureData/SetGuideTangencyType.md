---
type: method
interface: IBoundaryBossFeatureData
member: SetGuideTangencyType
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
    name: TangType
    type: System.Int32
    description: Type of tangency as defined in swBoundaryBossTangencyType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetGuideTangencyType
  - IBoundaryBossFeatureData.GetTangentApplyToAll
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.MergeTangentFaces
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - setguidetangencytype
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - guide
  - tangency
  - type
  - direction
  - int32
  - index
  - tang
  - void
---

# IBoundaryBossFeatureData.SetGuideTangencyType

Sets the type of tangency for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetGuideTangencyType( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Int32
TangType
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `TangType` (System.Int32): Type of tangency as defined in swBoundaryBossTangencyType_e

## Return Value

Unknown.

## Remarks

This method is only available when a minimum of three curves in the specified direction exist.
Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.
If specified curve is...
Then the valid types of tangency as defined in swBoundaryBossTangencyType_e are...
Sketch curve
swBoundaryBossTangency_None
swBoundaryBossTangency_DirectionVector
swBoundaryBossTangency_NormalToProfile
Face
swBoundaryBossTangency_None
swBoundaryBossTangency_DirectionVector
swBoundaryBossTangency_NormalToProfile
swBoundaryBossTangency_TangencyToFace
swBoundaryBossTangency_CurvatureToFace
Edge
swBoundaryBossTangency_Default
swBoundaryBossTangency_None
swBoundaryBossTangency_DirectionVector
swBoundaryBossTangency_TangencyToFace
swBoundaryBossTangency_CurvatureToFace

## See Also

- `IBoundaryBossFeatureData.GetGuideTangencyType`
- `IBoundaryBossFeatureData.GetTangentApplyToAll`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeTangentFaces`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`