---
type: property
interface: IMassPropertyOverrideOptions
member: OverrideCenterOfMass
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.CenterOfMass
  - IMassPropertyOverrideOptions.GetOverrideCenterOfMassValue
keywords:
  - overridecenterofmass
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - center
  - boolean
readonly: null
---

# IMassPropertyOverrideOptions.OverrideCenterOfMass

Gets or sets whether to override the calculated center of mass for the model currently being edited.

## Signature

```csharp
System.Boolean OverrideCenterOfMass {get; set;}
```
## Parameters

None.

## Return Value

True to override the calculated center of mass, false to not

## Remarks

After setting this property to true, call
IMassPropertyOverrideOptions::SetOverrideCenterOfMassValue
.

## See Also

- `IMassProperty2.CenterOfMass`
- `IMassPropertyOverrideOptions.GetOverrideCenterOfMassValue`