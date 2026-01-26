---
type: property
interface: IModelDocExtension
member: RemoveMaterialProperty
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configurations
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
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - removematerialproperty
  - imodeldocextension
  - model
  - doc
  - extension
  - remove
  - config
  - opt
  - int32
  - names
  - object
  - boolean
readonly: null
---

# IModelDocExtension.RemoveMaterialProperty

Removes material properties from this model.

## Signature

```csharp
System.Boolean RemoveMaterialProperty( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configurations

## Return Value

True if material properties successfully removed, false if not

## Remarks

This method:
is intended to be used on features that have a changed material property value, for example, color.
does not remove material. To remove material, call
IPartDoc::SetMaterialPropertyName2
, passing an empty string to the Name parameter.

## See Also

- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.HasMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.IRemoveMaterialProperty`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.SetMaterialPropertyValues`