---
type: property
interface: IFace2
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
    description: Array of configuration names (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.HasMaterialPropertyValues
  - IFace2.IGetMaterialPropertyValues2
  - IFace2.IMaterialPropertyValues
  - IFace2.IRemoveMaterialProperty2
  - IFace2.ISetMaterialPropertyValues2
  - IFace2.MaterialPropertyValues
  - IFace2.RemoveMaterialProperty2
  - IFace2.SetMaterialPropertyValues2
  - IFeature.GetMaterialPropertyValues2
  - IFeature.IGetMaterialPropertyValues2
  - IModelDoc2.IMaterialPropertyValues
  - IModelDoc2.MaterialPropertyValues
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IPartDoc.IMaterialPropertyValues
  - IPartDoc.MaterialPropertyValues
keywords:
  - material
  - properties
  - face
  - see
  - also
  - iface2
  - faces
  - color
  - getmaterialpropertyvalues2
  - face2
  - values2
  - config
  - opt
  - int32
  - names
  - object
readonly: null
---

# IFace2.GetMaterialPropertyValues2

Gets the material property values for this face.

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
- `Config_names` (System.Object): Array of configuration names (see Remarks )

## Return Value

Array of material property values of the material for this face (see Remarks )

## Remarks

The material property values returned include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
If you set Config_opt to swThisConfiguration or swAllConfiguration, then pass Nothing because Config_names is ignored.
The format of material_values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]

## See Also

- `IFace2.HasMaterialPropertyValues`
- `IFace2.IGetMaterialPropertyValues2`
- `IFace2.IMaterialPropertyValues`
- `IFace2.IRemoveMaterialProperty2`
- `IFace2.ISetMaterialPropertyValues2`
- `IFace2.MaterialPropertyValues`
- `IFace2.RemoveMaterialProperty2`
- `IFace2.SetMaterialPropertyValues2`
- `IFeature.GetMaterialPropertyValues2`
- `IFeature.IGetMaterialPropertyValues2`
- `IModelDoc2.IMaterialPropertyValues`
- `IModelDoc2.MaterialPropertyValues`
- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialPropertyValues`