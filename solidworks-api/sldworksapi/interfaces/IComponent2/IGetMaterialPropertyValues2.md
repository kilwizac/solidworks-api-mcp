---
type: property
interface: IComponent2
member: IGetMaterialPropertyValues2
returns: System.Double
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations for this component
  -
    name: Config_names
    type: System.String
    description: Array of configuration names for this component (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.HasMaterialPropertyValues
  - IComponent2.IMaterialPropertyValues
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.ISetMaterialPropertyValues2
keywords:
  - color
  - components
  - material
  - properties
  - igetmaterialpropertyvalues2
  - icomponent2
  - component2
  - values2
  - config
  - opt
  - int32
  - count
  - names
  - string
  - double
readonly: null
---

# IComponent2.IGetMaterialPropertyValues2

Gets the material properties for this component.

## Signature

```csharp
System.Double IGetMaterialPropertyValues2( 
   System.Int32
Config_opt
,
   System.Int32
Config_count
,
   ref System.String
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): Array of configuration names for this component (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles of size 9 doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

If you set Config_opt to swThisConfiguration or swAllConfiguration, then pass an empty array because Config_names is ignored.
The format of material_values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
Valid values are from 0 to 1 for all variables. If material_values is all -1 values, then material property values were not assigned to the component. Therefore, the component will have the default properties in the user interface.

## See Also

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.HasMaterialPropertyValues`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.ISetMaterialPropertyValues2`