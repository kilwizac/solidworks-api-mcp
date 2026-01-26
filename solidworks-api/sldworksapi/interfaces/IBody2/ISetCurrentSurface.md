---
type: method
interface: IBody2
member: ISetCurrentSurface
returns: void
parameters:
  -
    name: SurfaceIn
    type: Surface
    description: Pointer to a surface , which might have been created using other surface creation routines, such as IModeler::ICreateCylindricalSurface2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.SetCurrentSurface
keywords:
  - temporary
  - bodies
  - isetcurrentsurface
  - ibody2
  - body2
  - current
  - surface
  - void
---

# IBody2.ISetCurrentSurface

Places an existing surface into a temporary body that is under construction.

## Signature

```csharp
void ISetCurrentSurface( 
   Surface
SurfaceIn
)
```
## Parameters

- `SurfaceIn` (Surface): Pointer to a surface , which might have been created using other surface creation routines, such as IModeler::ICreateCylindricalSurface2

## Return Value

Unknown.

## Remarks

This method is used with a set of related methods that construct a body from trimmed surfaces. This method takes an ISurface object created elsewhere and adds it to the temporary body object, which acts as a placeholder for the trimmed surfaces.
Follow calls to this method with one or more calls to the trimming-curve creation methods, such as
ISurface::AddTrimmingLoop2
. Then, trim the surface using
IBody2::CreateTrimmedSurface
. After you add all the surfaces to the body and trim appropriately, you can sew the body to create an imported SOLIDWORKS body feature using
IBody2::CreateBodyFromSurfaces
.

## See Also

- `IBody2.SetCurrentSurface`