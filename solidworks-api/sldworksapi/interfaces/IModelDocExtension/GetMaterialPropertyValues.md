---
type: property
interface: IModelDocExtension
member: GetMaterialPropertyValues
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names for this component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.HasMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.RemoveMaterialProperty
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - color
  - models
  - getmaterialpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - values
  - config
  - opt
  - int32
  - names
  - object
readonly: null
---

# IModelDocExtension.GetMaterialPropertyValues

Gets the material properties for this model document.

## Signature

```csharp
System.Object GetMaterialPropertyValues( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names for this component

## Return Value

Array of material values for this component (see Remarks )

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of material_values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
Valid values are from 0 to 1 for all variables. If material_values is all -1 values, then material property values were not assigned to the feature. Therefore, the feature will have the default properties in the user interface.

## See Also

- `IModelDocExtension.HasMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.RemoveMaterialProperty`
- `IModelDocExtension.SetMaterialPropertyValues`