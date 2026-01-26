---
type: method
interface: IBoundaryBossFeatureData
member: GetDirectionVector
returns: System.Object
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
  - IBoundaryBossFeatureData.SetDirectionVector
keywords:
  - getdirectionvector
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - direction
  - vector
  - int32
  - guide
  - index
  - object
  - insert
  - vb
  - net
  - vba
---

# IBoundaryBossFeatureData.GetDirectionVector

Gets the entity used as the direction vector for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
System.Object GetDirectionVector( 
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

Entity used as the direction vector: linear edge axis face plane

## Remarks

This method is only available if the type of tangency of the direction vector is
swBoundaryBossTangencyType_e
.swBoundaryBossTangency_DirectionVector. Use
IBoundaryBossFeatureData::GetGuideTangencyType
to determine the type of tangency.
Call
IBoundaryBossFeatureData::GetCurvesCount
to get a valid range of values for GuideIndex.
NOTE:
Using two vertices for the direction vector is not currently supported by the SOLIDWORKS API.

## Examples

- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData.SetDirectionVector`