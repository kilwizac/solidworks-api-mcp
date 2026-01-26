---
type: method
interface: IBoundaryBossFeatureData
member: GetDraftAngle
returns: System.Double
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
  - IBoundaryBossFeatureData.GetDraftAngleReverseDirection
  - IBoundaryBossFeatureData.SetDraftAngle
  - IBoundaryBossFeatureData.SetDraftAngleReverseDirection
keywords:
  - getdraftangle
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
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.GetDraftAngle

Gets the draft angle for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
System.Double GetDraftAngle( 
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

Draft angle

## Remarks

Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData.GetDraftAngleReverseDirection`
- `IBoundaryBossFeatureData.SetDraftAngle`
- `IBoundaryBossFeatureData.SetDraftAngleReverseDirection`