---
type: method
interface: IModeler
member: ICreateSheetFromSurface2
returns: Body2
parameters:
  -
    name: SurfaceIn
    type: Surface
    description: Surface from which you want to create this sheet body
  -
    name: UvRange
    type: System.Double
    description: Array of UV values for this surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateSheetFromFaces
  - IModeler.CreateSheetFromSurface
  - IModeler.ICreateSheetFromFaces
  - ISurface.CreateTrimmedSheet
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - icreatesheetfromsurface2
  - imodeler
  - modeler
  - create
  - surface2
  - surface
  - uv
  - range
  - double
  - body2
---

# IModeler.ICreateSheetFromSurface2

Creates a sheet (surface) body from a surface.

## Signature

```csharp
Body2 ICreateSheetFromSurface2( 
   Surface
SurfaceIn
,
   ref System.Double
UvRange
)
```
## Parameters

- `SurfaceIn` (Surface): Surface from which you want to create this sheet body
- `UvRange` (System.Double): Array of UV values for this surface

## Return Value

Newly created body

## See Also

- `IModeler.CreateSheetFromFaces`
- `IModeler.CreateSheetFromSurface`
- `IModeler.ICreateSheetFromFaces`
- `ISurface.CreateTrimmedSheet`