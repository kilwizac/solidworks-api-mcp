---
type: method
interface: ISurface
member: IGetOffsetSurfParams2
returns: System.Double
parameters:
  -
    name: BaseSurf
    type: Surface
    description: Base surface used to generate the offset surface
  -
    name: Sense
    type: System.Boolean
    description: If true, then the offset is in the direction of the original surface's normal; if false, then the offset is in the opposite direction of the original surface's normal
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.GetOffsetSurfParams2
keywords:
  - igetoffsetsurfparams2
  - isurface
  - surface
  - offset
  - surf
  - params2
  - base
  - sense
  - boolean
  - double
---

# ISurface.IGetOffsetSurfParams2

Gets the overall offset distance of this offset surface.

## Signature

```csharp
System.Double IGetOffsetSurfParams2( 
   out Surface
BaseSurf
,
   out System.Boolean
Sense
)
```
## Parameters

- `BaseSurf` (Surface): Base surface used to generate the offset surface
- `Sense` (System.Boolean): If true, then the offset is in the direction of the original surface's normal; if false, then the offset is in the opposite direction of the original surface's normal

## Return Value

Offset for the surface

## Remarks

This method can get a pointer to the base surface and its sense. Both BaseSurf and Sense parameters can be a NULL pointer.

## See Also

- `ISurface.GetOffsetSurfParams2`