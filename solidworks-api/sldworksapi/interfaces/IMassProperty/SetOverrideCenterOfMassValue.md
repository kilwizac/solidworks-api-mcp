---
type: property
interface: IMassProperty
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
  -
    name: Config_option
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.ISetOverrideCenterOfMassValue
  - IMassProperty.OverrideCenterOfMass
keywords:
  - setoverridecenterofmassvalue
  - imassproperty
  - mass
  - override
  - center
  - value
  - object
  - coordinate
  - name
  - string
  - config
  - option
  - int32
  - names
  - boolean
  - properties
  - vba
  - vb
  - net
readonly: null
---

# IMassProperty.SetOverrideCenterOfMassValue

Overrides the center of mass of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetOverrideCenterOfMassValue( 
   System.Object
Value
,
   System.String
CoordinateSystemName
,
   System.Int32
Config_option
,
   System.Object
Config_names
)
```
## Parameters

- `Value` (System.Object): Array of three doubles of the x, y, and z coordinates of the center of mass
- `CoordinateSystemName` (System.String): Name of the coordinate system in which the center of mass is defined
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if the center of mass is overridden, false if not

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)

## See Also

- `IMassProperty.ISetOverrideCenterOfMassValue`
- `IMassProperty.OverrideCenterOfMass`