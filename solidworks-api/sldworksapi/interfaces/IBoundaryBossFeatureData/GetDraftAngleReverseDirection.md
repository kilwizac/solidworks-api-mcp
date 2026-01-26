---
type: method
interface: IBoundaryBossFeatureData
member: GetDraftAngleReverseDirection
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
  - IBoundaryBossFeatureData.GetDraftAngle
  - IBoundaryBossFeatureData.SetDraftAngle
  - IBoundaryBossFeatureData.SetDraftAngleReverseDirection
keywords:
  - getdraftanglereversedirection
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - draft
  - angle
  - reverse
  - direction
  - int32
  - guide
  - index
  - boolean
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.GetDraftAngleReverseDirection

Gets whether the draft angle is flipped for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
System.Boolean GetDraftAngleReverseDirection( 
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

True if the draft angle is flipped, false if not

## Remarks

Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData.GetDraftAngle`
- `IBoundaryBossFeatureData.SetDraftAngle`
- `IBoundaryBossFeatureData.SetDraftAngleReverseDirection`