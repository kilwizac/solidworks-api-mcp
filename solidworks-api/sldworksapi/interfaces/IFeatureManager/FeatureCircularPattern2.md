---
type: method
interface: IFeatureManager
member: FeatureCircularPattern2
returns: Feature
parameters:
  -
    name: Num
    type: System.Int32
    description: Number of instances of the circular pattern to insert, including the original
  -
    name: Spacing
    type: System.Double
    description: Spacing between each instance of the circular pattern in radians
  -
    name: FlipDir
    type: System.Boolean
    description: True to flip the direction of the circular pattern, false to not
  -
    name: DName
    type: System.String
    description: Name of the angular dimension defining the direction of the pattern
  -
    name: GeometryPattern
    type: System.Boolean
    description: True to use geometry pattern, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData
keywords:
  - featurecircularpattern2
  - ifeaturemanager
  - feature
  - manager
  - circular
  - pattern2
  - num
  - int32
  - spacing
  - double
  - flip
  - dir
  - boolean
  - name
  - string
  - geometry
  - pattern
---

# IFeatureManager.FeatureCircularPattern2

Obsolete. Superseded by IFeatureManager::FeatureCircularPattern3.

## Signature

```csharp
Feature FeatureCircularPattern2( 
   System.Int32
Num
,
   System.Double
Spacing
,
   System.Boolean
FlipDir
,
   System.String
DName
,
   System.Boolean
GeometryPattern
)
```
## Parameters

- `Num` (System.Int32): Number of instances of the circular pattern to insert, including the original
- `Spacing` (System.Double): Spacing between each instance of the circular pattern in radians
- `FlipDir` (System.Boolean): True to flip the direction of the circular pattern, false to not
- `DName` (System.String): Name of the angular dimension defining the direction of the pattern
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not

## Return Value

Pointer to the IFeature object

## Remarks

This method requires ordered selection of the features and components.
Features and axis: Use
IModelDocExtension::SelectByID2
with a Mark of 4 for the features to pattern and a Mark of 1 for the axis. You can also use
IFeature::Select2
to select the features and the axis.
Components and axis: Use IModelDocExtension::SelectByID2 with a Mark of 1 for the components to pattern and a Mark of 2 for the axis.
You must select the features or components before selecting the axis.

## See Also

- `ICircularPatternFeatureData`