---
type: method
interface: IFeatureManager
member: InsertCosmeticWeldBead2
returns: System.Object
parameters:
  -
    name: WeldMode
    type: System.Int32
    description: Weld mode as defined in swCosmeticWeldBeadMode_e
  -
    name: WeldFromFaceOrEdgeSet
    type: System.Object
    description: Array of weld-from entities (see Remarks )
  -
    name: WeldToFaceOrEdgeSet
    type: System.Object
    description: Array of weld-to entities or Nothing or null (see Remarks )
  -
    name: WeldSize
    type: System.Double
    description: Size of weld bead
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - cosmeticweldbeadfeaturedata
  - see
  - icosmeticweldbeadfeaturedata
  - feature
  - also
  - ifeature
  - cosmetic
  - weld
  - beads
  - insertcosmeticweldbead2
  - ifeaturemanager
  - manager
  - insert
  - bead2
  - mode
  - int32
  - face
  - edge
  - object
  - size
  - double
  - bead
  - using
  - geometric
  - entities
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCosmeticWeldBead2

Inserts a cosmetic weld bead using either weld geometry or a weld path.

## Signature

```csharp
System.Object InsertCosmeticWeldBead2( 
   System.Int32
WeldMode
,
   System.Object
WeldFromFaceOrEdgeSet
,
   System.Object
WeldToFaceOrEdgeSet
,
   System.Double
WeldSize
)
```
## Parameters

- `WeldMode` (System.Int32): Weld mode as defined in swCosmeticWeldBeadMode_e
- `WeldFromFaceOrEdgeSet` (System.Object): Array of weld-from entities (see Remarks )
- `WeldToFaceOrEdgeSet` (System.Object): Array of weld-to entities or Nothing or null (see Remarks )
- `WeldSize` (System.Double): Size of weld bead

## Return Value

Array of weld bead features

## Remarks

WeldMode
Selected entities
Selection marks
swCosmeticWeldBeadMode_e.swCosmeticWeldBeadMode_WeldGeometry
Either
faces
or
edges
as weld-from and weld-to entities
NOTE
: Both weld-to and weld-from entities must all be the same type of entities; e.g., all faces or all edges.
4 for each weld-from entity in WeldFromFaceOrEdgeSet
8 for each weld-to entity in WeldToFaceOrEdgeSet
swCosmeticWeldBeadMode_e.swCosmeticWeldBeadMode_WeldPath
Edges,
sketches
, or a combination of edges and sketches are selected as weld-from entities
0 for each weld-from entity in WeldFromFaceOrEdgeSet
Nothing or null for WeldToFaceOrEdgeSet

## Examples

- Insert Cosmetic Weld Bead Using Geometric Entities (C#) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_CSharp.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VB.NET) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VBNET.htm)
- Insert Cosmetic Weld Bead Using Geometric Entities (VBA) (Insert_Cosmetic_Weld_Bead_Using_Geometric_Entities_Example_VB.htm)