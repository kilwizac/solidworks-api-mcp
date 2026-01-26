---
type: method
interface: IFeatureManager
member: FeatureRevolveCut2
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
  -
    name: AssemblyFeatureScope
    type: System.Boolean
    description: True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
  -
    name: AutoSelectComponents
    type: System.Boolean
    description: True to auto-select all affected components, false to not (use the selected components)
  -
    name: PropagateFeatureToParts
    type: System.Boolean
    description: True to propagate the assembly feature to the components, false to not
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
  - featurerevolvecut2
  - ifeaturemanager
  - feature
  - manager
  - revolve
  - cut2
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
  - assembly
  - components
  - propagate
  - parts
---

# IFeatureManager.FeatureRevolveCut2

Obsolete. Superseded by IFeatureManager::FeatureRevolve2.

## Signature

```csharp
Feature FeatureRevolveCut2( 
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

- `Angle` (System.Double): Angle of revolution in radians
- `ReverseDir` (System.Boolean): True reverses the angle direction, false does not
- `Angle2` (System.Double): Angle of revolution in radians
- `RevType` (System.Int32): Type of revolution as defined in swRevolveType_e (can be either mid-plane or two-direction)
- `Options` (System.Int32): Additional control (see Remarks )
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSelect` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies the feature affects (see Remarks )
- `AssemblyFeatureScope` (System.Boolean): True if the assembly feature only affects selected components in the assembly, false if the assembly feature affects all components in the assembly
- `AutoSelectComponents` (System.Boolean): True to auto-select all affected components, false to not (use the selected components)
- `PropagateFeatureToParts` (System.Boolean): True to propagate the assembly feature to the components, false to not

## Return Value

Feature

## Remarks

The Options argument allows additional control of the feature creation.Supported value is swRevolveOptions_e.
swAutoCloseSketch, which
closes the sketch if it is open.
When UseAutoSelect is false, the user must select the bodies that the feature will affect.
When using cut or cavity features that result in multiple bodies, you cannot select to keep all of the resulting bodies or one or more selected bodies.
For extruded feature cuts, see
IFeatureManager::FeatureCut
.

## See Also

- `IFeatureManager.FeatureRevolve`
- `IFeatureManager.FeatureRevolveThin`
- `IFeatureManager.FeatureRevolveThinCut`
- `IRevolveFeatureData2`