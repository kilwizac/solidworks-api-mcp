---
type: property
interface: IFeature
member: SetMaterialPropertyValues2
returns: void
parameters:
  -
    name: Material_values
    type: System.Object
    description: Array of material property values
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetMaterialPropertyValues2
  - IFeature.HasMaterialPropertyValues
  - IFeature.IGetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.ISetMaterialPropertyValues2
  - IFeature.RemoveMaterialProperty2
keywords:
  - material
  - properties
  - features
  - color
  - setmaterialpropertyvalues2
  - ifeature
  - feature
  - values2
  - values
  - object
  - config
  - opt
  - int32
  - names
  - void
readonly: null
---

# IFeature.SetMaterialPropertyValues2

Sets the material property values for this feature in the specified configurations.

## Signature

```csharp
void SetMaterialPropertyValues2( 
   System.Object
Material_values
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Material_values` (System.Object): Array of material property values
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

Unknown.

## Remarks

The material properties are color (R,G,B values), reflectivity (ambient,
diffuse, specular, shininess), transparency, and emission. Valid values are between 0.0 and 1.0, inclusive, for all material properties.
If you set Config_opt to swThisConfiguration or swAllConfiguration, then Config_names
is ignored.
The format of the Material_values array:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
To see a color change, you must:
Specify
R
,
G
, and
B
, each with a value between 0.0 and 1.0, inclusive. (These values are internally multiplied by 255.0 to determine the RGB color.)
Specify the reflectivity properties (
Diffuse
,
Specular
,
Shininess
(1.0 - Specular spread/Blurriness)), each with a value greater than 0.0 and less than or equal to 1.0.
Specify
Ambient
,
Transparency
and
Emission
, each with a value between 0.0 and 1.0, inclusive.
Refresh the graphics area after calling this method.

## See Also

- `IFeature.GetMaterialPropertyValues2`
- `IFeature.HasMaterialPropertyValues`
- `IFeature.IGetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.RemoveMaterialProperty2`