---
type: property
interface: IModelDocExtension
member: IRemoveMaterialProperty
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration options as defined by swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations
  -
    name: Config_names
    type: System.String
    description: Array of configurations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetMaterialPropertyValues
  - IModelDocExtension.IGetMaterialPropertyValues
  - IModelDocExtension.ISetMaterialPropertyValues
  - IModelDocExtension.RemoveMaterialProperty
  - IModelDocExtension.SetMaterialPropertyValues
keywords:
  - material
  - properties
  - iremovematerialproperty
  - imodeldocextension
  - model
  - doc
  - extension
  - remove
  - config
  - opt
  - int32
  - count
  - names
  - string
  - boolean
readonly: null
---

# IModelDocExtension.IRemoveMaterialProperty

Removes material property values from this model.

## Signature

```csharp
System.Boolean IRemoveMaterialProperty( 
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
- `Config_count` (System.Int32): Number of configurations
- `Config_names` (System.String): Array of configurations

## Return Value

True if material property values are removed, false if not

## Remarks

This method is intended to be used on features that have a changed material property value, for example, color.

## See Also

- `IModelDocExtension.GetMaterialPropertyValues`
- `IModelDocExtension.IGetMaterialPropertyValues`
- `IModelDocExtension.ISetMaterialPropertyValues`
- `IModelDocExtension.RemoveMaterialProperty`
- `IModelDocExtension.SetMaterialPropertyValues`