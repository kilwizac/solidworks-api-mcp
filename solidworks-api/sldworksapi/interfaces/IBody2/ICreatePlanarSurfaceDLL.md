---
type: method
interface: IBody2
member: ICreatePlanarSurfaceDLL
returns: Surface
parameters:
  -
    name: RootPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: Normal
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - planar
  - icreateplanarsurfacedll
  - ibody2
  - body2
  - create
  - dll
  - root
  - point
  - double
  - normal
---

# IBody2.ICreatePlanarSurfaceDLL

Creates a planar surface.

## Signature

```csharp
Surface ICreatePlanarSurfaceDLL( 
   ref System.Double
RootPoint
,
   ref System.Double
Normal
)
```
## Parameters

- `RootPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `Normal` (System.Double): Pointer to an array of 3 doubles (x,y,z)

## Return Value

Pointer to the new planar surface

## Remarks

Any existing object created by this method is destroyed if you call this method again.