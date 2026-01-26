---
type: property
interface: IMassPropertyOverrideOptions
member: SetOverrideCenterOfMassValue
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Object
    description: Array of three doubles of the x, y, and z coordinates of the center of mass
  -
    name: CoordinateSystemName
    type: System.String
    description: Name of the coordinate system in which the center of mass is defined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty2.CenterOfMass
keywords:
  - setoverridecenterofmassvalue
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - center
  - value
  - object
  - coordinate
  - name
  - string
  - boolean
readonly: null
---

# IMassPropertyOverrideOptions.SetOverrideCenterOfMassValue

Overrides the calculated center of mass of the model currently being edited.

## Signature

```csharp
System.Boolean SetOverrideCenterOfMassValue( 
   System.Object
Value
,
   System.String
CoordinateSystemName
)
```
## Parameters

- `Value` (System.Object): Array of three doubles of the x, y, and z coordinates of the center of mass
- `CoordinateSystemName` (System.String): Name of the coordinate system in which the center of mass is defined

## Return Value

True if the center of mass is successfully overridden, false if not

## Remarks

This method is valid only if
IMassPropertyOverrideOptions::OverrideCenterOfMass
is set to true.

## See Also

- `IMassProperty2.CenterOfMass`