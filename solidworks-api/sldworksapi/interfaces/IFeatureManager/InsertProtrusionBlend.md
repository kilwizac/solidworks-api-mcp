---
type: method
interface: IFeatureManager
member: InsertProtrusionBlend
returns: Feature
parameters:
  -
    name: Closed
    type: System.Boolean
    description: True closes the loft, false leaves the loft open; if true and you selected less that three profiles, any selected guide curves must be closed curves
  -
    name: KeepTangency
    type: System.Boolean
    description: True maintains the tangency as seen in the section curves, false does not If the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertCutBlend
  - ILoftFeatureData
keywords:
  - insertprotrusionblend
  - ifeaturemanager
  - feature
  - manager
  - insert
  - protrusion
  - blend
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
  - body
  - thickness1
  - thickness2
  - merge
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.InsertProtrusionBlend

Obsolete. Superseded by IFeatureManager::InsertProtrusionBlend2.

## Signature

```csharp
Feature InsertProtrusionBlend( 
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
)
```
## Parameters

- `Closed` (System.Boolean): True closes the loft, false leaves the loft open; if true and you selected less that three profiles, any selected guide curves must be closed curves
- `KeepTangency` (System.Boolean): True maintains the tangency as seen in the section curves, false does not If the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
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

## Return Value

Pointer to the IFeature object

## Remarks

Selection of guide curves and centerline is optional. However, you must select the profiles in an order consistent with the desired direction of the loft. Because a solid is being created, the section profiles must be closed.
It is best to use guide curves, especially when you select profiles in the FeatureManager design tree.
You can use any number of profiles; however, if you select only one profile, then any selected guide curves must be closed curves.
Use
IModelDocExtension::SelectByID2
to select the profiles and guide curves. Set the mark for:
profile selections to 1
any guide curve selection to 2
centerline selection to 4
start tangency vector selection to 8
start tangency faces selection to 16 (not available)
end tangency vector selection to 32
end tangency faces selection to 64 (not available)
NOTE:
Linear edge, sketch line, axis, plane and planar faces are qualified for tangency vector sections.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.

## See Also

- `IFeatureManager.InsertCutBlend`
- `ILoftFeatureData`