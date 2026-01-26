---
type: method
interface: IMassPropertyOverrideOptions
member: SetOverridePrincipalMomentsOfInertia
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Object
    description: Array of three doubles of the principal moments of inertia: [ Px, Py, Pz ]
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.PrincipalMomentsOfInertia
keywords:
  - setoverrideprincipalmomentsofinertia
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - principal
  - moments
  - inertia
  - value
  - object
  - boolean
---

# IMassPropertyOverrideOptions.SetOverridePrincipalMomentsOfInertia

Overrides the calculated principal moments of inertia of the model currently being edited.

## Signature

```csharp
System.Boolean SetOverridePrincipalMomentsOfInertia( 
   System.Object
Value
)
```
## Parameters

- `Value` (System.Object): Array of three doubles of the principal moments of inertia: [ Px, Py, Pz ]

## Return Value

True if the prinicpal moments of inertia are successfully overridden, false if not

## Remarks

This method is valid only if
IMassPropertyOverrideOptions::OverrideMomentsOfInertia
is set to true.

## See Also

- `IMassProperty2.PrincipalMomentsOfInertia`