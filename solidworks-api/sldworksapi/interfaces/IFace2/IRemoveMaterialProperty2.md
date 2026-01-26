---
type: property
interface: IFace2
member: IRemoveMaterialProperty2
returns: System.Boolean
parameters:
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
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.RemoveMaterialProperty2
  - IFace2.GetMaterialPropertyValues2
  - IFace2.IGetMaterialPropertyValues2
  - IFace2.ISetMaterialPropertyValues2
  - IFace2.SetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.RemoveMaterialProperty2
  - IModelDocExtension.IRemoveMaterialProperty
  - IModelDocExtension.RemoveMaterialProperty
keywords:
  - material
  - properties
  - face
  - see
  - also
  - iface2
  - faces
  - iremovematerialproperty2
  - face2
  - remove
  - property2
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
readonly: null
---

# IFace2.IRemoveMaterialProperty2

Removes the material property values from this face.

## Signature

```csharp
System.Boolean IRemoveMaterialProperty2( 
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

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): Array of configuration names

## Return Value

True if material property values are removed, false if not

## Remarks

This method is intended to be used on faces with changed material properties, for example, color.

## See Also

- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.RemoveMaterialProperty2`
- `IFace2.GetMaterialPropertyValues2`
- `IFace2.IGetMaterialPropertyValues2`
- `IFace2.ISetMaterialPropertyValues2`
- `IFace2.SetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.RemoveMaterialProperty2`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.RemoveMaterialProperty`