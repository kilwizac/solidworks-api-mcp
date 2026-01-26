---
type: method
interface: IModeler
member: ICreateBrepBody3
returns: Body2
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of body to create as defined in swTopology_e
  -
    name: NTopologies
    type: System.Int32
    description: Number of topological entities in the topologies argument
  -
    name: Topologies
    type: System.Int32
    description: Array of topologies (see swTopoEntity_e ), one for each topological entity
  -
    name: EdgeTolArray
    type: System.Double
    description: Array of tolerances for edges
  -
    name: VertexTolArray
    type: System.Double
    description: Array of tolerances for vertices
  -
    name: PointArray
    type: System.Double
    description: Array of coordinates of vertices (geometry for vertices)
  -
    name: CurveArra1
    type: Curve
    description: Array of curves (geometry for edges; 3D curve) and coedges (geometry for coedges; 2D curve)
  -
    name: CurveSurfaceArray1
    type: Surface
    description: Array of surfaces that lie on CurveArra1 2D curve
  -
    name: CurveArray2
    type: Curve
    description: Array of curves (geometry for edges; 3D curve) and array of coedges (geometry for coedges; 2D curve)
  -
    name: CurveSurfaceArray2
    type: Surface
    description: Array of surfaces that on lie on CurveArray2 2D curve
  -
    name: SurfaceArray
    type: Surface
    description: Array of surfaces (geometry for faces)
  -
    name: NRelations
    type: System.Int32
    description: Number of 1-to-1 relationships between topological entities
  -
    name: Parents
    type: System.Int32
    description: Array of parents, one in each relationship
  -
    name: Children
    type: System.Int32
    description: Array of children, one in each relationship
  -
    name: Senses
    type: System.Int32
    description: Array of senses in which child is used by parent in the relationship
  -
    name: Option
    type: System.Int32
    description: 0 = Default 1 = Repair and simplify body 2 = Simplify body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateExtrudedBody
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateWireBody
keywords:
  - bodies
  - see
  - also
  - ibody2
  - brep
  - icreatebrepbody3
  - imodeler
  - modeler
  - create
  - body3
  - type
  - int32
  - topologies
  - edge
  - tol
  - array
  - double
  - vertex
  - point
  - curve
  - arra1
  - surface
  - array1
  - array2
  - relations
  - parents
  - children
  - senses
  - option
  - body2
---

# IModeler.ICreateBrepBody3

Creates a temporary body from BREP (boundary representation) data.

## Signature

```csharp
Body2 ICreateBrepBody3( 
   System.Int32
Type
,
   System.Int32
NTopologies
,
   ref System.Int32
Topologies
,
   ref System.Double
EdgeTolArray
,
   ref System.Double
VertexTolArray
,
   ref System.Double
PointArray
,
   ref Curve
CurveArra1
,
   ref Surface
CurveSurfaceArray1
,
   ref Curve
CurveArray2
,
   ref Surface
CurveSurfaceArray2
,
   ref Surface
SurfaceArray
,
   System.Int32
NRelations
,
   ref System.Int32
Parents
,
   ref System.Int32
Children
,
   ref System.Int32
Senses
,
   System.Int32
Option
)
```
## Parameters

- `Type` (System.Int32): Type of body to create as defined in swTopology_e
- `NTopologies` (System.Int32): Number of topological entities in the topologies argument
- `Topologies` (System.Int32): Array of topologies (see swTopoEntity_e ), one for each topological entity
- `EdgeTolArray` (System.Double): Array of tolerances for edges
- `VertexTolArray` (System.Double): Array of tolerances for vertices
- `PointArray` (System.Double): Array of coordinates of vertices (geometry for vertices)
- `CurveArra1` (Curve): Array of curves (geometry for edges; 3D curve) and coedges (geometry for coedges; 2D curve)
- `CurveSurfaceArray1` (Surface): Array of surfaces that lie on CurveArra1 2D curve
- `CurveArray2` (Curve): Array of curves (geometry for edges; 3D curve) and array of coedges (geometry for coedges; 2D curve)
- `CurveSurfaceArray2` (Surface): Array of surfaces that on lie on CurveArray2 2D curve
- `SurfaceArray` (Surface): Array of surfaces (geometry for faces)
- `NRelations` (System.Int32): Number of 1-to-1 relationships between topological entities
- `Parents` (System.Int32): Array of parents, one in each relationship
- `Children` (System.Int32): Array of children, one in each relationship
- `Senses` (System.Int32): Array of senses in which child is used by parent in the relationship
- `Option` (System.Int32): 0 = Default 1 = Repair and simplify body 2 = Simplify body

## Return Value

Body

## Remarks

The CurveArray1 and CurveArray2 must be paired with CurveSurfaceArray1 and CurveSurfaceArray2, respectively. Order is not important. The 2D curve has to be created in the direction of the loop.
If non-negative values are packed into the EdgeToleranceArray and VertexToleranceArray arrays, then tolerances are applied to the corresponding edges or vertices. These arrays should be the same size as CurveArray1 and PointArray, respectively. Otherwise, a default value of 1.0e-8 (modeler precision) is used.
NOTE
:
IModeler::SetInitKnitGapWidth
does not affect this method.
Useful methods for creating geometry for the topological entities are:
IBody2::CreatePlanarSurface
or
IBody2::ICreatePlanarSurface
IBody2::AddProfileArc
or
IBody2::IAddProfileArc
IBody2::AddProfileLine
or
IBody2::IAddProfileLine
IBody2::CreateRevolutionSurface
or
IBody2::ICreateRevolutionSurface
For example, to create a cone, find topological relationships and form relevant arrays. A
complete solid cone consists of 8 topological entities:
1 shell
2 faces
3 loops
1 edge
1 vertex
There are 8 relations:
the shell is the parent of 2 faces - 2
the planar end face has 1 loop - 1
the conical face has 2 loops - 2
two loops are each the parent of 1 edge - 2
one loop is the parent of 1 vertex 1
The topologies array:
Index
Value
0
swTopoShell
1
swTopoFace
2
swTopoFace
3
swTopoLoop
4
swTopoEdge
5
swTopoLoop
6
swTopoLoop
7
swTopoVertex
The set of arrays:
index
parents
children
senses
relation
0
0
1
0
shell to face
1
0
2
0
shell to face
2
1
3
0
face to loop
3
3
4
-1
loop to edge
4
2
5
0
face to loop
5
2
6
0
face to loop
6
5
4
1
loop to edge
7
6
7
0
loop to vertex
Values in the parents and children arrays correspond to the indices of the topology array.
Each face or edge created by
IModeler::CreateBrepBody3
or IModeler::ICreateBrepBody3 has an associated integer ID that is the same as the index to the input topologies. Use
IFace2::GetFaceId
or
IEdge::GetId
to get the associated integer ID.
Every shell should be a closed shell. Sheet bodies should have additional back faces to form a closed shell. When creating a sheet body, these extra back faces are retained in the result and should be removed using
IModeler::DeleteFacesFromSheetBody
or
IModeler::IDeleteFacesFromSheetBody
.

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateExtrudedBody`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateWireBody`