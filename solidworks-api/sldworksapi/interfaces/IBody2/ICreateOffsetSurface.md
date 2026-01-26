---
type: method
interface: IBody2
member: ICreateOffsetSurface
returns: Surface
parameters:
  -
    name: SurfaceIn
    type: Surface
    description: Surface from which to offset the new surface
  -
    name: Distance
    type: System.Double
    description: Offset distance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreateOffsetSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - offset
  - surfaces
  - icreateoffsetsurface
  - ibody2
  - body2
  - create
  - distance
  - double
---

# IBody2.ICreateOffsetSurface

Creates a new surface offset from an existing surface.

## Signature

```csharp
Surface ICreateOffsetSurface( 
   Surface
SurfaceIn
,
   System.Double
Distance
)
```
## Parameters

- `SurfaceIn` (Surface): Surface from which to offset the new surface
- `Distance` (System.Double): Offset distance

## Return Value

Newly created offset surface

## See Also

- `IBody2.CreateOffsetSurface`