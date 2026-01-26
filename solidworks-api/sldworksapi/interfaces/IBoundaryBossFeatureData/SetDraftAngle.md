---
type: method
interface: IBoundaryBossFeatureData
member: SetDraftAngle
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
    name: DraftAngle
    type: System.Double
    description: Draft angle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetDraftAngle
  - IBoundaryBossFeatureData.GetDraftAngleReverseDirection
  - IBoundaryBossFeatureData.SetDraftAngleReverseDirection
keywords:
  - setdraftangle
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - draft
  - angle
  - direction
  - int32
  - guide
  - index
  - double
  - void
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.SetDraftAngle

Sets the draft angle for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetDraftAngle( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Double
DraftAngle
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `DraftAngle` (System.Double): Draft angle

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
- `IBoundaryBossFeatureData.SetDraftAngleReverseDirection`