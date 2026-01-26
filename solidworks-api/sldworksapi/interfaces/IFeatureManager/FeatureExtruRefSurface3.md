---
type: method
interface: IFeatureManager
member: FeatureExtruRefSurface3
returns: void
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single-ended, false for double-ended
  -
    name: Dir
    type: System.Boolean
    description: True to reverse the direction of the extrude, false to not
  -
    name: StartCond
    type: System.Int32
    description: Start condition as defined in swStartConditions_e
  -
    name: OffsetVal
    type: System.Double
    description: Offset value
  -
    name: T1
    type: System.Int32
    description: Termination type for first end as defined in swEndConditions_e
  -
    name: T2
    type: System.Int32
    description: Termination type for second end as defined in swEndConditions_e (valid only if Sd = false)
  -
    name: D1
    type: System.Double
    description: Depth of extrusion for first end in meters
  -
    name: D2
    type: System.Double
    description: Depth of extrusion for second end in meters (valid only if Sd = false)
  -
    name: Dchk1
    type: System.Boolean
    description: True allows draft angle in first direction, false does not allow drafting
  -
    name: Dchk2
    type: System.Boolean
    description: True allows draft angle in second direction, false does not allow drafting (valid only if Sd = false)
  -
    name: Ddir1
    type: System.Boolean
    description: True for first draft angle to be outward, false for first draft angle to be inward
  -
    name: Ddir2
    type: System.Boolean
    description: True for second draft angle to be outward, false for second draft angle to be inward (valid only if Sd = false)
  -
    name: Dang1
    type: System.Double
    description: Draft angle for first end
  -
    name: Dang2
    type: System.Double
    description: Draft angle for second end (valid only if Sd = false)
  -
    name: OffsetReverse1
    type: System.Boolean
    description: If you choose to offset the first end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you choose to offset the second end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch (valid only if Sd = false)
  -
    name: TranslateSurface1
    type: System.Boolean
    description: If you specified T1 as swEndConditions_e.swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: If you specified T2 as swEndConditions_e.swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset (valid only if Sd = false)
  -
    name: CapEnd1
    type: System.Boolean
    description: True to cap first end, false to not
  -
    name: CapEnd2
    type: System.Boolean
    description: True to cap second end, false to not (valid only if Sd = false)
  -
    name: DeleteOriginalFace
    type: System.Boolean
    description: True to delete original faces, false to not (valid only if Sd = true)
  -
    name: KnitResult
    type: System.Boolean
    description: True to knit the extrusion result, false to not (valid only if Sd = true and DeleteOriginalFace = true)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - reference
  - surface
  - feature
  - ifeature
  - extruded
  - isurface
  - featureextrurefsurface3
  - ifeaturemanager
  - manager
  - extru
  - ref
  - surface3
  - sd
  - boolean
  - dir
  - start
  - cond
  - int32
  - offset
  - val
  - double
  - t1
  - t2
  - d1
  - d2
  - dchk1
  - dchk2
  - ddir1
  - ddir2
  - dang1
  - dang2
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
  - insert
  - vb
  - net
  - vba
---

# IFeatureManager.FeatureExtruRefSurface3

Inserts an extruded surface.

## Signature

```csharp
void FeatureExtruRefSurface3( 
   System.Boolean
Sd
,
   System.Boolean
Dir
,
   System.Int32
StartCond
,
   System.Double
OffsetVal
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
- `Dir` (System.Boolean): True to reverse the direction of the extrude, false to not
- `StartCond` (System.Int32): Start condition as defined in swStartConditions_e
- `OffsetVal` (System.Double): Offset value
- `T1` (System.Int32): Termination type for first end as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end as defined in swEndConditions_e (valid only if Sd = false)
- `D1` (System.Double): Depth of extrusion for first end in meters
- `D2` (System.Double): Depth of extrusion for second end in meters (valid only if Sd = false)
- `Dchk1` (System.Boolean): True allows draft angle in first direction, false does not allow drafting
- `Dchk2` (System.Boolean): True allows draft angle in second direction, false does not allow drafting (valid only if Sd = false)
- `Ddir1` (System.Boolean): True for first draft angle to be outward, false for first draft angle to be inward
- `Ddir2` (System.Boolean): True for second draft angle to be outward, false for second draft angle to be inward (valid only if Sd = false)
- `Dang1` (System.Double): Draft angle for first end
- `Dang2` (System.Double): Draft angle for second end (valid only if Sd = false)
- `OffsetReverse1` (System.Boolean): If you choose to offset the first end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you choose to offset the second end condition from another face or plane, then true specifies the offset from the face or plane in a direction away from the sketch, and false specifies the offset in a direction toward the sketch (valid only if Sd = false)
- `TranslateSurface1` (System.Boolean): If you specified T1 as swEndConditions_e.swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset
- `TranslateSurface2` (System.Boolean): If you specified T2 as swEndConditions_e.swEndCondOffsetFromSurface, then true specifies that the end of the extrusion is a translation of the reference surface, and false specifies to use a true offset (valid only if Sd = false)
- `CapEnd1` (System.Boolean): True to cap first end, false to not
- `CapEnd2` (System.Boolean): True to cap second end, false to not (valid only if Sd = false)
- `DeleteOriginalFace` (System.Boolean): True to delete original faces, false to not (valid only if Sd = true)
- `KnitResult` (System.Boolean): True to knit the extrusion result, false to not (valid only if Sd = true and DeleteOriginalFace = true)

## Return Value

Unknown.

## Remarks

Before calling this method, select the entities for the extruded surface using
IModelDocExtension::SelectByID2
.
Entity
Mark
Base
2D or 3D sketch
Sketch segments
Single planar face
Multiple co-planar faces
0
0 or 4
0
0 for first planar face and 256 for all other co-planar faces
Direction edge
16
Start condition entity
32
End condition entity
1

## Examples

- Insert Extruded Surface (C#) (Insert_Extruded_Reference_Surface_Example_CSharp.htm)
- Insert Extruded Surface (VB.NET) (Insert_Extruded_Reference_Surface_Example_VBNET.htm)
- Insert Extruded Surface (VBA) (Insert_Extruded_Reference_Surface_Example_VB.htm)

## See Also

- `ISurfExtrudeFeatureData`