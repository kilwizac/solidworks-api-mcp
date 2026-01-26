---
type: method
interface: IFeatureManager
member: FeatureExtruRefSurface
returns: void
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single-ended, false for double-ended
  -
    name: Flip
    type: System.Boolean
    description: True to flip the direction to cut, false to not
  -
    name: Dir
    type: System.Boolean
    description: True to flip direction of the extrude, false to not
  -
    name: T1
    type: System.Int32
    description: Termination type for first end as defined in swEndConditions_e
  -
    name: T2
    type: System.Int32
    description: Termination type for second end as defined in swEndConditions_e
  -
    name: D1
    type: System.Double
    description: Depth of extrusion for first end in meters
  -
    name: D2
    type: System.Double
    description: Depth of extrusion for second end in meters
  -
    name: Dchk1
    type: System.Boolean
    description: True allows draft angle in first direction, false does not allow drafting
  -
    name: Dchk2
    type: System.Boolean
    description: True allows draft angle in second direction, false does not allow drafting
  -
    name: Ddir1
    type: System.Boolean
    description: For first draft angle to be inward use true, for draft angle outward use false
  -
    name: Ddir2
    type: System.Boolean
    description: For second draft angle to be inward use true, for draft angle outward use false
  -
    name: Dang1
    type: System.Double
    description: Draft angle for first end
  -
    name: Dang2
    type: System.Double
    description: Draft angle for second end
  -
    name: OffsetReverse1
    type: System.Boolean
    description: If you choose to offset the first end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you choose to offset the second end condition from another face or plane, then true specifies the offset from the face or plane in direction away from the sketch, and false specifies the offset in a direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: If you specified T1 as swEndConditions_e .swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: If you specified T2 as swEndConditions_e .swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
  -
    name: CapEnd1
    type: System.Boolean
    description: True to cap first end, false to not
  -
    name: CapEnd2
    type: System.Boolean
    description: True to cap second end, false to not
  -
    name: DeleteOriginalFace
    type: System.Boolean
    description: True to delete original faces, false to not (see Remarks )
  -
    name: KnitResult
    type: System.Boolean
    description: True to knit the extrusion result, false to not (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featureextrurefsurface
  - ifeaturemanager
  - feature
  - manager
  - extru
  - ref
  - surface
  - sd
  - boolean
  - flip
  - dir
  - t1
  - int32
  - t2
  - d1
  - double
  - d2
  - dchk1
  - dchk2
  - ddir1
  - ddir2
  - dang1
  - dang2
  - offset
  - reverse1
  - reverse2
  - translate
  - surface1
  - surface2
  - cap
  - end1
  - end2
  - delete
  - original
  - face
  - knit
  - result
  - void
---

# IFeatureManager.FeatureExtruRefSurface

Obsolete. Superseded by IFeatureManager::FeatureExtruRefSurface2.

## Signature

```csharp
void FeatureExtruRefSurface( 
   System.Boolean
Sd
,
   System.Boolean
Flip
,
   System.Boolean
Dir
,
   System.Int32
T1
,
   System.Int32
T2
,
   System.Double
D1
,
   System.Double
D2
,
   System.Boolean
Dchk1
,
   System.Boolean
Dchk2
,
   System.Boolean
Ddir1
,
   System.Boolean
Ddir2
,
   System.Double
Dang1
,
   System.Double
Dang2
,
   System.Boolean
OffsetReverse1
,
   System.Boolean
OffsetReverse2
,
   System.Boolean
TranslateSurface1
,
   System.Boolean
TranslateSurface2
,
   System.Boolean
CapEnd1
,
   System.Boolean
CapEnd2
,
   System.Boolean
DeleteOriginalFace
,
   System.Boolean
KnitResult
)
```
## Parameters

- `Sd` (System.Boolean): True for single-ended, false for double-ended
- `Flip` (System.Boolean): True to flip the direction to cut, false to not
- `Dir` (System.Boolean): True to flip direction of the extrude, false to not
- `T1` (System.Int32): Termination type for first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for first end in meters
- `D2` (System.Double): Depth of extrusion for second end in meters
- `Dchk1` (System.Boolean): True allows draft angle in first direction, false does not allow drafting
- `Dchk2` (System.Boolean): True allows draft angle in second direction, false does not allow drafting
- `Ddir1` (System.Boolean): For first draft angle to be inward use true, for draft angle outward use false
- `Ddir2` (System.Boolean): For second draft angle to be inward use true, for draft angle outward use false
- `Dang1` (System.Double): Draft angle for first end
- `Dang2` (System.Double): Draft angle for second end
- `OffsetReverse1` (System.Boolean): If you choose to offset the first end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you choose to offset the second end condition from another face or plane, then true specifies the offset from the face or plane in direction away from the sketch, and false specifies the offset in a direction toward the sketch
- `TranslateSurface1` (System.Boolean): If you specified T1 as swEndConditions_e .swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): If you specified T2 as swEndConditions_e .swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
- `CapEnd1` (System.Boolean): True to cap first end, false to not
- `CapEnd2` (System.Boolean): True to cap second end, false to not
- `DeleteOriginalFace` (System.Boolean): True to delete original faces, false to not (see Remarks )
- `KnitResult` (System.Boolean): True to knit the extrusion result, false to not (see Remarks )

## Return Value

Unknown.

## Remarks

Before calling this method, select the entities from which to extrude reference surfaces. Do one of the following:
select a sketch containing one face or multiple co-planar faces
select one face or multiple co-planar faces in the view
DeleteOriginalFace and KnitResult are ignored if the extrusion is in two directions.
KnitResult is ignored if DeleteOriginalFace is false.