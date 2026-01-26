---
type: method
interface: IMassPropertyOverrideOptions
member: GetOverrideCenterOfMassValue
returns: System.Object
parameters:
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
  - IMassPropertyOverrideOptions.OverrideCenterOfMass
  - IMassPropertyOverrideOptions.SetOverrideCenterOfMassValue
keywords:
  - getoverridecenterofmassvalue
  - imasspropertyoverrideoptions
  - mass
  - override
  - options
  - center
  - value
  - coordinate
  - name
  - string
  - object
---

# IMassPropertyOverrideOptions.GetOverrideCenterOfMassValue

Gets the override center of mass.

## Signature

```csharp
System.Object GetOverrideCenterOfMassValue( 
   out System.String
CoordinateSystemName
)
```
## Parameters

- `CoordinateSystemName` (System.String): Name of the coordinate system in which the center of mass is defined

## Return Value

Array of three doubles of the x, y, and z coordinates of the center of mass

## See Also

- `IMassProperty2.CenterOfMass`
- `IMassPropertyOverrideOptions.OverrideCenterOfMass`
- `IMassPropertyOverrideOptions.SetOverrideCenterOfMassValue`