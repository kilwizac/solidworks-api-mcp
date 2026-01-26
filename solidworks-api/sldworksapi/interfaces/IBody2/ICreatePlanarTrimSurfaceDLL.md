---
type: method
interface: IBody2
member: ICreatePlanarTrimSurfaceDLL
returns: void
parameters:
  -
    name: VertexCount
    type: System.Int32
    description: Number of vertices
  -
    name: Points
    type: System.Double
    description: Pointer to an array of doubles describing the points for the surface; trim curves are automatically created between each sequential vertex
  -
    name: Normal
    type: System.Double
    description: Pointer to an array of normal vectors for the surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreatePlanarTrimSurfaceDLL
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - planar
  - icreateplanartrimsurfacedll
  - ibody2
  - body2
  - create
  - trim
  - dll
  - vertex
  - count
  - int32
  - points
  - double
  - normal
  - void
---

# IBody2.ICreatePlanarTrimSurfaceDLL

Creates a planar trim surface for this body.

## Signature

```csharp
void ICreatePlanarTrimSurfaceDLL( 
   System.Int32
VertexCount
,
   ref System.Double
Points
,
   ref System.Double
Normal
)
```
## Parameters

- `VertexCount` (System.Int32): Number of vertices
- `Points` (System.Double): Pointer to an array of doubles describing the points for the surface; trim curves are automatically created between each sequential vertex
- `Normal` (System.Double): Pointer to an array of normal vectors for the surface

## Return Value

Unknown.

## Remarks

You can use this method instead of
IBody2:CreateTrimmedSurface
,
IBody2::ICreatePlanarSurface
, and
ISurface::IAddTrimmingLoop2
.

## See Also

- `IBody2.CreatePlanarTrimSurfaceDLL`