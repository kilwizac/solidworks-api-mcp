---
type: property
interface: ISpring
member: ProfileParameters
returns: System.Object
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
  - profileparameters
  - ispring
  - spring
  - profile
  - parameters
  - object
readonly: null
---

# ISpring.ProfileParameters

Gets or sets the section profile parameters for the spring.

## Signature

```csharp
System.Object ProfileParameters {get; set;}
```
## Parameters

None.

## Return Value

Array of three doubles (see Remarks )

## Remarks

The values of the array depend on the type of profile.
Type of profile
Values
Circular
[
diameter, 0, 0
]
Square
[
height, width
]
Trapezoid
[
height, bottom, top
]
Use
ISpring::ProfileType
to set the spring's type of profile.

## See Also

- `ISpring.BaseProfile`
- `ISpring.GetProfilePoints`
- `ISpring.SectionProfile`
- `ISpring.SectionProfileCenter`