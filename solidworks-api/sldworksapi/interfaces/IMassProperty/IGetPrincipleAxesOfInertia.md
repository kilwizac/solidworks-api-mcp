---
type: method
interface: IMassProperty
member: IGetPrincipleAxesOfInertia
returns: System.Double
parameters:
  -
    name: Axis
    type: System.Int32
    description: 0 = X axis 1 = Y axis 2 = Z axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.GetMomentOfInertia
  - IMassProperty.IGetMomentOfInertia
  - IMassProperty.IGetPrincipleMomentsOfInertia
  - IMassProperty.PrincipleAxesOfInertia
  - IMassProperty.PrincipleMomentsOfInertia
keywords:
  - igetprincipleaxesofinertia
  - imassproperty
  - mass
  - principle
  - axes
  - inertia
  - axis
  - int32
  - double
---

# IMassProperty.IGetPrincipleAxesOfInertia

Gets the principal axes of inertia for this model.

## Signature

```csharp
System.Double IGetPrincipleAxesOfInertia( 
   System.Int32
Axis
)
```
## Parameters

- `Axis` (System.Int32): 0 = X axis 1 = Y axis 2 = Z axis

## Return Value

in-process, unmanaged C++: Pointer to an array of size 3 (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns:
a vector that represents the requested axis.
metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
lx, ly, lz
]

## See Also

- `IMassProperty.GetMomentOfInertia`
- `IMassProperty.IGetMomentOfInertia`
- `IMassProperty.IGetPrincipleMomentsOfInertia`
- `IMassProperty.PrincipleAxesOfInertia`
- `IMassProperty.PrincipleMomentsOfInertia`