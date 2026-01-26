---
type: method
interface: IMassProperty
member: ISetOverridePrincipleAxesOrientation
returns: System.Boolean
parameters:
  -
    name: Axis
    type: System.Int32
    description: One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
  -
    name: Value
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of three doubles of the x, y, and z coordinates of the specified principal Axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IMassProperty.PrincipleAxesOfInertia
  - IMassProperty.SetOverridePrincipleAxesOrientation
keywords:
  - isetoverrideprincipleaxesorientation
  - imassproperty
  - mass
  - override
  - principle
  - axes
  - orientation
  - axis
  - int32
  - value
  - double
  - config
  - option
  - numbers
  - names
  - string
  - boolean
---

# IMassProperty.ISetOverridePrincipleAxesOrientation

Overrides the orientation of the specified principal axis of inertia for the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetOverridePrincipleAxesOrientation( 
   System.Int32
Axis
,
   ref System.Double
Value
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

- `Axis` (System.Int32): One of the following principal axes: 0 = X axis 1 = Y axis 2 = Z axis
- `Value` (System.Double): in-process, unmanaged C++: Pointer to an array of three doubles of the x, y, and z coordinates of the specified principal Axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_numbers` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if orientation of principal axis is overridden, false if not

## See Also

- `IMassProperty.PrincipleAxesOfInertia`
- `IMassProperty.SetOverridePrincipleAxesOrientation`