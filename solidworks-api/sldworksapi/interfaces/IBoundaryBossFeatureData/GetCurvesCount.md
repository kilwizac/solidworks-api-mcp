---
type: method
interface: IBoundaryBossFeatureData
member: GetCurvesCount
returns: System.Int32
parameters:
  -
    name: Direction
    type: System.Int32
    description: Direction as defined in swBoundaryBossDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.D1Curves
  - IBoundaryBossFeatureData.D2Curves
  - IBoundaryBossFeatureData.GetAlignmentType
  - IBoundaryBossFeatureData.GetDirectionVector
  - IBoundaryBossFeatureData.GetDraftAngle
  - IBoundaryBossFeatureData.GetDraftAngleReverseDirection
  - IBoundaryBossFeatureData.GetGuideTangencyType
  - IBoundaryBossFeatureData.GetTangentApplyToAll
  - IBoundaryBossFeatureData.GetTangentDirectionReversed
  - IBoundaryBossFeatureData.GetTangentInfluence
  - IBoundaryBossFeatureData.GetTangentLength
  - IBoundaryBossFeatureData.SetAlignmentType
  - IBoundaryBossFeatureData.SetDirectionVector
  - IBoundaryBossFeatureData.SetDraftAngle
  - IBoundaryBossFeatureData.SetDraftAngleReverseDirection
  - IBoundaryBossFeatureData.SetGuideTangencyType
  - IBoundaryBossFeatureData.SetTangentApplyToAll
  - IBoundaryBossFeatureData.SetTangentDirectionReversed
  - IBoundaryBossFeatureData.SetTangentInfluence
  - IBoundaryBossFeatureData.SetTangentLength
keywords:
  - getcurvescount
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - curves
  - count
  - direction
  - int32
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.GetCurvesCount

Gets the number of curves in the specified direction in this boundary feature.

## Signature

```csharp
System.Int32 GetCurvesCount( 
   System.Int32
Direction
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e

## Return Value

Number of curves

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData.D1Curves`
- `IBoundaryBossFeatureData.D2Curves`
- `IBoundaryBossFeatureData.GetAlignmentType`
- `IBoundaryBossFeatureData.GetDirectionVector`
- `IBoundaryBossFeatureData.GetDraftAngle`
- `IBoundaryBossFeatureData.GetDraftAngleReverseDirection`
- `IBoundaryBossFeatureData.GetGuideTangencyType`
- `IBoundaryBossFeatureData.GetTangentApplyToAll`
- `IBoundaryBossFeatureData.GetTangentDirectionReversed`
- `IBoundaryBossFeatureData.GetTangentInfluence`
- `IBoundaryBossFeatureData.GetTangentLength`
- `IBoundaryBossFeatureData.SetAlignmentType`
- `IBoundaryBossFeatureData.SetDirectionVector`
- `IBoundaryBossFeatureData.SetDraftAngle`
- `IBoundaryBossFeatureData.SetDraftAngleReverseDirection`
- `IBoundaryBossFeatureData.SetGuideTangencyType`
- `IBoundaryBossFeatureData.SetTangentApplyToAll`
- `IBoundaryBossFeatureData.SetTangentDirectionReversed`
- `IBoundaryBossFeatureData.SetTangentInfluence`
- `IBoundaryBossFeatureData.SetTangentLength`