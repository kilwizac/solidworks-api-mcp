---
type: method
interface: IMassProperty
member: IGetPrincipleMomentsOfInertia
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.GetMomentOfInertia
  - IMassProperty.IGetMomentOfInertia
  - IMassProperty.IGetPrincipleAxesOfInertia
  - IMassProperty.PrincipleAxesOfInertia
  - IMassProperty.PrincipleMomentsOfInertia
keywords:
  - igetprinciplemomentsofinertia
  - imassproperty
  - mass
  - principle
  - moments
  - inertia
  - double
---

# IMassProperty.IGetPrincipleMomentsOfInertia

Gets the principal moments of inertia for this model.

## Signature

```csharp
System.Double IGetPrincipleMomentsOfInertia()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of size 3 (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns
metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
Px, Py, Pz
]

## See Also

- `IMassProperty.GetMomentOfInertia`
- `IMassProperty.IGetMomentOfInertia`
- `IMassProperty.IGetPrincipleAxesOfInertia`
- `IMassProperty.PrincipleAxesOfInertia`
- `IMassProperty.PrincipleMomentsOfInertia`