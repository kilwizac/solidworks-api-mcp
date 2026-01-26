---
type: method
interface: IBody2
member: ICreatePlanarSurface
returns: Surface
parameters:
  -
    name: VRootPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: VNormal
    type: System.Object
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreatePlanarSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - planar
  - icreateplanarsurface
  - ibody2
  - body2
  - create
  - root
  - point
  - object
  - normal
---

# IBody2.ICreatePlanarSurface

Creates a new infinite planar surface.

## Signature

```csharp
Surface ICreatePlanarSurface( 
   System.Object
VRootPoint
,
   System.Object
VNormal
)
```
## Parameters

- `VRootPoint` (System.Object): Array of 3 doubles (x,y,z)
- `VNormal` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

New planar surface

## Remarks

You can use this method with:
A set of related functions that construct a body from trimmed surfaces.
Trimming curve creation routines (for example,
ISurface::IAddTrimmingLoop2
) to construct a trimmed surface.
To create a planar trimmed surface directly from the vertex points, see
IBody2::ICreatePlanarTrimSurfaceDLL
.
Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.CreatePlanarSurface`