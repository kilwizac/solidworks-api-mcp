---
type: method
interface: IFeatureManager
member: InsertCutBlend
returns: Feature
parameters:
  -
    name: Closed
    type: System.Boolean
    description: True if you want the loft to be closed, false to leave it open (see Remarks )
  -
    name: KeepTangency
    type: System.Boolean
    description: Controls whether the section curves are tangent (see Remarks)
  -
    name: ForceNonRational
    type: System.Boolean
    description: True to force the resulting surface to be non-rational; false to not
  -
    name: TessToleranceFactor
    type: System.Double
    description: A factor to control the number of intermediate sections used for loft with centerline; the default value is 1.0; the greater the variable, the more intermediate sections are created
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type at the start profile (see Remarks)
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type at the end profile (see Remarks)
  -
    name: IsThinBody
    type: System.Boolean
    description: True if this feature is a thin body, false is not
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
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertProtrusionBlend
  - ILoftFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - loft
  - lofts
  - iloftfeaturedata
  - cuts
  - cut
  - insertcutblend
  - ifeaturemanager
  - manager
  - insert
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
  - thin
  - body
  - thickness1
  - thickness2
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.InsertCutBlend

Inserts a lofted cut based on the selected profiles, centerline, and guide curves.

## Signature

```csharp
Feature InsertCutBlend( 
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
UseFeatScope
,
   System.Boolean
UseAutoSelect
)
```
## Parameters

- `Closed` (System.Boolean): True if you want the loft to be closed, false to leave it open (see Remarks )
- `KeepTangency` (System.Boolean): Controls whether the section curves are tangent (see Remarks)
- `ForceNonRational` (System.Boolean): True to force the resulting surface to be non-rational; false to not
- `TessToleranceFactor` (System.Double): A factor to control the number of intermediate sections used for loft with centerline; the default value is 1.0; the greater the variable, the more intermediate sections are created
- `StartMatchingType` (System.Int16): Tangency type at the start profile (see Remarks)
- `EndMatchingType` (System.Int16): Tangency type at the end profile (see Remarks)
- `IsThinBody` (System.Boolean): True if this feature is a thin body, false is not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ThinType` (System.Int16): Thin wall type: 0 = One direction 1 = One direction reverse 2 = Mid-plane 3 = Two direction
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks)

## Return Value

Feature

## Remarks

Selection of guide curves and centerline is optional; however, selection of the profiles must be in an order consistent with the desired direction of the loft.
Use of guide curves is strongly recommended, especially when selection of profiles is done in the FeatureManager design tree.
You can use any number of profiles; however, if you selected only one profile, then any selected guide curves must be closed curves.
If Closed is True and you selected less that three profiles, then any selected guide curves must be closed curves.
If the section curves are tangent, then KeepTangency controls whether the resulting surfaces are also be tangent. Specify True to maintain the tangency as seen in the section curves; false to not. When generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics.
Use
IModelDocExtension::SelectById2
to select the profiles and guide curves. The mark for the profile selections should be 1; the mark for any guide curve selection, if provided, should be a 2; the mark for the centerline selection, if provided, should be a 4; the mark for the start tangency vector selection, if provided, should be a 8; the mark for the start tangency faces selection, if provided, should be a 16 (not available); the mark for the end tangency vector selection, if provided, should be a 32; the mark for the end tangency faces selection, if provided, should be a 64 (not available); linear edge, sketch line, axis, plane and planar faces are qualified for tangency vector sections.
The tangency type arguments can take the following values:
0 - none
1 - tangent to the normal of the profile
2 - tangent to a selected vector
3 - tangency to all the adjacent faces sharing an edge with the start profile
4 - tangent to some of the selected faces sharing an edge with the start profile (not currently available )
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IFeatureManager.InsertProtrusionBlend`
- `ILoftFeatureData`