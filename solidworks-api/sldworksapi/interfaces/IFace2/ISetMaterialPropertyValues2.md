---
type: property
interface: IFace2
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
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IFace2.IGetMaterialPropertyValues2
  - IFace2.IMaterialPropertyValues
  - IFace2.IRemoveMaterialProperty2
  - IFace2.MaterialPropertyValues
  - IFace2.RemoveMaterialProperty2
  - IFace2.SetMaterialPropertyValues2
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
  - isetmaterialpropertyvalues2
  - face2
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

# IFace2.ISetMaterialPropertyValues2

Sets the material property values for this face.

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
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names of size Config_count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The material property values include the color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of the Material_values array of doubles is:
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
- `IFace2.IGetMaterialPropertyValues2`
- `IFace2.IMaterialPropertyValues`
- `IFace2.IRemoveMaterialProperty2`
- `IFace2.MaterialPropertyValues`
- `IFace2.RemoveMaterialProperty2`
- `IFace2.SetMaterialPropertyValues2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.SetMaterialPropertyValues2`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.SetMaterialPropertyValues`