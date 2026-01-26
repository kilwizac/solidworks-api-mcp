---
type: method
interface: IBoundaryBossFeatureData
member: GetAlignmentType
returns: System.Int32
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
  - IBoundaryBossFeatureData.SetAlignmentType
keywords:
  - getalignmenttype
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
---

# IBoundaryBossFeatureData.GetAlignmentType

Gets the type of alignment for the specified curve in the specified direction for this boundary feature.

## Signature

```csharp
System.Int32 GetAlignmentType( 
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

Type of alignment as defined in swBoundaryBossAlignment_e

## Remarks

This method is only available for a single-direction boundary feature.
Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## See Also

- `IBoundaryBossFeatureData.SetAlignmentType`