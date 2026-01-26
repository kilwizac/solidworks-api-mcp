---
type: property
interface: IModelDocExtension
member: ISetMaterialPropertyValues
returns: void
parameters:
  -
    name: Material_values
    type: System.Double
    description: Array of doubles of size 9 of material property values (see Remarks )
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configuration names
  -
    name: Config_names
    type: System.String
    description: Array of configuration names of size Config_count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.RemoveMaterialProperty
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - color
  - models
  - isetmaterialpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
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

# IModelDocExtension.ISetMaterialPropertyValues

Sets the material property values for this model document.

## Signature

```csharp
void ISetMaterialPropertyValues( 
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

- `Material_values` (System.Double): Array of doubles of size 9 of material property values (see Remarks )
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configuration names
- `Config_names` (System.String): Array of configuration names of size Config_count

## Return Value

Unknown.

## Remarks

The material property values include color (R,G,B), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
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

- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.RemoveMaterialProperty`
- `IModelDocExtension.SetMaterialPropertyValues`