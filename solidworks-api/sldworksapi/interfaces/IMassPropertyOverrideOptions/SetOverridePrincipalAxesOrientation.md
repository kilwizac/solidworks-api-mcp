---
type: method
interface: IMassPropertyOverrideOptions
member: SetOverridePrincipalAxesOrientation
returns: System.Boolean
parameters:
  -
    name: Axis
    type: System.Int32
    description: One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
  -
    name: Value
    type: System.Object
    description: An array of three doubles of the x, y, and z coordinates of Axis
  -
    name: AutoCorrect
    type: System.Boolean
    description: True to generate orthogonal axes, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.PrincipalAxesOfInertia
keywords:
  - setoverrideprincipalaxesorientation
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - principal
  - axes
  - orientation
  - axis
  - int32
  - value
  - object
  - auto
  - correct
  - boolean
---

# IMassPropertyOverrideOptions.SetOverridePrincipalAxesOrientation

Overrides the orientation of the specified principal axis of inertia of the model currently being edited.

## Signature

```csharp
System.Boolean SetOverridePrincipalAxesOrientation( 
   System.Int32
Axis
,
   System.Object
Value
,
   System.Boolean
AutoCorrect
)
```
## Parameters

- `Axis` (System.Int32): One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
- `Value` (System.Object): An array of three doubles of the x, y, and z coordinates of Axis
- `AutoCorrect` (System.Boolean): True to generate orthogonal axes, false to not

## Return Value

True if the principal axis orientation successfully overridden, false if not

## Remarks

This method is valid only if
IMassPropertyOverrideOptions::OverrideMomentsOfInertia
is set to true.

## See Also

- `IMassProperty2.PrincipalAxesOfInertia`