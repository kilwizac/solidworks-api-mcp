---
type: method
interface: IFeatureManager
member: InsertNetBlend
returns: Feature
parameters:
  -
    name: Type
    type: System.Int16
    description: 0 = Base 1 = Boss 2 = Surface 3 = Cut
  -
    name: NCurvesDir1
    type: System.Int16
    description: Number of curves in Direction 1
  -
    name: NCurvesDir2
    type: System.Int16
    description: Number of curves in Direction 2
  -
    name: HasCenterline
    type: System.Boolean
    description: True if a centerline exists, false if not
  -
    name: TessTolFactor
    type: System.Double
    description: Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the value, the more intermediate sections created
  -
    name: WantsSolid
    type: System.Boolean
    description: True to create a solid body, false to create a surface body; only valid when Type = 0, 1, or 3
  -
    name: MergeBody
    type: System.Boolean
    description: True merges the results in a multibody part, false does not
  -
    name: FeatureScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: AutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
  -
    name: Thin
    type: System.Boolean
    description: True if this feature is a thin body, false if not
  -
    name: Thickness1
    type: System.Double
    description: Thickness value for the first direction
  -
    name: Thickness2
    type: System.Double
    description: Thickness value for the second direction
  -
    name: ReverseThickness
    type: System.Boolean
    description: True to reverse the thickness, false to not
  -
    name: ThinSolidType
    type: System.Int16
    description: Thin wall type as defined in swThinWallType_e
  -
    name: UseSharedThickness
    type: System.Boolean
    description: True to use shared thickness, false to not
  -
    name: CapEnds
    type: System.Boolean
    description: True to cap the ends, false to not
  -
    name: EndThickness
    type: System.Double
    description: End cap thickness
  -
    name: AutoFillet
    type: System.Boolean
    description: True to fillet the corners automatically, false to not
  -
    name: FilletRadius
    type: System.Double
    description: Fillet radius when AutoFillet is true
  -
    name: ForceNonRational
    type: System.Boolean
    description: True to force the resulting surface to be non-rational, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData
  - IFeatureManager.SetNetBlendCurveData
  - IFeatureManager.SetNetBlendDirectionData
keywords:
  - insertnetblend
  - ifeaturemanager
  - feature
  - manager
  - insert
  - net
  - blend
  - type
  - int16
  - curves
  - dir1
  - dir2
  - has
  - centerline
  - boolean
  - tess
  - tol
  - factor
  - double
  - wants
  - solid
  - merge
  - body
  - scope
  - auto
  - select
  - thin
  - thickness1
  - thickness2
  - reverse
  - thickness
  - use
  - shared
  - cap
  - ends
  - end
  - fillet
  - radius
  - force
  - non
  - rational
  - boundary
  - surface
  - vba
  - vb
---

# IFeatureManager.InsertNetBlend

Obsolete. Superseded by IFeatureManager::InsertNetBlend2.

## Signature

```csharp
Feature InsertNetBlend( 
   System.Int16
Type
,
   System.Int16
NCurvesDir1
,
   System.Int16
NCurvesDir2
,
   System.Boolean
HasCenterline
,
   System.Double
TessTolFactor
,
   System.Boolean
WantsSolid
,
   System.Boolean
MergeBody
,
   System.Boolean
FeatureScope
,
   System.Boolean
AutoSelect
,
   System.Boolean
Thin
,
   System.Double
Thickness1
,
   System.Double
Thickness2
,
   System.Boolean
ReverseThickness
,
   System.Int16
ThinSolidType
,
   System.Boolean
UseSharedThickness
,
   System.Boolean
CapEnds
,
   System.Double
EndThickness
,
   System.Boolean
AutoFillet
,
   System.Double
FilletRadius
,
   System.Boolean
ForceNonRational
)
```
## Parameters

- `Type` (System.Int16): 0 = Base 1 = Boss 2 = Surface 3 = Cut
- `NCurvesDir1` (System.Int16): Number of curves in Direction 1
- `NCurvesDir2` (System.Int16): Number of curves in Direction 2
- `HasCenterline` (System.Boolean): True if a centerline exists, false if not
- `TessTolFactor` (System.Double): Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the value, the more intermediate sections created
- `WantsSolid` (System.Boolean): True to create a solid body, false to create a surface body; only valid when Type = 0, 1, or 3
- `MergeBody` (System.Boolean): True merges the results in a multibody part, false does not
- `FeatureScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `AutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects
- `Thin` (System.Boolean): True if this feature is a thin body, false if not
- `Thickness1` (System.Double): Thickness value for the first direction
- `Thickness2` (System.Double): Thickness value for the second direction
- `ReverseThickness` (System.Boolean): True to reverse the thickness, false to not
- `ThinSolidType` (System.Int16): Thin wall type as defined in swThinWallType_e
- `UseSharedThickness` (System.Boolean): True to use shared thickness, false to not
- `CapEnds` (System.Boolean): True to cap the ends, false to not
- `EndThickness` (System.Double): End cap thickness
- `AutoFillet` (System.Boolean): True to fillet the corners automatically, false to not
- `FilletRadius` (System.Double): Fillet radius when AutoFillet is true
- `ForceNonRational` (System.Boolean): True to force the resulting surface to be non-rational, false to not

## Return Value

Feature

## Remarks

Boundary feature
Use
IModelDocExtension::SelectByID2
to select the entities for a boundary feature or boundary surface feature. The following table contains valid selection marks for this method and these features.
Feature
Selection marks
Boundary
Sketch curves:
Direction 1: 8193, 16385, 24577
Direction 2: 8194, 16386, 24578
Faces:
Direction 1: 8193, 16385, 24577
Direction 2: 8194, 16386, 24578
Other sketch entities (3D sketch (Unknown/SELOBJGROUP):
Direction 1: 12289, 24577
Direction 2: 16386, 28674
Boundary surface
Sketch curves:
Direction 1: 1
Direction 2: 2

## Examples

- Insert Boundary Surface Feature (VBA) (Insert_Boundary_Surface_Feature_Example_VB.htm)
- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IBoundaryBossFeatureData`
- `IFeatureManager.SetNetBlendCurveData`
- `IFeatureManager.SetNetBlendDirectionData`