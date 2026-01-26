---
type: property
interface: IComponent2
member: SetMaterialPropertyValues2
returns: void
parameters:
  -
    name: Material_values
    type: System.Object
    description: Array of material values for this component (see Remarks )
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names for this component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.HasMaterialPropertyValues
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IMaterialPropertyValues
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.ISetMaterialPropertyValues2
  - IComponent2.MaterialPropertyValues
  - IComponent2.RemoveMaterialProperty2
keywords:
  - material
  - components
  - properties
  - color
  - setmaterialpropertyvalues2
  - icomponent2
  - component2
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

# IComponent2.SetMaterialPropertyValues2

Sets the material properties for this component.

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

- `Material_values` (System.Object): Array of material values for this component (see Remarks )
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names for this component

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
- `IComponent2.HasMaterialPropertyValues`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.ISetMaterialPropertyValues2`
- `IComponent2.MaterialPropertyValues`
- `IComponent2.RemoveMaterialProperty2`