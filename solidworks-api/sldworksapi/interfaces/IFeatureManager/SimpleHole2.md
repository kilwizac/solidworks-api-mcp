---
type: method
interface: IFeatureManager
member: SimpleHole2
returns: Feature
parameters:
  -
    name: Dia
    type: System.Double
    description: Hole diameter
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
    description: If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
  -
    name: OffsetReverse2
    type: System.Boolean
    description: If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
  -
    name: TranslateSurface1
    type: System.Boolean
    description: True to use an offset relative to the surface or the plane selected, false to use a true offset
  -
    name: TranslateSurface2
    type: System.Boolean
    description: True to use an offset relative to the surface or the plane selected, false to use a true offset
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - simple
  - hole
  - feature
  - ifeature
  - simplehole2
  - ifeaturemanager
  - manager
  - hole2
  - dia
  - double
  - sd
  - boolean
  - flip
  - dir
  - t1
  - int32
  - t2
  - d1
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
  - use
  - feat
  - scope
  - auto
  - select
  - assembly
  - components
  - propagate
  - parts
  - insert
  - sketch
  - text
  - vba
  - vb
  - net
---

# IFeatureManager.SimpleHole2

Inserts a simple hole feature.

## Signature

```csharp
Feature SimpleHole2( 
   System.Double
Dia
,
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
UseFeatScope
,
   System.Boolean
UseAutoSelect
,
   System.Boolean
AssemblyFeatureScope
,
   System.Boolean
AutoSelectComponents
,
   System.Boolean
PropagateFeatureToParts
)
```
## Parameters

- `Dia` (System.Double): Hole diameter
- `Sd` (System.Boolean): True for single-ended, false for double-ended
- `Flip` (System.Boolean): True to flip the direction to cut, false to not
- `Dir` (System.Boolean): True to flip direction to extrude, false to not
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
- `OffsetReverse1` (System.Boolean): If you chose to offset the first end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `OffsetReverse2` (System.Boolean): If you chose to offset the second end condition from another face or plane, then true specifies offset in direction away from the sketch, false specifies offset from the face or plane in a direction toward the sketch
- `TranslateSurface1` (System.Boolean): True to use an offset relative to the surface or the plane selected, false to use a true offset
- `TranslateSurface2` (System.Boolean): True to use an offset relative to the surface or the plane selected, false to use a true offset
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `AssemblyFeatureScope` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
- `AutoSelectComponents` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
- `PropagateFeatureToParts` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly

## Return Value

Feature

## Examples

- Insert Sketch Text and Hole (VBA) (Insert_Sketch_Text_and_Hole_Example_VB.htm)
- Insert Sketch Text and Hole (VB.NET) (Insert_Sketch_Text_and_Hole_Example_VBNET.htm)
- Insert Sketch Text and Hole (C#) (Insert_Sketch_Text_and_Hole_Example_CSharp.htm)

## See Also

- `ISimpleHoleFeatureData2`