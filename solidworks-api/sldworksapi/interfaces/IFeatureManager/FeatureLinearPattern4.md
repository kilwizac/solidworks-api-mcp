---
type: method
interface: IFeatureManager
member: FeatureLinearPattern4
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
    description: Offset in meters from a selected reference in Direction 1 (see Remarks ); valid only if HasOffset1 is true
  -
    name: Offset2
    type: System.Double
    description: Offset in meters from a selected reference in Direction 2 (see Remarks ); valid only if HasOffset2 is true
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData
  - ILocalLinearPatternFeatureData
keywords:
  - featurelinearpattern4
  - ifeaturemanager
  - feature
  - manager
  - linear
  - pattern4
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
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureLinearPattern4

Obsolete. Superseded by IFeatureManager::FeatureLinearPattern5.

## Signature

```csharp
Feature FeatureLinearPattern4( 
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
- `Offset1` (System.Double): Offset in meters from a selected reference in Direction 1 (see Remarks ); valid only if HasOffset1 is true
- `Offset2` (System.Double): Offset in meters from a selected reference in Direction 2 (see Remarks ); valid only if HasOffset2 is true

## Return Value

Linear pattern feature

## Remarks

If...
To select a feature, use...
To select a component, use...
Using
IModelDocExtension::SelectByID2
to select features and components, ordered selection of the features and components is required
1 to mark Direction 1, and 2 to mark Direction 2
4 to mark the features to pattern
2097152 to mark references for Offset1 and Offset2
8388608 to mark a seed instance reference when FromCentroid1 or FromCentroid2 is false
1 to mark the components to pattern
2 and 4 to mark the directions
Directly selecting a feature or component using
IFeature::Select2
1 to mark Direction 1, and 2 to mark Direction 2
4 to mark the features to pattern
2097152 to mark references for Offset1 and Offset2
8388608 to mark a seed instance reference when FromCentroid1 or FromCentroid2 is false
ISelectData::Mark
and
IComponent2::Select4
1 to mark the components to pattern
2 and 4 to mark the directions
If VaryInstance = true, then to indicate how to vary the individual pattern instances, decide on the type of pattern and call its corresponding method before calling this method:
Type
Method
Increment
IFeatureManager::InsertVaryInstanceIncrement
Override
IFeatureManager::InsertVaryInstanceOverride

## Examples

- Create Linear Pattern (VBA) (Create_Linear_Pattern_Example_VB.htm)
- Create Linear Pattern (VB.NET) (Create_Linear_Pattern_Example_VBNET.htm)
- Create Linear Pattern (C#) (Create_Linear_Pattern_Example_CSharp.htm)

## See Also

- `ILinearPatternFeatureData`
- `ILocalLinearPatternFeatureData`