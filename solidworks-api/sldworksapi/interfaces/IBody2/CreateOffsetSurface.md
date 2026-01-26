---
type: method
interface: IBody2
member: CreateOffsetSurface
returns: System.Object
parameters:
  -
    name: SurfaceIn
    type: System.Object
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
  - IBody2.ICreateOffsetSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - offset
  - surfaces
  - createoffsetsurface
  - ibody2
  - body2
  - create
  - object
  - distance
  - double
---

# IBody2.CreateOffsetSurface

Creates a new surface offset from an existing surface.

## Signature

```csharp
System.Object CreateOffsetSurface( 
   System.Object
SurfaceIn
,
   System.Double
Distance
)
```
## Parameters

- `SurfaceIn` (System.Object): Surface from which to offset the new surface
- `Distance` (System.Double): Offset distance

## Return Value

Newly created offset surface

## See Also

- `IBody2.ICreateOffsetSurface`