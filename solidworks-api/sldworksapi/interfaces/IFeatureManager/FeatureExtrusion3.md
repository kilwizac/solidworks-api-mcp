---
type: method
interface: IFeatureManager
member: FeatureExtrusion3
returns: Feature
parameters:
  -
    name: Sd
    type: System.Boolean
    description: True for single ended, false for double ended
  -
    name: Flip
    type: System.Boolean
    description: True to flip the side to cut
  -
    name: Dir
    type: System.Boolean
    description: True to flip the direction of extrusion
  -
    name: T1
    type: System.Int32
    description: Termination type for first end of the extrusion as defined in swEndConditions_e
  -
    name: T2
    type: System.Int32
    description: Termination type for second end of the extrusion as defined in swEndConditions_e
  -
    name: D1
    type: System.Double
    description: Depth of extrusion for first end in meters; offset, if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: D2
    type: System.Double
    description: Depth of extrusion for second end in meters; offset, if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: Dchk1
    type: System.Boolean
    description: True to allow drafting in the first direction, false to not
  -
    name: Dchk2
    type: System.Boolean
    description: True to allow drafting in the second direction, false to not
  -
    name: Ddir1
    type: System.Boolean
    description: True for first draft angle to be inward, false to be outward; valid only if Dchk1 is true
  -
    name: Ddir2
    type: System.Boolean
    description: True for second draft angle to be inward, false to be outward; valid only if Dchk2 is true
  -
    name: Dang1
    type: System.Double
    description: Draft angle for first end; valid only if Dchk1 is true
  -
    name: Dang2
    type: System.Double
    description: Draft angle for second end; valid only if Dchk2 is true
  -
    name: OffsetReverse1
    type: System.Boolean
    description: True to offset the first end from another face or plane in a direction away from the sketch, false to offset in a direction toward the sketch; valid only if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: OffsetReverse2
    type: System.Boolean
    description: True to offset the second end from another face or plane in a direction away from the sketch, false to offset in a direction toward the sketch; valid only if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: TranslateSurface1
    type: System.Boolean
    description: True if the first end of the extrusion is a translation of the reference surface, false if it has a true offset; valid only if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: TranslateSurface2
    type: System.Boolean
    description: True if the second end of the extrusion is a translation of the reference surface, false if it has a true offset; valid only if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
  -
    name: Merge
    type: System.Boolean
    description: True to merge the results in a multibody part, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies (see Remarks )
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies that the feature affects (see Remarks )
  -
    name: T0
    type: System.Int32
    description: Start condition as defined in swStartConditions_e
  -
    name: StartOffset
    type: System.Double
    description: Distance from the sketch plane to start the extrude; valid only if T0 is set to swStartConditions_e .swStartOffset
  -
    name: FlipStartOffset
    type: System.Boolean
    description: True to flip the direction of the start offset, false to not; valid only if T0 is set to swStartConditions_e .swStartOffset
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2
  - IFeatureManager.FeatureCut3
  - IFeatureManager.FeatureExtrusionThin2
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - boss
  - base
  - feature
  - ifeature
  - featureextrusion3
  - ifeaturemanager
  - manager
  - extrusion3
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
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - t0
  - start
  - create
  - extrusion
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureExtrusion3

Creates an extruded feature.

## Signature

```csharp
Feature FeatureExtrusion3( 
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
Merge
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSelect
,
   System.Int32
T0
,
   System.Double
StartOffset
,
   System.Boolean
FlipStartOffset
)
```
## Parameters

- `Sd` (System.Boolean): True for single ended, false for double ended
- `Flip` (System.Boolean): True to flip the side to cut
- `Dir` (System.Boolean): True to flip the direction of extrusion
- `T1` (System.Int32): Termination type for first end of the extrusion as defined in swEndConditions_e
- `T2` (System.Int32): Termination type for second end of the extrusion as defined in swEndConditions_e
- `D1` (System.Double): Depth of extrusion for first end in meters; offset, if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `D2` (System.Double): Depth of extrusion for second end in meters; offset, if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `Dchk1` (System.Boolean): True to allow drafting in the first direction, false to not
- `Dchk2` (System.Boolean): True to allow drafting in the second direction, false to not
- `Ddir1` (System.Boolean): True for first draft angle to be inward, false to be outward; valid only if Dchk1 is true
- `Ddir2` (System.Boolean): True for second draft angle to be inward, false to be outward; valid only if Dchk2 is true
- `Dang1` (System.Double): Draft angle for first end; valid only if Dchk1 is true
- `Dang2` (System.Double): Draft angle for second end; valid only if Dchk2 is true
- `OffsetReverse1` (System.Boolean): True to offset the first end from another face or plane in a direction away from the sketch, false to offset in a direction toward the sketch; valid only if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `OffsetReverse2` (System.Boolean): True to offset the second end from another face or plane in a direction away from the sketch, false to offset in a direction toward the sketch; valid only if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `TranslateSurface1` (System.Boolean): True if the first end of the extrusion is a translation of the reference surface, false if it has a true offset; valid only if T1 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `TranslateSurface2` (System.Boolean): True if the second end of the extrusion is a translation of the reference surface, false if it has a true offset; valid only if T2 is set to swEndConditions_e .swEndCondOffsetFromSurface
- `Merge` (System.Boolean): True to merge the results in a multibody part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies (see Remarks )
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies that the feature affects (see Remarks )
- `T0` (System.Int32): Start condition as defined in swStartConditions_e
- `StartOffset` (System.Double): Distance from the sketch plane to start the extrude; valid only if T0 is set to swStartConditions_e .swStartOffset
- `FlipStartOffset` (System.Boolean): True to flip the direction of the start offset, false to not; valid only if T0 is set to swStartConditions_e .swStartOffset

## Return Value

IFeature

## Remarks

The difference between this method and the now obsolete IFeatureManager::FeatureExtrusion2 is that this method supports the selection of surface, face, and plane references for start and end conditions.
Before calling this method to extrude a 3D sketch:
Call
IModelDocExtension::SelectByID2
to select...
With selection mark...
3D sketch
0
Extrusion direction edge
16
Start condition reference entity
32
End condition reference entity
1
The default direction for cut operations is opposite the sketch normal. The default direction for boss operations is along the sketch normal. Setting the Dir argument to True reverses the default direction. For double-ended extrusions, Direction 2 is always opposite to Direction 1.
The default sketch normal is the same as the face or plane normal where the sketch was placed. To determine this normal vector, see
IFace2::Normal
and
IRefPlane::Transform
, respectively.
When UseAutoSelect is false, the user must select the bodies that the feature affects. Use a selection mark of 8 for each selected body.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## Examples

- Create Extrusion Feature (VBA) (Insert_Feature_Extrusion_Example_VB.htm)
- Create Extrusion Feature (VB.NET) (Insert_Feature_Extrusion_Example_VBNET.htm)
- Create Extrusion Feature (C#) (Insert_Feature_Extrusion_Example_CSharp.htm)

## See Also

- `IExtrudeFeatureData2`
- `IFeatureManager.FeatureCut3`
- `IFeatureManager.FeatureExtrusionThin2`