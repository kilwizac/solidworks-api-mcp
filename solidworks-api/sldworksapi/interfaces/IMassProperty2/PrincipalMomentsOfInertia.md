---
type: property
interface: IMassProperty2
member: PrincipalMomentsOfInertia
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetMomentOfInertia
  - IMassProperty2.PrincipalAxesOfInertia
  - IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue
  - IMassPropertyOverrideOptions.GetOverridePrincipalMomentsOfInertia
  - IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue
  - IMassPropertyOverrideOptions.SetOverridePrincipalMomentsOfInertia
keywords:
  - principalmomentsofinertia
  - imassproperty2
  - mass
  - property2
  - principal
  - moments
  - inertia
  - object
readonly: true
---

# IMassProperty2.PrincipalMomentsOfInertia

Gets the principal moments of inertia.

## Signature

```csharp
System.Object PrincipalMomentsOfInertia {get;}
```
## Parameters

None.

## Return Value

Array of size 3 (see Remarks )

## Remarks

This property returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles:
[
Px, Py, Pz
]
If
IMassPropertyOverrideOptions::OverrideMomentsOfInertia
is true or
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.GetMomentOfInertia`
- `IMassProperty2.PrincipalAxesOfInertia`
- `IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue`
- `IMassPropertyOverrideOptions.GetOverridePrincipalMomentsOfInertia`
- `IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue`
- `IMassPropertyOverrideOptions.SetOverridePrincipalMomentsOfInertia`