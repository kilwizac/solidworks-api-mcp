---
type: method
interface: IModelDoc2
member: FeatureExtruRefSurface2
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
    description: True to flip direction to extrude, false to not
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
    description: For first draft angle to be inward use True, for draft angle outward use false
  -
    name: Ddir2
    type: System.Boolean
    description: For second draft angle to be inward use True, for draft angle outward use false
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
    description: If you chose to offset the first end condition from another face or plane than True would specify offset in direction away from the sketch and false would specify offset from the face or plane in a direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you chose to offset the second end condition from another face or plane than True would specify offset in direction away from the sketch and false would specify offset from the face or plane in a direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: If you choose swEndcondOffsetFromSurface as the termination type for the first end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: If you choose swEndcondOffsetFromSurface as the termination type for the second end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - featureextrurefsurface2
  - imodeldoc2
  - model
  - doc2
  - feature
  - extru
  - ref
  - surface2
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
  - void
---

# IModelDoc2.FeatureExtruRefSurface2

Obsolete. Superseded by IFeatureManager::FeatureExtruRefSurface.

## Signature

```csharp
void FeatureExtruRefSurface2( 
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
)
```
## Parameters

- `Sd` (System.Boolean): True for single-ended, false for double-ended
- `Flip` (System.Boolean): True to flip the direction to cut, false to not
- `Dir` (System.Boolean): True to flip direction to extrude, false to not
- `T1` (System.Int32): Termination type for first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for first end in meters
- `D2` (System.Double): Depth of extrusion for second end in meters
- `Dchk1` (System.Boolean): True allows draft angle in first direction, false does not allow drafting
- `Dchk2` (System.Boolean): True allows draft angle in second direction, false does not allow drafting
- `Ddir1` (System.Boolean): For first draft angle to be inward use True, for draft angle outward use false
- `Ddir2` (System.Boolean): For second draft angle to be inward use True, for draft angle outward use false
- `Dang1` (System.Double): Draft angle for first end
- `Dang2` (System.Double): Draft angle for second end
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane than True would specify offset in direction away from the sketch and false would specify offset from the face or plane in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane than True would specify offset in direction away from the sketch and false would specify offset from the face or plane in a direction toward the sketch
- `TranslateSurface1` (System.Boolean): If you choose swEndcondOffsetFromSurface as the termination type for the first end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): If you choose swEndcondOffsetFromSurface as the termination type for the second end, then True specifies that the end of the extrusion is a translation of the reference surface, false specifies to use a true offset

## Return Value

Unknown.