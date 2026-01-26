---
type: property
interface: IMassProperty2
member: CenterOfMass
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassPropertyOverrideOptions.GetOverrideCenterOfMassValue
  - IMassPropertyOverrideOptions.SetOverrideCenterOfMassValue
keywords:
  - centerofmass
  - imassproperty2
  - mass
  - property2
  - center
  - object
readonly: true
---

# IMassProperty2.CenterOfMass

Gets the center of mass of selected components/bodies.

## Signature

```csharp
System.Object CenterOfMass {get;}
```
## Parameters

None.

## Return Value

Array of three doubles of the x, y, and z coordinates of the center of mass

## Remarks

If
IMassPropertyOverrideOptions::OverrideCenterOfMass
is true or
IMassProperty2::IncludeHiddenBodiesOrComponents
is reset, then call
IMassProperty2::Recalculate
before using this property.

## See Also

- `IMassPropertyOverrideOptions.GetOverrideCenterOfMassValue`
- `IMassPropertyOverrideOptions.SetOverrideCenterOfMassValue`