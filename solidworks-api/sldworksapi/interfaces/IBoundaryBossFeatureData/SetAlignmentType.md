---
type: method
interface: IBoundaryBossFeatureData
member: SetAlignmentType
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
    name: AlignmentType
    type: System.Int32
    description: Type of alignment as defined in swBoundaryBossAlignment_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetAlignmentType
keywords:
  - setalignmenttype
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - alignment
  - type
  - direction
  - int32
  - guide
  - index
  - void
---

# IBoundaryBossFeatureData.SetAlignmentType

Sets the type of alignment for the specified curve in the specified direction for this boundary feature.

## Signature

```csharp
void SetAlignmentType( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Int32
AlignmentType
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `AlignmentType` (System.Int32): Type of alignment as defined in swBoundaryBossAlignment_e

## Return Value

Unknown.

## Remarks

This method is only available for a single-direction boundary feature.
You must use the appropriate combination of tangents and alignments.
Type of
tangency
as defined in
swBoundaryBossTangencyType_e
Type of alignment as defined in swBoundaryBossAlignment_e
swBoundaryBossTangency_DirectionVector
- or -
swBoundaryBossTangency_NormalToProfile
swAlignWithNextSection
swAlignWithSectionNormal
swBoundaryBossTangency_TangencyToFace
-or -
swBoundaryBossTangency_CurvatureToFace
swAlignWithNextSection
swAlignWithSectionNormal
swAlignWithIsoParameter
swAlignWithOtherGeometry
Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## See Also

- `IBoundaryBossFeatureData.GetAlignmentType`