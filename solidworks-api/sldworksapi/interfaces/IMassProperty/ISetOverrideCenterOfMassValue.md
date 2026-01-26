---
type: method
interface: IMassProperty
member: ISetOverrideCenterOfMassValue
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of three doubles of the x, y, and z coordinates of the center of mass VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: CoordinateSystemName
    type: System.String
    description: Name of the coordinate system in which the center of mass is defined
  -
    name: Config_option
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_numbers
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.OverrideCenterOfMass
  - IMassProperty.SetOverrideCenterOfMassValue
keywords:
  - isetoverridecenterofmassvalue
  - imassproperty
  - mass
  - override
  - center
  - value
  - double
  - coordinate
  - name
  - string
  - config
  - option
  - int32
  - numbers
  - names
  - boolean
---

# IMassProperty.ISetOverrideCenterOfMassValue

Overrides the center of mass of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetOverrideCenterOfMassValue( 
   ref System.Double
Value
,
   System.String
CoordinateSystemName
,
   System.Int32
Config_option
,
   System.Int32
Config_numbers
,
   ref System.String
Config_names
)
```
## Parameters

- `Value` (System.Double): in-process, unmanaged C++: Pointer to an array of three doubles of the x, y, and z coordinates of the center of mass VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `CoordinateSystemName` (System.String): Name of the coordinate system in which the center of mass is defined
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_numbers` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the center of mass is overridden, false if not

## See Also

- `IMassProperty.OverrideCenterOfMass`
- `IMassProperty.SetOverrideCenterOfMassValue`