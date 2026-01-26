---
type: method
interface: IFeatureManager
member: FeatureCircularPattern5
returns: Feature
parameters:
  -
    name: Number
    type: System.Int32
    description: Number of instances of the circular pattern to insert in Direction 1, including the original instance
  -
    name: Spacing
    type: System.Double
    description: Spacing between each instance in Direction 1 of the circular pattern or, if EqualSpacing is true, then the total angle in radians
  -
    name: FlipDirection
    type: System.Boolean
    description: True to flip the direction of the circular pattern in Direction 1, false to not
  -
    name: DName
    type: System.String
    description: Name of the angular dimension defining Direction 1 of the pattern
  -
    name: GeometryPattern
    type: System.Boolean
    description: True to use geometry pattern, false to not
  -
    name: EqualSpacing
    type: System.Boolean
    description: True to use equal spacing in Direction 1, false to not
  -
    name: VaryInstance
    type: System.Boolean
    description: True to vary the dimensions or spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )
  -
    name: SyncSubAssemblies
    type: System.Boolean
    description: True to move components in the patterned instances when components are moved in the seed flexible subassembly, false to not
  -
    name: BDir2
    type: System.Boolean
    description: True to create a bidirectional circular pattern feature, false to not
  -
    name: BSymmetric
    type: System.Boolean
    description: True to create a symmetric circular pattern feature in Direction 2, false to create an asymmetrical circular pattern feature in Direction 2; valid only if BDir2 is true
  -
    name: Number2
    type: System.Int32
    description: Number of instances to insert in Direction 2; valid only if BDir2 is true
  -
    name: Spacing2
    type: System.Double
    description: Distance between pattern instances in Direction 2; valid only if BDir2 is true
  -
    name: DName2
    type: System.String
    description: Name of the angular dimension defining Direction 2 of the pattern; valid only if BDir2 is true
  -
    name: EqualSpacing2
    type: System.Boolean
    description: True to use equal spacing in Direction 2, false to not; valid only if BDir2 is true and BSymmetric is false
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurecircularpattern5
  - ifeaturemanager
  - feature
  - manager
  - circular
  - pattern5
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
  - sync
  - sub
  - assemblies
  - dir2
  - symmetric
  - number2
  - spacing2
  - name2
---

# IFeatureManager.FeatureCircularPattern5

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ICircularPatternFeatureData and ILocalCircularPatternFeatureData.

## Signature

```csharp
Feature FeatureCircularPattern5( 
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
,
   System.Boolean
SyncSubAssemblies
,
   System.Boolean
BDir2
,
   System.Boolean
BSymmetric
,
   System.Int32
Number2
,
   System.Double
Spacing2
,
   System.String
DName2
,
   System.Boolean
EqualSpacing2
)
```
## Parameters

- `Number` (System.Int32): Number of instances of the circular pattern to insert in Direction 1, including the original instance
- `Spacing` (System.Double): Spacing between each instance in Direction 1 of the circular pattern or, if EqualSpacing is true, then the total angle in radians
- `FlipDirection` (System.Boolean): True to flip the direction of the circular pattern in Direction 1, false to not
- `DName` (System.String): Name of the angular dimension defining Direction 1 of the pattern
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not
- `EqualSpacing` (System.Boolean): True to use equal spacing in Direction 1, false to not
- `VaryInstance` (System.Boolean): True to vary the dimensions or spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )
- `SyncSubAssemblies` (System.Boolean): True to move components in the patterned instances when components are moved in the seed flexible subassembly, false to not
- `BDir2` (System.Boolean): True to create a bidirectional circular pattern feature, false to not
- `BSymmetric` (System.Boolean): True to create a symmetric circular pattern feature in Direction 2, false to create an asymmetrical circular pattern feature in Direction 2; valid only if BDir2 is true
- `Number2` (System.Int32): Number of instances to insert in Direction 2; valid only if BDir2 is true
- `Spacing2` (System.Double): Distance between pattern instances in Direction 2; valid only if BDir2 is true
- `DName2` (System.String): Name of the angular dimension defining Direction 2 of the pattern; valid only if BDir2 is true
- `EqualSpacing2` (System.Boolean): True to use equal spacing in Direction 2, false to not; valid only if BDir2 is true and BSymmetric is false

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
Type
Method
Increment
IFeatureManager::InsertVaryInstanceIncrement
Override
IFeatureManager::InsertVaryInstanceOverride