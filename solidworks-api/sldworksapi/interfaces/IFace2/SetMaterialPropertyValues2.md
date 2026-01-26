---
type: property
interface: IFace2
member: SetMaterialPropertyValues2
returns: void
parameters:
  -
    name: Material_values
    type: System.Object
    description: Array of material property values (see Remarks )
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
  - documents
  - geometry
related:
  - IComponent2.ISetMaterialPropertyValues2
  - IComponent2.SetMaterialPropertyValues2
  - IFace2.GetMaterialPropertyValues2
  - IFace2.HasMaterialPropertyValues
  - IFace2.IGetMaterialPropertyValues2
  - IFace2.IMaterialPropertyValues
  - IFace2.IRemoveMaterialProperty2
  - IFace2.ISetMaterialPropertyValues2
  - IFace2.MaterialPropertyValues
  - IFace2.RemoveMaterialProperty2
  - IFeature.ISetMaterialPropertyValues2
  - IFeature.SetMaterialPropertyValues2
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - face
  - see
  - also
  - iface2
  - faces
  - color
  - setmaterialpropertyvalues2
  - face2
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

# IFace2.SetMaterialPropertyValues2

Sets the material property values for this face.

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

- `Material_values` (System.Object): Array of material property values (see Remarks )
- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

Unknown.

## Remarks

The material property values include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of the Material_values array is:
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

- `IComponent2.ISetMaterialPropertyValues2`
- `IComponent2.SetMaterialPropertyValues2`
- `IFace2.GetMaterialPropertyValues2`
- `IFace2.HasMaterialPropertyValues`
- `IFace2.IGetMaterialPropertyValues2`
- `IFace2.IMaterialPropertyValues`
- `IFace2.IRemoveMaterialProperty2`
- `IFace2.ISetMaterialPropertyValues2`
- `IFace2.MaterialPropertyValues`
- `IFace2.RemoveMaterialProperty2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.SetMaterialPropertyValues2`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.SetMaterialPropertyValues`