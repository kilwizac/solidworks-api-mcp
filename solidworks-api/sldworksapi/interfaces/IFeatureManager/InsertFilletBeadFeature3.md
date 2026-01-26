---
type: method
interface: IFeatureManager
member: InsertFilletBeadFeature3
returns: Feature
parameters:
  -
    name: Type1
    type: System.Int16
    description: First side: 0 = Full length 1 = Intermittent 2 = Staggered
  -
    name: Size1
    type: System.Double
    description: Size of fillet on first side
  -
    name: Length1
    type: System.Double
    description: Length of fillet on first side
  -
    name: PenetrationType1
    type: System.Int16
    description: First side: 0 = Full penetration 1 = Partial penetration 2 = No penetration
  -
    name: PenetrationValue1
    type: System.Double
    description: If penetrationType1 is set to 1 (Partial penetration), then set its value
  -
    name: Pitch
    type: System.Double
    description: Pitch, if Intermittent or Staggered on both sides
  -
    name: Type2
    type: System.Int16
    description: Second side: 0= Full length 1 = Intermittent 2= Staggered
  -
    name: Size2
    type: System.Double
    description: Size of fillet on second side
  -
    name: Length2
    type: System.Double
    description: Length of fillet on second side
  -
    name: PenetrationType2
    type: System.Int16
    description: Second side: 0 = Full penetration 1 = Partial penetration 2 = No penetration
  -
    name: PenetrationValue2
    type: System.Double
    description: If penetrationType2 is set to 1 (Partial penetration), then set its value
  -
    name: Flag
    type: System.Int32
    description: 0 = One-sided and no tangent propagation 1 = Two-sided 2 = Tangent propagation 3 = Two-sided and tangent propagation
  -
    name: EdgeNum1
    type: System.Int32
    description: Number of intersecting edges on first side
  -
    name: DeSelEdge1
    type: System.Object
    description: Array indicating if intersecting edges are selected (0) or deselected (1) on first side
  -
    name: EdgeNum2
    type: System.Int32
    description: Number of intersecting edges on second side
  -
    name: DeSelEdge2
    type: System.Object
    description: Array indicating if intersecting edges are selected (0) or deselected (1) on second side
  -
    name: FaceSet1
    type: System.Object
    description: Array of side 1 faces whose intersecting edges get fillet beads
  -
    name: FaceSet2
    type: System.Object
    description: Array of side 2 faces whose intersecting edges get fillet beads
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertFilletBeadFeature2
  - IWeldmentBeadFeatureData
keywords:
  - weldments
  - fillet
  - beads
  - feature
  - see
  - also
  - ifeature
  - weld
  - bead
  - fillets
  - insertfilletbeadfeature3
  - ifeaturemanager
  - manager
  - insert
  - feature3
  - type1
  - int16
  - size1
  - double
  - length1
  - penetration
  - value1
  - pitch
  - type2
  - size2
  - length2
  - value2
  - flag
  - int32
  - edge
  - num1
  - de
  - sel
  - edge1
  - object
  - num2
  - edge2
  - face
  - set1
  - set2
  - weldment
  - features
  - vba
  - vb
  - net
---

# IFeatureManager.InsertFilletBeadFeature3

Inserts fillet weld bead features for the specified face sets.

## Signature

```csharp
Feature InsertFilletBeadFeature3( 
   System.Int16
Type1
,
   System.Double
Size1
,
   System.Double
Length1
,
   System.Int16
PenetrationType1
,
   System.Double
PenetrationValue1
,
   System.Double
Pitch
,
   System.Int16
Type2
,
   System.Double
Size2
,
   System.Double
Length2
,
   System.Int16
PenetrationType2
,
   System.Double
PenetrationValue2
,
   System.Int32
Flag
,
   System.Int32
EdgeNum1
,
   System.Object
DeSelEdge1
,
   System.Int32
EdgeNum2
,
   System.Object
DeSelEdge2
,
   System.Object
FaceSet1
,
   System.Object
FaceSet2
)
```
## Parameters

- `Type1` (System.Int16): First side: 0 = Full length 1 = Intermittent 2 = Staggered
- `Size1` (System.Double): Size of fillet on first side
- `Length1` (System.Double): Length of fillet on first side
- `PenetrationType1` (System.Int16): First side: 0 = Full penetration 1 = Partial penetration 2 = No penetration
- `PenetrationValue1` (System.Double): If penetrationType1 is set to 1 (Partial penetration), then set its value
- `Pitch` (System.Double): Pitch, if Intermittent or Staggered on both sides
- `Type2` (System.Int16): Second side: 0= Full length 1 = Intermittent 2= Staggered
- `Size2` (System.Double): Size of fillet on second side
- `Length2` (System.Double): Length of fillet on second side
- `PenetrationType2` (System.Int16): Second side: 0 = Full penetration 1 = Partial penetration 2 = No penetration
- `PenetrationValue2` (System.Double): If penetrationType2 is set to 1 (Partial penetration), then set its value
- `Flag` (System.Int32): 0 = One-sided and no tangent propagation 1 = Two-sided 2 = Tangent propagation 3 = Two-sided and tangent propagation
- `EdgeNum1` (System.Int32): Number of intersecting edges on first side
- `DeSelEdge1` (System.Object): Array indicating if intersecting edges are selected (0) or deselected (1) on first side
- `EdgeNum2` (System.Int32): Number of intersecting edges on second side
- `DeSelEdge2` (System.Object): Array indicating if intersecting edges are selected (0) or deselected (1) on second side
- `FaceSet1` (System.Object): Array of side 1 faces whose intersecting edges get fillet beads
- `FaceSet2` (System.Object): Array of side 2 faces whose intersecting edges get fillet beads

## Return Value

Feature

## Remarks

This interface specifies two face arrays, one for each side of a part feature. The fillet bead is applied to the edges where each face intersects for each array specified.

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertFilletBeadFeature2`
- `IWeldmentBeadFeatureData`