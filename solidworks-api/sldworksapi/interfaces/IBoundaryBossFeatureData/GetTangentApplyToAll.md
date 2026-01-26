---
type: method
interface: IBoundaryBossFeatureData
member: GetTangentApplyToAll
returns: System.Boolean
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
  - IBoundaryBossFeatureData.GetGuideTangencyType
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.MergeTangentFaces
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - gettangentapplytoall
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
---

# IBoundaryBossFeatureData.GetTangentApplyToAll

Gets whether one handle that controls all constraints for the entire profile is displayed for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
System.Boolean GetTangentApplyToAll( 
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

True if one handle that controls all constraints for the entire profile is displayed, false if multiple handles that permit individual segment control are displayed

## Remarks

This method is only available for a single-direction boundary feature.
Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## See Also

- `IBoundaryBossFeatureData.GetGuideTangencyType`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.MergeTangentFaces`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`