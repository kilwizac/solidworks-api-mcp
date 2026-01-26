---
type: method
interface: IBoundaryBossFeatureData
member: SetDirectionVector
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
    name: DirectionVector
    type: System.Object
    description: Entity to use as the direction vector: linear edge axis face plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.GetDirectionVector
keywords:
  - setdirectionvector
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
  - void
---

# IBoundaryBossFeatureData.SetDirectionVector

Sets the entity to use as the direction vector for the specified curve in the specified direction in this boundary feature.

## Signature

```csharp
void SetDirectionVector( 
   System.Int32
Direction
,
   System.Int32
GuideIndex
,
   System.Object
DirectionVector
)
```
## Parameters

- `Direction` (System.Int32): Direction as defined in swBoundaryBossDirection_e
- `GuideIndex` (System.Int32): Index of the curve (see Remarks )
- `DirectionVector` (System.Object): Entity to use as the direction vector: linear edge axis face plane

## Return Value

Unknown.

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

## See Also

- `IBoundaryBossFeatureData.GetDirectionVector`