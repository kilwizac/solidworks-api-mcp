---
type: property
interface: IMassProperty2
member: GetMomentOfInertia
returns: System.Object
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
  - IMassProperty2.PrincipalAxesOfInertia
  - IMassProperty2.PrincipalMomentsOfInertia
  - IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue
  - IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue
keywords:
  - getmomentofinertia
  - imassproperty2
  - mass
  - property2
  - moment
  - inertia
  - where
  - taken
  - int32
  - object
readonly: null
---

# IMassProperty2.GetMomentOfInertia

Gets the moment of inertia at the specified coordinate system for the selected bodies/components.

## Signature

```csharp
System.Object GetMomentOfInertia( 
   System.Int32
WhereTaken
)
```
## Parameters

- `WhereTaken` (System.Int32): Coordinate system as defined in swMassPropertyMoment_e

## Return Value

Array containing the moment of inertia calculations (see Remarks )

## Remarks

The return value is a 0-based array of nine doubles:
[
Lxx, Lxy, Lxz, Lyx, Lyy, Lyz, Lzx, Lzy, Lzz
]

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.PrincipalAxesOfInertia`
- `IMassProperty2.PrincipalMomentsOfInertia`
- `IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue`
- `IMassPropertyOverrideOptions.SetOverrideMomentsOfInertiaValue`