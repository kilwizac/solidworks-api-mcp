---
type: method
interface: IBody2
member: CreateRevolutionSurface
returns: System.Object
parameters:
  -
    name: ProfileCurve
    type: System.Object
    description: Profile curve (generatrix)
  -
    name: AxisPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: AxisDirection
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: ProfileEndPtParams
    type: System.Object
    description: Array of 2 doubles (uStart, uEnd) (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateRevolutionSurface
keywords:
  - createrevolutionsurface
  - ibody2
  - body2
  - create
  - revolution
  - surface
  - profile
  - curve
  - object
  - axis
  - point
  - direction
  - end
  - pt
  - params
---

# IBody2.CreateRevolutionSurface

Creates a new surface of revolution.

## Signature

```csharp
System.Object CreateRevolutionSurface( 
   System.Object
ProfileCurve
,
   System.Object
AxisPoint
,
   System.Object
AxisDirection
,
   System.Object
ProfileEndPtParams
)
```
## Parameters

- `ProfileCurve` (System.Object): Profile curve (generatrix)
- `AxisPoint` (System.Object): Array of 3 doubles (x,y,z)
- `AxisDirection` (System.Object): Array of 3 doubles (x,y,z)
- `ProfileEndPtParams` (System.Object): Array of 2 doubles (uStart, uEnd) (see Remarks )

## Return Value

New surface of revolution

## Remarks

You can use this method with:
A set of related functions that construct a body from trimmed surfaces.
Trimming curve creation routines (for example,
ISurface::AddTrimmingLoop2
) to construct a trimmed surface of revolution.
If you pass ProfileEndPtParams to this method, the surface is trimmed in the axial direction; otherwise, it is infinite. SOLIDWORKS closes the surface periodic ( period [0,2PI]) in the direction of revolution. The ProfileEndPtParams parameters indicate to SOLIDWORKS which part of the curve to spin. These parameters are used only when the profile curve intersects the revolve axis. You must pass the parameters in ascending order. SOLIDWORKS extends the curve from the given parameter range to meet the revolve axis and spins this portion of curve.
You can also pass an empty VARIANT object to ProfileEndPtParams; it cannot be NULL. You must define a variable of type VARIANT.
Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.ICreateRevolutionSurface`