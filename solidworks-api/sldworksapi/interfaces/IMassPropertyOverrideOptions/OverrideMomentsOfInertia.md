---
type: property
interface: IMassPropertyOverrideOptions
member: OverrideMomentsOfInertia
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.GetMomentOfInertia
  - IMassProperty2.PrincipalAxesOfInertia
  - IMassProperty2.PrincipalMomentsOfInertia
  - IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue
  - IMassPropertyOverrideOptions.GetOverridePrincipalAxesOrientation
  - IMassPropertyOverrideOptions.GetOverridePrincipalMomentsOfInertia
keywords:
  - overridemomentsofinertia
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - moments
  - inertia
  - boolean
  - imassproperty2
readonly: null
---

# IMassPropertyOverrideOptions.OverrideMomentsOfInertia

Gets or sets whether to override the calculated moments of inertia for the model currently being edited.

## Signature

```csharp
System.Boolean OverrideMomentsOfInertia {get; set;}
```
## Parameters

None.

## Return Value

True to override the calculated moments of inertia, false to not

## Remarks

After setting this property to true, call:
IMassPropertyOverrideOptions::SetOverrideMomentsOfInertiaValue
IMassPropertyOverrideOptions::SetOverridePrincipalAxesOrientation
IMassPropertyOverrideOptions::SetOverridePrincipalMomentsOfInertia

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)

## See Also

- `IMassProperty2.GetMomentOfInertia`
- `IMassProperty2.PrincipalAxesOfInertia`
- `IMassProperty2.PrincipalMomentsOfInertia`
- `IMassPropertyOverrideOptions.GetOverrideMomentsOfInertiaValue`
- `IMassPropertyOverrideOptions.GetOverridePrincipalAxesOrientation`
- `IMassPropertyOverrideOptions.GetOverridePrincipalMomentsOfInertia`