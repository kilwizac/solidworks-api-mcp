---
type: method
interface: IFeatureManager
member: FeatureRevolveCut
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
    description: Type of revolution as defined in swRevolveType_e (can be either mid-plane or two-direction)
  -
    name: Options
    type: System.Int32
    description: Additional control (see Remarks )
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
  - IFeatureManager.FeatureRevolveThin
  - IFeatureManager.FeatureRevolveThinCut
  - IRevolveFeatureData2
keywords:
  - featurerevolvecut
  - ifeaturemanager
  - feature
  - manager
  - revolve
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
  - options
  - use
  - feat
  - scope
  - auto
  - select
  - create
  - features
  - vba
---

# IFeatureManager.FeatureRevolveCut

Obsolete. Superseded by IFeatureManager::FeatureRevolveCut2.

## Signature

```csharp
Feature FeatureRevolveCut( 
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
   System.Int32
Options
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
- `RevType` (System.Int32): Type of revolution as defined in swRevolveType_e (can be either mid-plane or two-direction)
- `Options` (System.Int32): Additional control (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

The Options argument allows additional control of the feature creation. Supported value is
swAutoCloseSketch
close the sketch if it is open.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.
For extruded feature cuts, see
IFeatureManager::FeatureCut
.

## Examples

- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)

## See Also

- `IFeatureManager.FeatureRevolve`
- `IFeatureManager.FeatureRevolveThin`
- `IFeatureManager.FeatureRevolveThinCut`
- `IRevolveFeatureData2`