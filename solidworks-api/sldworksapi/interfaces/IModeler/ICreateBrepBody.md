---
type: method
interface: IModeler
member: ICreateBrepBody
returns: Body
parameters:
  -
    name: Type
    type: System.Int32
    description: 
  -
    name: NTopologies
    type: System.Int32
    description: 
  -
    name: Topologies
    type: System.Int32
    description: 
  -
    name: EdgeTolArray
    type: System.Double
    description: 
  -
    name: VertexTolArray
    type: System.Double
    description: 
  -
    name: PointArray
    type: System.Double
    description: 
  -
    name: CurveArray
    type: Curve
    description: 
  -
    name: SurfaceArray
    type: Surface
    description: 
  -
    name: NRelations
    type: System.Int32
    description: 
  -
    name: Parents
    type: System.Int32
    description: 
  -
    name: Children
    type: System.Int32
    description: 
  -
    name: Senses
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - icreatebrepbody
  - imodeler
  - modeler
  - create
  - brep
  - body
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
  - surface
  - relations
  - parents
  - children
  - senses
---

# IModeler.ICreateBrepBody

Obsolete. Superseded by IModeler::ICreateBrepBody3.

## Signature

```csharp
Body ICreateBrepBody( 
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
CurveArray
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
)
```
## Parameters

- `Type` (System.Int32): 
- `NTopologies` (System.Int32): 
- `Topologies` (System.Int32): 
- `EdgeTolArray` (System.Double): 
- `VertexTolArray` (System.Double): 
- `PointArray` (System.Double): 
- `CurveArray` (Curve): 
- `SurfaceArray` (Surface): 
- `NRelations` (System.Int32): 
- `Parents` (System.Int32): 
- `Children` (System.Int32): 
- `Senses` (System.Int32): 

## Return Value

Unknown.