---
type: method
interface: IFeatureManager
member: InsertProtrusionBlend2
returns: Feature
parameters:
  -
    name: Closed
    type: System.Boolean
    description: True closes the loft, false leaves the loft open; if true and less than three profiles are selected, then any selected guide curves must be closed curves
  -
    name: KeepTangency
    type: System.Boolean
    description: True maintains the tangency as seen in the section curves, false does not; if the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
  -
    name: ForceNonRational
    type: System.Boolean
    description: True obtains smoother surfaces, false does not
  -
    name: TessToleranceFactor
    type: System.Double
    description: Factor that controls the number of intermediate sections used for loft with centerline; the default value is 1.0; the greater the value, the more intermediate sections are created
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type at the start profile: 0 = none 1 = tangent to the normal of the profile 2 = tangent to a selected vector 3 = tangency to all the adjacent faces sharing an edge with the start profile 4 = tangent to some of the selected faces sharing an edge with the start profile (not available)
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type at the end profile: 0 = none 1 = tangent to the normal of the profile 2 = tangent to a selected vector 3 = tangency to all the adjacent faces sharing an edge with the start profile 4 = tangent to some of the selected faces sharing an edge with the start profile (not available)
  -
    name: StartTangentLength
    type: System.Double
    description: Start tangent length
  -
    name: EndTangentLength
    type: System.Double
    description: End tangent length
  -
    name: StartTangentDir
    type: System.Boolean
    description: True is one direction, false is the opposite
  -
    name: EndTangentDir
    type: System.Boolean
    description: True is one direction, false is the opposite
  -
    name: IsThinBody
    type: System.Boolean
    description: True if this feature is a thin body, false if it is not
  -
    name: Thickness1
    type: System.Double
    description: Thickness value for the first direction
  -
    name: Thickness2
    type: System.Double
    description: Thickness value for the second direction
  -
    name: ThinType
    type: System.Int16
    description: Thin wall type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
  -
    name: Merge
    type: System.Boolean
    description: True merges the results in a multibody part, false does not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
  -
    name: GuideCurveInfluence
    type: System.Int32
    description: Guide curves influence as defined in swGuideCurveInfluence_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertCutBlend
  - ILoftFeatureData
keywords:
  - lofts
  - see
  - also
  - iloftfeaturedata
  - body
  - boss
  - feature
  - ifeature
  - loft
  - insertprotrusionblend2
  - ifeaturemanager
  - manager
  - insert
  - protrusion
  - blend2
  - closed
  - boolean
  - keep
  - tangency
  - force
  - non
  - rational
  - tess
  - tolerance
  - factor
  - double
  - start
  - matching
  - type
  - int16
  - end
  - tangent
  - length
  - dir
  - thin
  - thickness1
  - thickness2
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - guide
  - curve
  - influence
  - int32
  - blend
  - vba
  - vb
  - net
  - fill
  - surface
  - multiple
  - splines
  - curves
---

# IFeatureManager.InsertProtrusionBlend2

Creates a lofted body or boss from the selected profiles, centerline, and guide curves.

## Signature

```csharp
Feature InsertProtrusionBlend2( 
   System.Boolean
Closed
,
   System.Boolean
KeepTangency
,
   System.Boolean
ForceNonRational
,
   System.Double
TessToleranceFactor
,
   System.Int16
StartMatchingType
,
   System.Int16
EndMatchingType
,
   System.Double
StartTangentLength
,
   System.Double
EndTangentLength
,
   System.Boolean
StartTangentDir
,
   System.Boolean
EndTangentDir
,
   System.Boolean
IsThinBody
,
   System.Double
Thickness1
,
   System.Double
Thickness2
,
   System.Int16
ThinType
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
GuideCurveInfluence
)
```
## Parameters

- `Closed` (System.Boolean): True closes the loft, false leaves the loft open; if true and less than three profiles are selected, then any selected guide curves must be closed curves
- `KeepTangency` (System.Boolean): True maintains the tangency as seen in the section curves, false does not; if the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
- `ForceNonRational` (System.Boolean): True obtains smoother surfaces, false does not
- `TessToleranceFactor` (System.Double): Factor that controls the number of intermediate sections used for loft with centerline; the default value is 1.0; the greater the value, the more intermediate sections are created
- `StartMatchingType` (System.Int16): Tangency type at the start profile: 0 = none 1 = tangent to the normal of the profile 2 = tangent to a selected vector 3 = tangency to all the adjacent faces sharing an edge with the start profile 4 = tangent to some of the selected faces sharing an edge with the start profile (not available)
- `EndMatchingType` (System.Int16): Tangency type at the end profile: 0 = none 1 = tangent to the normal of the profile 2 = tangent to a selected vector 3 = tangency to all the adjacent faces sharing an edge with the start profile 4 = tangent to some of the selected faces sharing an edge with the start profile (not available)
- `StartTangentLength` (System.Double): Start tangent length
- `EndTangentLength` (System.Double): End tangent length
- `StartTangentDir` (System.Boolean): True is one direction, false is the opposite
- `EndTangentDir` (System.Boolean): True is one direction, false is the opposite
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false if it is not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
- `Merge` (System.Boolean): True merges the results in a multibody part, false does not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
- `GuideCurveInfluence` (System.Int32): Guide curves influence as defined in swGuideCurveInfluence_e

## Return Value

IFeature

## Remarks

Selection of guide curves and centerline is optional. However, you must select the profiles in an order consistent with the desired direction of the loft. Because a solid is being created, the section profiles must be closed.
It is best to use guide curves, especially when you select profiles in the FeatureManager design tree.
You can use any number of profiles; however, if you select only one profile, then any selected guide curves must be closed curves.
Use
IModelDocExtension::SelectByID2
to select the profiles and guide curves. Set the mark for:
1 = profile selections
2 = guide curve selections
4 = centerline selection
8 = start tangency vector selection
16 = start tangency faces selection (not available)
32 = end tangency vector selection
64 = end tangency faces selection (not available)
NOTE:
Linear edge, sketch line, axis, plane and planar faces are qualified for tangency vector sections.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.

## Examples

- Insert Protrusion Blend (VBA) (Insert_Protrusion_Blend_Example_VB.htm)
- Insert Protrusion Blend (VB.NET) (Insert_Protrusion_Blend_Example_VBNET.htm)
- Insert Protrusion Blend (C#) (Insert_Protrusion_Blend_Example_CSharp.htm)
- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)
- Select Multiple Splines for Loft Guide Curves (C#) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_CSharp.htm)
- Select Multiple Splines for Loft Guide Curves (VB.NET) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_VBNET.htm)
- Select Multiple Splines for Loft Guide Curves (VBA) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_VB.htm)

## See Also

- `IFeatureManager.InsertCutBlend`
- `ILoftFeatureData`