---
type: property
interface: IModelDocExtension
member: IGetMaterialPropertyValues
returns: System.Double
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations for this component
  -
    name: Config_names
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names for this component VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.RemoveMaterialProperty
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - color
  - models
  - igetmaterialpropertyvalues
  - imodeldocextension
  - model
  - doc
  - extension
  - values
  - config
  - opt
  - int32
  - count
  - names
  - string
  - double
readonly: null
---

# IModelDocExtension.IGetMaterialPropertyValues

Gets the material properties for this model.

## Signature

```csharp
System.Double IGetMaterialPropertyValues( 
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
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names for this component VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Poitner to an array of material values for this component (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission.
The format of material_values is an array of doubles:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]
Valid values are from 0 to 1 for all variables. If material_values is all -1 values, then material property values were not assigned to the feature. Therefore, the feature will have the default properties in the user interface.

## See Also

- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.RemoveMaterialProperty`
- `IModelDocExtension.SetMaterialPropertyValues`