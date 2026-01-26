---
type: method
interface: IFeatureManager
member: FeatureRevolve
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
    description: Type of revolution as defined in swRevolveType_e
  -
    name: Options
    type: System.Int32
    description: Additional control as defined in swRevolveOptions_e
  -
    name: Merge
    type: System.Boolean
    description: True to merge the results in a multibody part, false to not
  -
    name: UseFeatScope
    type: System.Boolean
    description: True if the feature only affects selected bodies, false if the feature affects all bodies
  -
    name: UseAutoSel
    type: System.Boolean
    description: True to automatically select all bodies and have the feature affect those bodies, false to select the bodies or components the feature affects (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureRevolveCut2
  - IFeatureManager.FeatureRevolveThin
  - IFeatureManager.FeatureRevolveThinCut
  - IRevolveFeatureData2
keywords:
  - featurerevolve
  - ifeaturemanager
  - feature
  - manager
  - revolve
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
  - merge
  - use
  - feat
  - scope
  - auto
  - sel
---

# IFeatureManager.FeatureRevolve

Obsolete. Superseded by IFeatureManager::FeatureRevolve2.

## Signature

```csharp
Feature FeatureRevolve( 
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
Merge
,
   System.Boolean
UseFeatScope
,
   System.Boolean
UseAutoSel
)
```
## Parameters

- `Angle` (System.Double): Angle of revolution in radians
- `ReverseDir` (System.Boolean): True reverses the angle direction, false does not
- `Angle2` (System.Double): Angle of revolution in radians
- `RevType` (System.Int32): Type of revolution as defined in swRevolveType_e
- `Options` (System.Int32): Additional control as defined in swRevolveOptions_e
- `Merge` (System.Boolean): True to merge the results in a multibody part, false to not
- `UseFeatScope` (System.Boolean): True if the feature only affects selected bodies, false if the feature affects all bodies
- `UseAutoSel` (System.Boolean): True to automatically select all bodies and have the feature affect those bodies, false to select the bodies or components the feature affects (see Remarks )

## Return Value

Pointer to the IFeature object

## Remarks

To select an axis for a revolve feature, first call
IModelDocExtension::SelectByID2
with Mark set to 4. When UseAutoSel is false, the user must select the bodies  or components that the feature will affect.

## See Also

- `IFeatureManager.FeatureRevolveCut2`
- `IFeatureManager.FeatureRevolveThin`
- `IFeatureManager.FeatureRevolveThinCut`
- `IRevolveFeatureData2`