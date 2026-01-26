---
type: method
interface: IMassProperty
member: SetOverridePrincipleMomentsOfInertia
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Object
    description: Array of three doubles of the principal moments of inertia: [ Px, Py, Pz ]
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
  - IMassProperty.ISetOverridePrincipleMomentsOfInertia
  - IMassProperty.OverrideMomentsOfInertia
keywords:
  - setoverrideprinciplemomentsofinertia
  - imassproperty
  - mass
  - override
  - principle
  - moments
  - inertia
  - value
  - object
  - config
  - option
  - int32
  - names
  - boolean
  - properties
  - vba
  - vb
  - net
---

# IMassProperty.SetOverridePrincipleMomentsOfInertia

Overrides the principal moments of inertia of the model currently being edited in this part or assembly document.

## Signature

```csharp
System.Boolean SetOverridePrincipleMomentsOfInertia( 
   System.Object
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

- `Value` (System.Object): Array of three doubles of the principal moments of inertia: [ Px, Py, Pz ]
- `Config_option` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names; valid only if Config_option = swInConfigurationOpts_e.swSpecifyConfiguration

## Return Value

True if the principal moments of inertia are overridden, false if not

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)

## See Also

- `IMassProperty.ISetOverridePrincipleMomentsOfInertia`
- `IMassProperty.OverrideMomentsOfInertia`