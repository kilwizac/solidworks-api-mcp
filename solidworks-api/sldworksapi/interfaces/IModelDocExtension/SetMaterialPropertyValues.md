---
type: property
interface: IModelDocExtension
member: SetMaterialPropertyValues
returns: void
parameters:
  -
    name: Material_property_values
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
  - core
  - ui
related:
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.HasMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.RemoveMaterialProperty
keywords:
  - material
  - properties
  - color
  - models
  - setmaterialpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - values
  - object
  - config
  - opt
  - int32
  - names
  - void
readonly: null
---

# IModelDocExtension.SetMaterialPropertyValues

Sets the material property values for this model document.

## Signature

```csharp
void SetMaterialPropertyValues( 
   System.Object
Material_property_values
,
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Material_property_values` (System.Object): Array of material property values
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

Unknown.

## Remarks

The material property values include color (R,G,B), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of Material_property_values is an array of doubles:
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
- `IModelDocExtension.HasMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.RemoveMaterialProperty`