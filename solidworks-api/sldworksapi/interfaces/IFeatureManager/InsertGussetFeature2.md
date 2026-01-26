---
type: method
interface: IFeatureManager
member: InsertGussetFeature2
returns: Feature
parameters:
  -
    name: Depth
    type: System.Double
    description: Depth of the gusset
  -
    name: DirType
    type: System.Int16
    description: Direction in which to extrude the gusset: 0 = left side 1 = center 2 = right side
  -
    name: LocType
    type: System.Int16
    description: Location of the reference plane for the sketch of the gusset: 0 = start point 1 = midpoint 2 = end point
  -
    name: BIsProfile
    type: System.Boolean
    description: True to use a polygon profile, false to use a triangle
  -
    name: ProfileD1
    type: System.Double
    description: Length for Direction 1
  -
    name: ProfileD2
    type: System.Double
    description: Length for Direction 2
  -
    name: ProfileD3
    type: System.Double
    description: Length for Direction 3
  -
    name: ProfileAngle
    type: System.Double
    description: Value for profile angle
  -
    name: ProfileD4
    type: System.Double
    description: Length for Direction 4
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
    name: Faces
    type: System.Object
    description: Array of faces that form the bases of this gusset feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IGussetFeatureData
keywords:
  - weldments
  - gussets
  - feature
  - see
  - also
  - ifeature
  - gusset
  - igussetfeaturedata
  - insertgussetfeature2
  - ifeaturemanager
  - manager
  - insert
  - feature2
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
  - faces
  - object
  - weldment
  - features
  - vba
  - vb
  - net
---

# IFeatureManager.InsertGussetFeature2

Inserts a gusset feature for the specified faces.

## Signature

```csharp
Feature InsertGussetFeature2( 
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
   System.Object
Faces
)
```
## Parameters

- `Depth` (System.Double): Depth of the gusset
- `DirType` (System.Int16): Direction in which to extrude the gusset: 0 = left side 1 = center 2 = right side
- `LocType` (System.Int16): Location of the reference plane for the sketch of the gusset: 0 = start point 1 = midpoint 2 = end point
- `BIsProfile` (System.Boolean): True to use a polygon profile, false to use a triangle
- `ProfileD1` (System.Double): Length for Direction 1
- `ProfileD2` (System.Double): Length for Direction 2
- `ProfileD3` (System.Double): Length for Direction 3
- `ProfileAngle` (System.Double): Value for profile angle
- `ProfileD4` (System.Double): Length for Direction 4
- `BOffset` (System.Boolean): True to offset the reference plane for the sketch, false to not
- `DProfileOffset` (System.Double): Value by which to offset the reference plane for the sketch
- `CrvIndex` (System.Int32): Index of the edge to use if multiple intersecting edges exist
- `BReverseDir` (System.Boolean): If BOffset set to true, then true to reverse direction, false to not
- `BReverseFace` (System.Boolean): Reverse ProfileD1 and ProfileD2 if triangle profile - or - Reverse ProfileD1 and ProfileD2 and reverse ProfileD3 and ProfileD4 if polygon profile
- `BUseLenDim` (System.Boolean): True to use ProfileD4, false to use ProfileAngle
- `Faces` (System.Object): Array of faces that form the bases of this gusset feature

## Return Value

IFeature

## Remarks

Instead of using this method, you can:
Select two faces in the graphics area that are the supporting legs of this gusset.
Call
IFeatureManager::InsertGussetFeature3
.

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IGussetFeatureData`