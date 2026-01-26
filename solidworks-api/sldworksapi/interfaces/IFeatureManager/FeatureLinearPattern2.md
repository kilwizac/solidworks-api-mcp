---
type: method
interface: IFeatureManager
member: FeatureLinearPattern2
returns: Feature
parameters:
  -
    name: Num1
    type: System.Int32
    description: Number of instances of the linear pattern in Direction 1, including the original
  -
    name: Spacing1
    type: System.Double
    description: Spacing between each instance of the linear pattern in Direction 1 in meters
  -
    name: Num2
    type: System.Int32
    description: Number of instances of the linear pattern in Direction 2, including the original
  -
    name: Spacing2
    type: System.Double
    description: Spacing between each instance of the linear pattern in Direction 2 in meters
  -
    name: FlipDir1
    type: System.Boolean
    description: True if you want to reverse the direction the linear pattern in Direction 1, false if not
  -
    name: FlipDir2
    type: System.Boolean
    description: True if you want to reverse the direction of the linear pattern in Direction 2, false if not
  -
    name: DName1
    type: System.String
    description: Name of the dimension defining Direction 1
  -
    name: DName2
    type: System.String
    description: Name of the dimension defining Direction 2
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
  - ILinearPatternFeatureData
keywords:
  - featurelinearpattern2
  - ifeaturemanager
  - feature
  - manager
  - linear
  - pattern2
  - num1
  - int32
  - spacing1
  - double
  - num2
  - spacing2
  - flip
  - dir1
  - boolean
  - dir2
  - name1
  - string
  - name2
  - geometry
  - pattern
---

# IFeatureManager.FeatureLinearPattern2

Obsolete. Superseded by IFeatureManager::FeatureLinearPattern3.

## Signature

```csharp
Feature FeatureLinearPattern2( 
   System.Int32
Num1
,
   System.Double
Spacing1
,
   System.Int32
Num2
,
   System.Double
Spacing2
,
   System.Boolean
FlipDir1
,
   System.Boolean
FlipDir2
,
   System.String
DName1
,
   System.String
DName2
,
   System.Boolean
GeometryPattern
)
```
## Parameters

- `Num1` (System.Int32): Number of instances of the linear pattern in Direction 1, including the original
- `Spacing1` (System.Double): Spacing between each instance of the linear pattern in Direction 1 in meters
- `Num2` (System.Int32): Number of instances of the linear pattern in Direction 2, including the original
- `Spacing2` (System.Double): Spacing between each instance of the linear pattern in Direction 2 in meters
- `FlipDir1` (System.Boolean): True if you want to reverse the direction the linear pattern in Direction 1, false if not
- `FlipDir2` (System.Boolean): True if you want to reverse the direction of the linear pattern in Direction 2, false if not
- `DName1` (System.String): Name of the dimension defining Direction 1
- `DName2` (System.String): Name of the dimension defining Direction 2
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not

## Return Value

Feature

## Remarks

If...
To select a feature, use...
To select a component, use...
Using
IModelDocExtension::SelectByID2
to select features and components, ordered selection of the features and components is required
1 and 2 to mark the directions
4 to mark the features to pattern
1 to mark the components to pattern
2 and 4 to mark the directions
Directly selecting a feature or component
IFeature::Select2
ISelectData::Mark
and
Component2::Select3

## See Also

- `ILinearPatternFeatureData`