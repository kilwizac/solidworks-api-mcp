---
type: property
interface: IMassProperty
member: SetOverrideMassValue
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
    name: Config_names
    type: System.Object
    description: Array of configuration names (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.ISetOverrideMassValue
  - IMassProperty.OverrideMass
keywords:
  - setoverridemassvalue
  - imassproperty
  - mass
  - override
  - value
  - double
  - config
  - option
  - int32
  - names
  - object
  - boolean
  - properties
  - vba
  - vb
  - net
readonly: null
---

# IMassProperty.SetOverrideMassValue

Overrides the mass of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetOverrideMassValue( 
   System.Double
Value
,
   System.Int32
Config_option
,
   System.Object
Config_names
)
```
## Parameters

- `Value` (System.Double): Override mass value (see Remarks )
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names (see Remarks )

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

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)

## See Also

- `IMassProperty.ISetOverrideMassValue`
- `IMassProperty.OverrideMass`