---
type: method
interface: IBoundaryBossFeatureData
member: SetTangentDirectionReversed
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
    name: Flip
    type: System.Boolean
    description: True to flip the direction of adjacent tangent faces, false to not
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
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - settangentdirectionreversed
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - tangent
  - direction
  - reversed
  - int32
  - guide
  - index
  - flip
  - boolean
  - void
---

# IBoundaryBossFeatureData.SetTangentDirectionReversed

Sets whether the direction of adjacent tangent faces is flipped for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetTangentDirectionReversed( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Boolean
Flip
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `Flip` (System.Boolean): True to flip the direction of adjacent tangent faces, false to not

## Return Value

Unknown.

## Remarks

Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## See Also

- `IBoundaryBossFeatureData.GetGuideTangencyType`
- `IBoundaryBossFeatureData.GetTangentApplyToAll`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeTangentFaces`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`