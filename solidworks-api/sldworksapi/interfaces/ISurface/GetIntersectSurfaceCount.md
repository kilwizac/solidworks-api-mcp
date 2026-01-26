---
type: method
interface: ISurface
member: GetIntersectSurfaceCount
returns: System.Int32
parameters:
  -
    name: OtherSurface
    type: Surface
    description: Other surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISurface.IIntersectSurface
  - ISurface.IntersectSurface
keywords:
  - getintersectsurfacecount
  - isurface
  - surface
  - intersect
  - count
  - other
  - int32
---

# ISurface.GetIntersectSurfaceCount

Gets the number of curves for a surface-surface intersection.

## Signature

```csharp
System.Int32 GetIntersectSurfaceCount( 
   Surface
OtherSurface
)
```
## Parameters

- `OtherSurface` (Surface): Other surface

## Return Value

Number of curves

## See Also

- `ISurface.IIntersectSurface`
- `ISurface.IntersectSurface`