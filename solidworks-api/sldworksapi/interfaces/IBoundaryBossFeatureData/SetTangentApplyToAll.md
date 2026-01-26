---
type: method
interface: IBoundaryBossFeatureData
member: SetTangentApplyToAll
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
    name: Apply
    type: System.Boolean
    description: True to display one handle that controls all constraints for the entire profile, false to display multiple handles that permit individual segment control
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
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - settangentapplytoall
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - tangent
  - apply
  - all
  - direction
  - int32
  - guide
  - index
  - boolean
  - void
---

# IBoundaryBossFeatureData.SetTangentApplyToAll

Sets whether to display one handle that controls all constraints for the entire profile for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetTangentApplyToAll( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Boolean
Apply
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `Apply` (System.Boolean): True to display one handle that controls all constraints for the entire profile, false to display multiple handles that permit individual segment control

## Return Value

Unknown.

## Remarks

This method is only available for a single-direction boundary feature.
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
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`