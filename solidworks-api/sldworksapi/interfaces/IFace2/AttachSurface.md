---
type: method
interface: IFace2
member: AttachSurface
returns: System.Boolean
parameters:
  -
    name: SurfIn
    type: Surface
    description: Surface to attach to face
  -
    name: SenseIn
    type: System.Boolean
    description: True if surface normal and face normal are in the same direction, false if surface normal and face normal are in opposite direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.GetSurface
  - IFace2.HasTextureCoordinates
  - IFace2.IGetSurface
keywords:
  - attach
  - surface
  - see
  - also
  - isurface
  - attachsurface
  - iface2
  - face2
  - surf
  - sense
  - boolean
---

# IFace2.AttachSurface

Attaches a surface to this face.

## Signature

```csharp
System.Boolean AttachSurface( 
   Surface
SurfIn
,
   System.Boolean
SenseIn
)
```
## Parameters

- `SurfIn` (Surface): Surface to attach to face
- `SenseIn` (System.Boolean): True if surface normal and face normal are in the same direction, false if surface normal and face normal are in opposite direction

## Return Value

True if surface is attached to face, false if not

## Remarks

To detach surfaces from faces, use
IFace2::DetachSurface
. Neither IFace2::AttachSurface nor IFace2::DetachSurface affect body topology.

## See Also

- `IFace2.GetSurface`
- `IFace2.HasTextureCoordinates`
- `IFace2.IGetSurface`