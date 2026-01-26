---
type: method
interface: IFeatureManager
member: InsertGussetFeature3
returns: Feature
parameters:
  -
    name: Depth
    type: System.Double
    description: Thickness of the gusset
  -
    name: DirType
    type: System.Int16
    description: Thickness direction of the gusset as defined in swGussetThicknessType_e
  -
    name: LocType
    type: System.Int16
    description: Location of the reference plane for the sketch of the gusset as defined in swGussetProfileLocationType_e
  -
    name: BIsProfile
    type: System.Boolean
    description: True to use a polygon profile, false to use a triangle profile
  -
    name: ProfileD1
    type: System.Double
    description: Profile Distance1 (see Remarks )
  -
    name: ProfileD2
    type: System.Double
    description: Profile Distance2 (see Remarks )
  -
    name: ProfileD3
    type: System.Double
    description: Profile Distance3 (see Remarks )
  -
    name: ProfileAngle
    type: System.Double
    description: Profile Angle (see Remarks ); valid only if BUseLenDim is false
  -
    name: ProfileD4
    type: System.Double
    description: Profile Distance4 (see Remarks ); valid only if BUseLenDim is true
  -
    name: BOffset
    type: System.Boolean
    description: True to offset the reference plane for the sketch, false to not
  -
    name: DProfileOffset
    type: System.Double
    description: Value by which to offset the reference plane for the sketch
  -
    name: CrvIndex
    type: System.Int32
    description: Index of the edge to use if multiple intersecting edges exist
  -
    name: BReverseDir
    type: System.Boolean
    description: If BOffset set to true, then true to reverse direction, false to not
  -
    name: BReverseFace
    type: System.Boolean
    description: Reverse ProfileD1 and ProfileD2 if triangle profile - or - Reverse ProfileD1 and ProfileD2 and reverse ProfileD3 and ProfileD4 if polygon profile
  -
    name: BUseLenDim
    type: System.Boolean
    description: True to use ProfileD4, false to use ProfileAngle
  -
    name: ProfileD5
    type: System.Double
    description: Chamfer Distance5 (see Remarks ); valid only if BNeedChamferInGusset is true
  -
    name: ProfileD6
    type: System.Double
    description: Chamfer Distance6 (see Remarks ); valid only if BNeedChamferInGusset and BUseLenDimForChamber are both true
  -
    name: ProfileChamferAngle
    type: System.Double
    description: Chamfer Angle (see Remarks ); valid only if BUseLenDimForChamfer is false and BNeedChamferInGusset is true
  -
    name: BUseLenDimForChamfer
    type: System.Boolean
    description: True to use ProfileD6, false to use ProfileChamferAngle; valid only if BNeedChamferInGusset is true
  -
    name: BNeedChamferInGusset
    type: System.Boolean
    description: True to create a chamfer to allow room for a weld bead under the gusset, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IGussetFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - gusset
  - gussets
  - igussetfeaturedata
  - weldments
  - insertgussetfeature3
  - ifeaturemanager
  - manager
  - insert
  - feature3
  - depth
  - double
  - dir
  - type
  - int16
  - loc
  - profile
  - boolean
  - d1
  - d2
  - d3
  - angle
  - d4
  - offset
  - crv
  - index
  - int32
  - reverse
  - face
  - use
  - len
  - dim
  - d5
  - d6
  - chamfer
  - need
  - vba
  - vb
  - net
---

# IFeatureManager.InsertGussetFeature3

Inserts a gusset feature for pre-selected faces of a weldment.

## Signature

```csharp
Feature InsertGussetFeature3( 
   System.Double
Depth
,
   System.Int16
DirType
,
   System.Int16
LocType
,
   System.Boolean
BIsProfile
,
   System.Double
ProfileD1
,
   System.Double
ProfileD2
,
   System.Double
ProfileD3
,
   System.Double
ProfileAngle
,
   System.Double
ProfileD4
,
   System.Boolean
BOffset
,
   System.Double
DProfileOffset
,
   System.Int32
CrvIndex
,
   System.Boolean
BReverseDir
,
   System.Boolean
BReverseFace
,
   System.Boolean
BUseLenDim
,
   System.Double
ProfileD5
,
   System.Double
ProfileD6
,
   System.Double
ProfileChamferAngle
,
   System.Boolean
BUseLenDimForChamfer
,
   System.Boolean
BNeedChamferInGusset
)
```
## Parameters

- `Depth` (System.Double): Thickness of the gusset
- `DirType` (System.Int16): Thickness direction of the gusset as defined in swGussetThicknessType_e
- `LocType` (System.Int16): Location of the reference plane for the sketch of the gusset as defined in swGussetProfileLocationType_e
- `BIsProfile` (System.Boolean): True to use a polygon profile, false to use a triangle profile
- `ProfileD1` (System.Double): Profile Distance1 (see Remarks )
- `ProfileD2` (System.Double): Profile Distance2 (see Remarks )
- `ProfileD3` (System.Double): Profile Distance3 (see Remarks )
- `ProfileAngle` (System.Double): Profile Angle (see Remarks ); valid only if BUseLenDim is false
- `ProfileD4` (System.Double): Profile Distance4 (see Remarks ); valid only if BUseLenDim is true
- `BOffset` (System.Boolean): True to offset the reference plane for the sketch, false to not
- `DProfileOffset` (System.Double): Value by which to offset the reference plane for the sketch
- `CrvIndex` (System.Int32): Index of the edge to use if multiple intersecting edges exist
- `BReverseDir` (System.Boolean): If BOffset set to true, then true to reverse direction, false to not
- `BReverseFace` (System.Boolean): Reverse ProfileD1 and ProfileD2 if triangle profile - or - Reverse ProfileD1 and ProfileD2 and reverse ProfileD3 and ProfileD4 if polygon profile
- `BUseLenDim` (System.Boolean): True to use ProfileD4, false to use ProfileAngle
- `ProfileD5` (System.Double): Chamfer Distance5 (see Remarks ); valid only if BNeedChamferInGusset is true
- `ProfileD6` (System.Double): Chamfer Distance6 (see Remarks ); valid only if BNeedChamferInGusset and BUseLenDimForChamber are both true
- `ProfileChamferAngle` (System.Double): Chamfer Angle (see Remarks ); valid only if BUseLenDimForChamfer is false and BNeedChamferInGusset is true
- `BUseLenDimForChamfer` (System.Boolean): True to use ProfileD6, false to use ProfileChamferAngle; valid only if BNeedChamferInGusset is true
- `BNeedChamferInGusset` (System.Boolean): True to create a chamfer to allow room for a weld bead under the gusset, false to not

## Return Value

IFeature

## Remarks

See the SOLIDWORKS Help for more information about profile and chamfer distances and angles in weldment gussets.
Before calling this method, you must call
IModelDocExtension::SelectByID2
to select two faces that are the supporting legs of this gusset with a Mark of 1.
Instead of using this method, you can pass an array of faces to
IFeatureManager::InsertGussetFeature2
.

## Examples

- Insert Gusset Feature (VBA) (Insert_Gusset_Feature_Example_VB.htm)
- Insert Gusset Feature (VB.NET) (Insert_Gusset_Feature_Example_VBNET.htm)
- Insert Gusset Feature (C#) (Insert_Gusset_Feature_Example_CSharp.htm)

## See Also

- `IGussetFeatureData`