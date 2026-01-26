---
type: method
interface: IMassPropertyOverrideOptions
member: GetOverridePrincipalAxesOrientation
returns: System.Object
parameters:
  -
    name: Axis
    type: System.Int32
    description: One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.PrincipalAxesOfInertia
  - IMassPropertyOverrideOptions.OverrideMomentsOfInertia
  - IMassPropertyOverrideOptions.SetOverridePrincipalAxesOrientation
keywords:
  - getoverrideprincipalaxesorientation
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - principal
  - axes
  - orientation
  - axis
  - int32
  - object
---

# IMassPropertyOverrideOptions.GetOverridePrincipalAxesOrientation

Gets the override principal axis of inertia.

## Signature

```csharp
System.Object GetOverridePrincipalAxesOrientation( 
   System.Int32
Axis
)
```
## Parameters

- `Axis` (System.Int32): One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis

## Return Value

An array of three doubles of the x, y, and z coordinates of Axis

## See Also

- `IMassProperty2.PrincipalAxesOfInertia`
- `IMassPropertyOverrideOptions.OverrideMomentsOfInertia`
- `IMassPropertyOverrideOptions.SetOverridePrincipalAxesOrientation`