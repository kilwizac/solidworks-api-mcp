---
type: method
interface: IFeatureManager
member: FeatureCircularPattern3
returns: Feature
parameters:
  -
    name: Number
    type: System.Int32
    description: Number of instances of the circular pattern to insert, including the original instance
  -
    name: Spacing
    type: System.Double
    description: Spacing between each instance of the circular pattern or total angle if EqualSpacing is true (in radians)
  -
    name: FlipDirection
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
  -
    name: EqualSpacing
    type: System.Boolean
    description: True to use equal spacing, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData
keywords:
  - featurecircularpattern3
  - ifeaturemanager
  - feature
  - manager
  - circular
  - pattern3
  - number
  - int32
  - spacing
  - double
  - flip
  - direction
  - boolean
  - name
  - string
  - geometry
  - pattern
  - equal
---

# IFeatureManager.FeatureCircularPattern3

Obsolete. Superseded by IFeatureManager::FeatureCircularPattern4.

## Signature

```csharp
Feature FeatureCircularPattern3( 
   System.Int32
Number
,
   System.Double
Spacing
,
   System.Boolean
FlipDirection
,
   System.String
DName
,
   System.Boolean
GeometryPattern
,
   System.Boolean
EqualSpacing
)
```
## Parameters

- `Number` (System.Int32): Number of instances of the circular pattern to insert, including the original instance
- `Spacing` (System.Double): Spacing between each instance of the circular pattern or total angle if EqualSpacing is true (in radians)
- `FlipDirection` (System.Boolean): True to flip the direction of the circular pattern, false to not
- `DName` (System.String): Name of the angular dimension defining the direction of the pattern
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not
- `EqualSpacing` (System.Boolean): True to use equal spacing, false to not

## Return Value

Circular pattern feature

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