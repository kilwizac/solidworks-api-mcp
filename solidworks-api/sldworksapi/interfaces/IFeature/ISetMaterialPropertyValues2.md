---
type: property
interface: IFeature
member: ISetMaterialPropertyValues2
returns: void
parameters:
  -
    name: Material_values
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of material property values (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations (see Remarks )
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetMaterialPropertyValues2
  - IFeature.IGetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.RemoveMaterialProperty2
  - IFeature.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - features
  - color
  - isetmaterialpropertyvalues2
  - ifeature
  - feature
  - values2
  - values
  - double
  - config
  - opt
  - int32
  - count
  - names
  - string
  - void
readonly: null
---

# IFeature.ISetMaterialPropertyValues2

Sets the material property values for this feature in the specified configurations.

## Signature

```csharp
void ISetMaterialPropertyValues2( 
   ref System.Double
Material_values
,
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

- `Material_values` (System.Double): in-process, unmanaged C++: Pointer to an array of material property values (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations (see Remarks )
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The material properties are color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are between 0.0 and 1.0, inclusive, for all material properties.
If you set Config_opt to swThisConfiguration or swAllConfiguration, then Config_names
is ignored. If you set Config_opt to swAllConfiguration, use
IModelDoc2::GetConfigurationCount
to specify Config_count.
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
- `IFeature.IGetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.RemoveMaterialProperty2`
- `IFeature.SetMaterialPropertyValues2`