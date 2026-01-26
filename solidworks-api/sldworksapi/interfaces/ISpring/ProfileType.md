---
type: property
interface: ISpring
member: ProfileType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISpring.BaseProfile
  - ISpring.GetProfilePoints
  - ISpring.SectionProfile
  - ISpring.SectionProfileCenter
keywords:
  - profiletype
  - ispring
  - spring
  - profile
  - type
  - int32
readonly: null
---

# ISpring.ProfileType

Gets or sets the section profile type of the spring.

## Signature

```csharp
System.Int32 ProfileType {get; set;}
```
## Parameters

None.

## Return Value

Section profile type as defined in swSpringProfileType_e

## Remarks

Use
ISpring::ProfileParameters
to set the spring's section profile parameters.

## See Also

- `ISpring.BaseProfile`
- `ISpring.GetProfilePoints`
- `ISpring.SectionProfile`
- `ISpring.SectionProfileCenter`