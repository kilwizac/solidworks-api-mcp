---
type: method
interface: IFeatureManager
member: FeatureRevolveThin
returns: Feature
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of revolution in radians
  -
    name: ReverseDir
    type: System.Boolean
    description: True reverses the angle direction, false does not
  -
    name: Angle2
    type: System.Double
    description: Angle of revolution in radians
  -
    name: RevType
    type: System.Int32
    description: Type of revolution as defined in swRevolveType_e (see Remarks )
  -
    name: Thickness1
    type: System.Double
    description: Wall thickness (ReverseThinDir = 2 uses (Thickness1)/2 for each direction)
  -
    name: Thickness2
    type: System.Double
    description: Wall thickness; use only ReverseThinDir=2
  -
    name: ReverseThinDir
    type: System.Int32
    description: Type and direction as defined in swThinWallType_e
  -
    name: Merge
    type: System.Boolean
    description: True to merge the results in a multibody part, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSelect
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureRevolve
  - IFeatureManager.FeatureRevolveCut2
  - IFeatureManager.FeatureRevolveThinCut
  - IRevolveFeatureData2
keywords:
  - featurerevolvethin
  - ifeaturemanager
  - feature
  - manager
  - revolve
  - thin
  - angle
  - double
  - reverse
  - dir
  - boolean
  - angle2
  - rev
  - type
  - int32
  - thickness1
  - thickness2
  - merge
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.FeatureRevolveThin

Obsolete. Superseded by IFeatureManager::FeatureRevolve2.

## Signature

```csharp
Feature FeatureRevolveThin( 
   System.Double
Angle
,
   System.Boolean
ReverseDir
,
   System.Double
Angle2
,
   System.Int32
RevType
,
   System.Double
Thickness1
,
   System.Double
Thickness2
,
   System.Int32
ReverseThinDir
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

- `Angle` (System.Double): Angle of revolution in radians
- `ReverseDir` (System.Boolean): True reverses the angle direction, false does not
- `Angle2` (System.Double): Angle of revolution in radians
- `RevType` (System.Int32): Type of revolution as defined in swRevolveType_e (see Remarks )
- `Thickness1` (System.Double): Wall thickness (ReverseThinDir = 2 uses (Thickness1)/2 for each direction)
- `Thickness2` (System.Double): Wall thickness; use only ReverseThinDir=2
- `ReverseThinDir` (System.Int32): Type and direction as defined in swThinWallType_e
- `Merge` (System.Boolean): True to merge the results in a multibody part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

The ReverseDir argument has no effect if a mid-plane revolution is specified.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.

## See Also

- `IFeatureManager.FeatureRevolve`
- `IFeatureManager.FeatureRevolveCut2`
- `IFeatureManager.FeatureRevolveThinCut`
- `IRevolveFeatureData2`