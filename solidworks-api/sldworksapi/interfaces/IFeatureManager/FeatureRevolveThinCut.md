---
type: method
interface: IFeatureManager
member: FeatureRevolveThinCut
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
    description: Wall thickness1 (ReverseThinDir = 2 uses (thickness1)/2 for each direction)
  -
    name: Thickness2
    type: System.Double
    description: Wall thickness 2 (only used when reverseThinDir= 3)
  -
    name: ReverseThinDir
    type: System.Int32
    description: Type and direction as defined in swThinWallType_e
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
  - IRevolveFeatureData2
keywords:
  - feature
  - see
  - also
  - ifeature
  - revolve
  - revolves
  - irevolvefeaturedata2
  - cuts
  - features
  - featurerevolvethincut
  - ifeaturemanager
  - manager
  - thin
  - cut
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
  - use
  - feat
  - scope
  - auto
  - select
---

# IFeatureManager.FeatureRevolveThinCut

Obsolete. Superseded by IFeatureManager::FeatureRevolve2.

## Signature

```csharp
Feature FeatureRevolveThinCut( 
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
- `Thickness1` (System.Double): Wall thickness1 (ReverseThinDir = 2 uses (thickness1)/2 for each direction)
- `Thickness2` (System.Double): Wall thickness 2 (only used when reverseThinDir= 3)
- `ReverseThinDir` (System.Int32): Type and direction as defined in swThinWallType_e
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

A constant thickness is given to the profile when revolving.
The ReverseDir argument has no effect if a mid-plane revolution is specified.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.

## See Also

- `IFeatureManager.FeatureRevolve`
- `IFeatureManager.FeatureRevolveCut2`
- `IRevolveFeatureData2`