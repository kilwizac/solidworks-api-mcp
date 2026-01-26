---
type: property
interface: IFeature
member: GetMaterialPropertyValues2
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names for this component (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.HasMaterialPropertyValues
  - IFeature.IGetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.ISetMaterialPropertyValues2
  - IFeature.RemoveMaterialProperty2
  - IFeature.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - features
  - color
  - getmaterialpropertyvalues2
  - ifeature
  - feature
  - values2
  - config
  - opt
  - int32
  - names
  - object
  - vba
readonly: null
---

# IFeature.GetMaterialPropertyValues2

Gets the material property values for this feature in the specified configurations.

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

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names for this component (see Remarks )

## Return Value

Array of material property values for this component

## Remarks

The material property values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are between 0.0 and 1.0, inclusive, for all material properties. If a return value is -1, then that material property was not set for this feature.
If you set Config_opt to swThisConfiguration or swAllConfiguration, then Config_names
is ignored. The size of the returned array depends on how you specify Config_opt and Config_names. See the example.
The format of the returned array:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
*
number_of_configurations
where:
number_of_configurations
= number of configurations specified by Config_opt and Config_names

## Examples

- Get Material Properties (VBA) (Get_Material_Properties_Example_VB.htm)

## See Also

- `IFeature.HasMaterialPropertyValues`
- `IFeature.IGetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.RemoveMaterialProperty2`
- `IFeature.SetMaterialPropertyValues2`