---
type: property
interface: IComponent2
member: GetMaterialPropertyValues2
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names for this component (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetModelMaterialPropertyValues
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IGetModelMaterialPropertyValues
  - IComponent2.MaterialPropertyValues
  - IComponent2.RemoveMaterialProperty2
  - IComponent2.SetMaterialPropertyValues2
keywords:
  - material
  - user
  - name
  - color
  - components
  - properties
  - getmaterialpropertyvalues2
  - icomponent2
  - component2
  - values2
  - config
  - opt
  - int32
  - names
  - object
readonly: null
---

# IComponent2.GetMaterialPropertyValues2

Gets the material properties for this component.

## Signature

```csharp
System.Object GetMaterialPropertyValues2( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names for this component (see Remarks )

## Return Value

The material properties values include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.

## Remarks

If you set Config_opt to swThisConfiguration or swAllConfiguration, then pass an empty Variant, Nothing, or any Variant because Config_names is ignored.
The format of material_values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
Valid values are from 0 to 1 for all variables. If material_values is all -1 values, then material property values were not assigned to the component. Therefore, the component will have the default properties in the user interface.

## See Also

- `IComponent2.GetModelMaterialPropertyValues`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IGetModelMaterialPropertyValues`
- `IComponent2.MaterialPropertyValues`
- `IComponent2.RemoveMaterialProperty2`
- `IComponent2.SetMaterialPropertyValues2`