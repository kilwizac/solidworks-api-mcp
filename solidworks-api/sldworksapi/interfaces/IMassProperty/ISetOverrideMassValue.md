---
type: method
interface: IMassProperty
member: ISetOverrideMassValue
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: Override mass value (see Remarks )
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
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.OverrideMass
  - IMassProperty.SetOverrideMassValue
keywords:
  - isetoverridemassvalue
  - imassproperty
  - mass
  - override
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

# IMassProperty.ISetOverrideMassValue

Overrides the mass of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean ISetOverrideMassValue( 
   System.Double
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

- `Value` (System.Double): Override mass value (see Remarks )
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_numbers` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_numbers (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the mass value is overridden, false if not

## Remarks

If...
Then...
You are editing a subcomponent
you are overriding the mass for this subcomponent and not for the top-level model.
Value > 0
Value < 0
mass is overridden.
mass is calculated.
Config_option =
swInConfigurationOpts_e
.swSpecifyConfiguration
Config_names is used.

## See Also

- `IMassProperty.OverrideMass`
- `IMassProperty.SetOverrideMassValue`