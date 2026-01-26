---
type: property
interface: IFeature
member: IGetMaterialPropertyValues2
returns: System.Double
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: Array of configuration names of size Config_count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.ISetMaterialPropertyValues2
  - IFeature.RemoveMaterialProperty2
  - IFeature.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - features
  - color
  - igetmaterialpropertyvalues2
  - ifeature
  - feature
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

# IFeature.IGetMaterialPropertyValues2

Gets the material property values for this feature in the specified configurations.

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

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): Array of configuration names of size Config_count

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are between 0.0 and 1.0, inclusive, for all material properties. If a return value is -1, then that material property was not set for this feature.
If you set Config_opt to swThisConfiguration or swAllConfiguration, then Config_names
is ignored.
The format of the returned array:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
* Config_count

## See Also

- `IFeature.GetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.RemoveMaterialProperty2`
- `IFeature.SetMaterialPropertyValues2`