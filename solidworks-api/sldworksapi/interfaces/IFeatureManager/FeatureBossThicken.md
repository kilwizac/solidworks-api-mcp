---
type: method
interface: IFeatureManager
member: FeatureBossThicken
returns: Feature
parameters:
  -
    name: Thickness
    type: System.Double
    description: Wall thickness
  -
    name: Direction
    type: System.Int32
    description: Direction as defined in swThickenThicknessType_e
  -
    name: FaceIndex
    type: System.Int32
    description: Not used
  -
    name: FillVolume
    type: System.Boolean
    description: True if you want to make a solid from the knitted surface, false if not (see Remarks )
  -
    name: Merge
    type: System.Boolean
    description: True if you want to merge the results in a multibody part, false if not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureCutThicken
  - IThickenFeatureData
keywords:
  - boss
  - thicken
  - feature
  - see
  - also
  - ifeature
  - featurebossthicken
  - ifeaturemanager
  - manager
  - thickness
  - double
  - direction
  - int32
  - face
  - index
  - fill
  - volume
  - boolean
  - merge
  - use
  - feat
  - scope
  - auto
  - select
  - create
  - vba
  - holes
  - part
  - vb
  - net
  - surface
  - generate
---

# IFeatureManager.FeatureBossThicken

Thickens the selected reference surface, and then generates a boss.

## Signature

```csharp
Feature FeatureBossThicken( 
   System.Double
Thickness
,
   System.Int32
Direction
,
   System.Int32
FaceIndex
,
   System.Boolean
FillVolume
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

- `Thickness` (System.Double): Wall thickness
- `Direction` (System.Int32): Direction as defined in swThickenThicknessType_e
- `FaceIndex` (System.Int32): Not used
- `FillVolume` (System.Boolean): True if you want to make a solid from the knitted surface, false if not (see Remarks )
- `Merge` (System.Boolean): True if you want to merge the results in a multibody part, false if not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

This method generates a boss feature by thickening a selected reference surface.  The surface must be selected with a mark of 1. See
IModelDocExtension::SelectByID2
for details.
If FillVolume is true, other arguments are ignored. A closed surface is required when FillVolume is true.
If UseAutoSelect is false, the user must select the bodies that the feature will affect.

## Examples

- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)
- Thicken Surface and Generate Boss (VBA) (Thicken_Surface_and_Generate_Boss_Example_VB.htm)
- Thicken Surface and Generate Boss (VB.NET) (Thicken_Surface_and_Generate_Boss_Example_VBNET.htm)
- Thicken Surface and Generate Boss (C#) (Thicken_Surface_and_Generate_Boss_Example_CSharp.htm)

## See Also

- `IFeatureManager.FeatureCutThicken`
- `IThickenFeatureData`