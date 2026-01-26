---
type: method
interface: IMassProperty
member: IGetMomentOfInertia
returns: System.Double
parameters:
  -
    name: WhereTaken
    type: System.Int32
    description: Coordinate system as defined in swMassPropertyMoment_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.GetMomentOfInertia
  - IMassProperty.IGetPrincipleAxesOfInertia
  - IMassProperty.IGetPrincipleMomentsOfInertia
  - IMassProperty.PrincipleAxesOfInertia
  - IMassProperty.PrincipleMomentsOfInertia
keywords:
  - igetmomentofinertia
  - imassproperty
  - mass
  - moment
  - inertia
  - where
  - taken
  - int32
  - double
---

# IMassProperty.IGetMomentOfInertia

Gets the moment of inertia at the specified coordinate system for this model.

## Signature

```csharp
System.Double IGetMomentOfInertia( 
   System.Int32
WhereTaken
)
```
## Parameters

- `WhereTaken` (System.Int32): Coordinate system as defined in swMassPropertyMoment_e

## Return Value

in-process, unmanaged C++: Pointer to an array of size 9 containing the moment of inertia calculations (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz
]

## See Also

- `IMassProperty.GetMomentOfInertia`
- `IMassProperty.IGetPrincipleAxesOfInertia`
- `IMassProperty.IGetPrincipleMomentsOfInertia`
- `IMassProperty.PrincipleAxesOfInertia`
- `IMassProperty.PrincipleMomentsOfInertia`