---
type: method
interface: IFeatureManager
member: FeatureCircularPattern4
returns: Feature
parameters:
  -
    name: Number
    type: System.Int32
    description: Number of instances of the circular pattern to insert, including the original instance
  -
    name: Spacing
    type: System.Double
    description: Spacing between each instance of the circular pattern; total angle in radians if EqualSpacing is true
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
  -
    name: VaryInstance
    type: System.Boolean
    description: True to vary the dimensions or spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData
keywords:
  - featurecircularpattern4
  - ifeaturemanager
  - feature
  - manager
  - circular
  - pattern4
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
  - vary
  - instance
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureCircularPattern4

Obsolete. Superseded by IFeatureManager::FeatureCircularPattern5.

## Signature

```csharp
Feature FeatureCircularPattern4( 
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
,
   System.Boolean
VaryInstance
)
```
## Parameters

- `Number` (System.Int32): Number of instances of the circular pattern to insert, including the original instance
- `Spacing` (System.Double): Spacing between each instance of the circular pattern; total angle in radians if EqualSpacing is true
- `FlipDirection` (System.Boolean): True to flip the direction of the circular pattern, false to not
- `DName` (System.String): Name of the angular dimension defining the direction of the pattern
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not
- `EqualSpacing` (System.Boolean): True to use equal spacing, false to not
- `VaryInstance` (System.Boolean): True to vary the dimensions or spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )

## Return Value

Circular pattern feature

## Remarks

If...
To select a feature, use...
To select a component, use...
Using
IModelDocExtension::SelectByID2
to select features and components, ordered selection of the features and components is required
1 to mark the direction axis
4 to mark the features to pattern
1 to mark the components to pattern
2 to mark the direction axis
Directly selecting a feature or axis using
IFeature::Select2
1 to mark the direction axis
4 to mark the features to pattern
ISelectData::Mark
and
Component2::Select3
1 to mark the components to pattern
2 to mark the direction axis
If VaryInstance = true, then to indicate how to vary the individual pattern instances, decide on the type of pattern and call its corresponding method before calling this method:
Type...
Method...
Increment
IFeatureManager::InsertVaryInstanceIncrement
Override
IFeatureManager::InsertVaryInstanceOverride

## Examples

- Create Circular Pattern (VBA) (Create_Circular_Pattern_Example_VB.htm)
- Create Circular Pattern (VB.NET) (Create_Circular_Pattern_Example_VBNET.htm)
- Create Circular Pattern (C#) (Create_Circular_Pattern_Example_CSharp.htm)

## See Also

- `ICircularPatternFeatureData`