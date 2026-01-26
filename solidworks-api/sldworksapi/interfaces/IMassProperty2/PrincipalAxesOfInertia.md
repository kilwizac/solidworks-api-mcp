---
type: property
interface: IMassProperty2
member: PrincipalAxesOfInertia
returns: System.Object
parameters:
  -
    name: Axis
    type: System.Int32
    description: 0 = x axis 1 = y axis 2 = z axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetMomentOfInertia
  - IMassProperty2.PrincipalMomentsOfInertia
  - IMassPropertyOverrideOptions.GetOverridePrincipalAxesOrientation
  - IMassPropertyOverrideOptions.SetOverridePrincipalAxesOrientation
keywords:
  - principalaxesofinertia
  - imassproperty2
  - mass
  - property2
  - principal
  - axes
  - inertia
  - axis
  - int32
  - object
readonly: true
---

# IMassProperty2.PrincipalAxesOfInertia

Gets the principal axis of inertia for the specified axis.

## Signature

```csharp
System.Object PrincipalAxesOfInertia( 
   System.Int32
Axis
) {get;}
```
## Parameters

- `Axis` (System.Int32): 0 = x axis 1 = y axis 2 = z axis

## Return Value

Zero-based array of size 3 (see Remarks )

## Remarks

This method returns:
A vector that represents the specified Axis: lx, ly, or lz.
Metric units unless explicitly specified otherwise.
If
IMassPropertyOverrideOptions::OverrideMomentsOfInertia
is true or
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## See Also

- `IMassProperty2.GetMomentOfInertia`
- `IMassProperty2.PrincipalMomentsOfInertia`
- `IMassPropertyOverrideOptions.GetOverridePrincipalAxesOrientation`
- `IMassPropertyOverrideOptions.SetOverridePrincipalAxesOrientation`