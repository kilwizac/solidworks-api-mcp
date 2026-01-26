---
type: method
interface: IFeatureManager
member: FeatureLinearPattern5
returns: Feature
parameters:
  -
    name: Num1
    type: System.Int32
    description: Number of instances of the linear pattern in Direction 1, including the original
  -
    name: Spacing1
    type: System.Double
    description: Spacing in meters between each instance of the linear pattern in Direction 1
  -
    name: Num2
    type: System.Int32
    description: Number of instances of the linear pattern in Direction 2, including the original
  -
    name: Spacing2
    type: System.Double
    description: Spacing in meters between each instance of the linear pattern in Direction 2
  -
    name: FlipDir1
    type: System.Boolean
    description: True to reverse the direction of the linear pattern in Direction 1, false to not
  -
    name: FlipDir2
    type: System.Boolean
    description: True to reverse the direction of the linear pattern in Direction 2, false to not
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
  -
    name: VaryInstance
    type: System.Boolean
    description: True to vary the dimensions and spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )
  -
    name: HasOffset1
    type: System.Boolean
    description: True if using Offset1 to specify an offset of the pattern seed from a selected reference in Direction 1, false if not
  -
    name: HasOffset2
    type: System.Boolean
    description: True if using Offset2 to specify an offset of the pattern seed from a selected reference in Direction 2, false if not
  -
    name: CtrlByNum1
    type: System.Boolean
    description: True to control pattern spacing using Num1, false to control it using Spacing1; valid only if HasOffset1 is true
  -
    name: CtrlByNum2
    type: System.Boolean
    description: True to control pattern spacing using Num2, false to control it using Spacing2; valid only if HasOffset2 is true
  -
    name: FromCentroid1
    type: System.Boolean
    description: True if Offset1 is measured from the centroid of the seed instance, false if it is measured from a selected reference on the seed instance; valid only if HasOffset1 is true (see Remarks )
  -
    name: FromCentroid2
    type: System.Boolean
    description: True if Offset2 is measured from the centroid of the seed instance, false if it is measured from a selected reference on the seed instance; valid only if HasOffset2 is true (see Remarks )
  -
    name: RevOffset1
    type: System.Boolean
    description: True to reverse the direction of Offset1, false to not; valid only if HasOffset1 is true
  -
    name: RevOffset2
    type: System.Boolean
    description: True to reverse the direction of Offset2, false to not; valid only if HasOffset2 is true
  -
    name: Offset1
    type: System.Double
    description: Offset in meters from a selected reference in Direction 1; valid only if HasOffset1 is true (see Remarks )
  -
    name: Offset2
    type: System.Double
    description: Offset in meters from a selected reference in Direction 2; valid only if HasOffset2 is true (see Remarks )
  -
    name: D2PatternSeedOnly
    type: System.Boolean
    description: True to create a linear pattern in Direction 2 using the seed features only, without replicating the pattern instances of Direction 1; false to not
  -
    name: SyncSubAssemblies
    type: System.Boolean
    description: True to move components in the patterned instances when components are moved in the seed flexible subassembly, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurelinearpattern5
  - ifeaturemanager
  - feature
  - manager
  - linear
  - pattern5
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
  - vary
  - instance
  - has
  - offset1
  - offset2
  - ctrl
  - centroid1
  - centroid2
  - rev
  - d2
  - seed
  - only
  - sync
  - sub
  - assemblies
  - create
  - bidirectional
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureLinearPattern5

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ILinearPatternFeatureData and ILocalLinearPatternFeatureData.

## Signature

```csharp
Feature FeatureLinearPattern5( 
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
,
   System.Boolean
VaryInstance
,
   System.Boolean
HasOffset1
,
   System.Boolean
HasOffset2
,
   System.Boolean
CtrlByNum1
,
   System.Boolean
CtrlByNum2
,
   System.Boolean
FromCentroid1
,
   System.Boolean
FromCentroid2
,
   System.Boolean
RevOffset1
,
   System.Boolean
RevOffset2
,
   System.Double
Offset1
,
   System.Double
Offset2
,
   System.Boolean
D2PatternSeedOnly
,
   System.Boolean
SyncSubAssemblies
)
```
## Parameters

- `Num1` (System.Int32): Number of instances of the linear pattern in Direction 1, including the original
- `Spacing1` (System.Double): Spacing in meters between each instance of the linear pattern in Direction 1
- `Num2` (System.Int32): Number of instances of the linear pattern in Direction 2, including the original
- `Spacing2` (System.Double): Spacing in meters between each instance of the linear pattern in Direction 2
- `FlipDir1` (System.Boolean): True to reverse the direction of the linear pattern in Direction 1, false to not
- `FlipDir2` (System.Boolean): True to reverse the direction of the linear pattern in Direction 2, false to not
- `DName1` (System.String): Name of the dimension defining Direction 1
- `DName2` (System.String): Name of the dimension defining Direction 2
- `GeometryPattern` (System.Boolean): True to use geometry pattern, false to not
- `VaryInstance` (System.Boolean): True to vary the dimensions and spacing of individual pattern instances, false to not; valid only if GeometryPattern = false (see Remarks )
- `HasOffset1` (System.Boolean): True if using Offset1 to specify an offset of the pattern seed from a selected reference in Direction 1, false if not
- `HasOffset2` (System.Boolean): True if using Offset2 to specify an offset of the pattern seed from a selected reference in Direction 2, false if not
- `CtrlByNum1` (System.Boolean): True to control pattern spacing using Num1, false to control it using Spacing1; valid only if HasOffset1 is true
- `CtrlByNum2` (System.Boolean): True to control pattern spacing using Num2, false to control it using Spacing2; valid only if HasOffset2 is true
- `FromCentroid1` (System.Boolean): True if Offset1 is measured from the centroid of the seed instance, false if it is measured from a selected reference on the seed instance; valid only if HasOffset1 is true (see Remarks )
- `FromCentroid2` (System.Boolean): True if Offset2 is measured from the centroid of the seed instance, false if it is measured from a selected reference on the seed instance; valid only if HasOffset2 is true (see Remarks )
- `RevOffset1` (System.Boolean): True to reverse the direction of Offset1, false to not; valid only if HasOffset1 is true
- `RevOffset2` (System.Boolean): True to reverse the direction of Offset2, false to not; valid only if HasOffset2 is true
- `Offset1` (System.Double): Offset in meters from a selected reference in Direction 1; valid only if HasOffset1 is true (see Remarks )
- `Offset2` (System.Double): Offset in meters from a selected reference in Direction 2; valid only if HasOffset2 is true (see Remarks )
- `D2PatternSeedOnly` (System.Boolean): True to create a linear pattern in Direction 2 using the seed features only, without replicating the pattern instances of Direction 1; false to not
- `SyncSubAssemblies` (System.Boolean): True to move components in the patterned instances when components are moved in the seed flexible subassembly, false to not

## Return Value

Linear pattern feature

## Remarks

If...
To select a feature, use...
To select a body, use...
To select a component, use...
Using
IModelDocExtension::SelectByID2
to select features, solid bodies, and components requires ordered selection
1 to mark Direction 1
2 to mark Direction 2
4 to mark the features to pattern
2097152 to mark references for Offset1 and Offset2
8388608 to mark a seed instance reference when FromCentroid1 or FromCentroid2 is false
1 to mark Direction 1
256 to mark the solid bodies to pattern
1 to mark the components to pattern
2 and 4 to mark the directions
Directly selecting a feature, solid body, or component
IEntity::Select4
with
ISelectData::Mark
=
1 to mark Direction 1
2 to mark Direction 2
IFeature::Select2
with Mark=
4 to mark the features to pattern
2097152 to mark references for Offset1 and Offset2
8388608 to mark a seed instance reference when FromCentroid1 or FromCentroid2 is false
IEntity::Select4 with ISelectData::Mark=1 to mark Direction 1
IBody2::Select2
with ISelectData::Mark=256 to mark the bodies to pattern
IComponent2::Select4
and ISelectData::Mark=1 to mark the components to pattern
IEntity::Select4 and ISelectData::Mark=2 and 4 to mark the directions
Type
Method
Increment
IFeatureManager::InsertVaryInstanceIncrement
Override
IFeatureManager::InsertVaryInstanceOverride

## Examples

- Create Bidirectional Linear Pattern (VBA) (Create_Bidirectional_Linear_Pattern_Example_VB.htm)
- Create Bidirectional Linear Pattern (VB.NET) (Create_Bidirectional_Linear_Pattern_Example_VBNET.htm)
- Create Bidirectional Linear Pattern (C#) (Create_Bidirectional_Linear_Pattern_Example_CSharp.htm)