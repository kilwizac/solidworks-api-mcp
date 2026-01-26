---
type: method
interface: IMassProperty
member: ISetOverridePrincipleMomentsOfInertia
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of three doubles of the principal moments of inertia: [ Px, Py, Pz ] VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IMassProperty.OverrideMomentsOfInertia
  - IMassProperty.SetOverridePrincipleMomentsOfInertia
keywords:
  - isetoverrideprinciplemomentsofinertia
  - imassproperty
  - mass
  - override
  - principle
  - moments
  - inertia
  - value
  - double
  - config
  - option
  - int32
  - numbers
  - names
  - string
  - boolean
---

# IMassProperty.ISetOverridePrincipleMomentsOfInertia

Overrides the principal moments of inertia of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetOverridePrincipleMomentsOfInertia( 
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

- `Value` (System.Double): in-process, unmanaged C++: Pointer to an array of three doubles of the principal moments of inertia: [ Px, Py, Pz ] VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_numbers` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IMassProperty.OverrideMomentsOfInertia`
- `IMassProperty.SetOverridePrincipleMomentsOfInertia`