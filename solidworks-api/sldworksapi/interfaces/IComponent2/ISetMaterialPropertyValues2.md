---
type: property
interface: IComponent2
member: ISetMaterialPropertyValues2
returns: void
parameters:
  -
    name: Material_values
    type: System.Double
    description: Array of doubles of size 9 (see Remarks )
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
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IMaterialPropertyValues
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.MaterialPropertyValues
  - IComponent2.RemoveMaterialProperty2
  - IComponent2.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - color
  - components
  - isetmaterialpropertyvalues2
  - icomponent2
  - component2
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

# IComponent2.ISetMaterialPropertyValues2

Sets the material properties for this component.

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

- `Material_values` (System.Double): Array of doubles of size 9 (see Remarks )
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The material property values include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of Material_values is an array of doubles:
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

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.MaterialPropertyValues`
- `IComponent2.RemoveMaterialProperty2`
- `IComponent2.SetMaterialPropertyValues2`