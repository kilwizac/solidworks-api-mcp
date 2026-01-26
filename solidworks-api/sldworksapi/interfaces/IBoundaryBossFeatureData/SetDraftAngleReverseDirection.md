---
type: method
interface: IBoundaryBossFeatureData
member: SetDraftAngleReverseDirection
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
    name: IsFlipped
    type: System.Boolean
    description: True if the draft angle is flipped, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetDraftAngle
  - IBoundaryBossFeatureData.GetDraftAngleReverseDirection
  - IBoundaryBossFeatureData.SetDraftAngle
keywords:
  - setdraftanglereversedirection
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
  - flipped
  - boolean
  - void
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.SetDraftAngleReverseDirection

Sets whether the draft angle is flipped for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetDraftAngleReverseDirection( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Boolean
IsFlipped
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `IsFlipped` (System.Boolean): True if the draft angle is flipped, false if not

## Return Value

Unknown.

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
- `IBoundaryBossFeatureData.GetDraftAngleReverseDirection`
- `IBoundaryBossFeatureData.SetDraftAngle`