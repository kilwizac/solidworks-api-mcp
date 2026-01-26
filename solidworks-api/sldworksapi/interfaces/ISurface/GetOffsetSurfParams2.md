---
type: method
interface: ISurface
member: GetOffsetSurfParams2
returns: System.Double
parameters:
  -
    name: BaseSurf
    type: System.Object
    description: Base surface used to generate the offset surface
  -
    name: Sense
    type: System.Boolean
    description: If true, then the offset is in the direction of the original surface's normal, if fakse, then the offset is in the opposite direction of the original surface's normal
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IGetOffsetSurfParams2
keywords:
  - getoffsetsurfparams2
  - isurface
  - surface
  - offset
  - surf
  - params2
  - base
  - object
  - sense
  - boolean
  - double
---

# ISurface.GetOffsetSurfParams2

Gets the overall offset distance of this offset surface.

## Signature

```csharp
System.Double GetOffsetSurfParams2( 
   out System.Object
BaseSurf
,
   out System.Boolean
Sense
)
```
## Parameters

- `BaseSurf` (System.Object): Base surface used to generate the offset surface
- `Sense` (System.Boolean): If true, then the offset is in the direction of the original surface's normal, if fakse, then the offset is in the opposite direction of the original surface's normal

## Return Value

Offset for the surface

## Remarks

This method can get a pointer to the base surface and its sense. Both BaseSurf and Sense parameters can be a NULL pointer.

## See Also

- `ISurface.IGetOffsetSurfParams2`