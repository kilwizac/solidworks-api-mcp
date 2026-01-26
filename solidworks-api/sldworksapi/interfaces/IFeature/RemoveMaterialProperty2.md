---
type: property
interface: IFeature
member: RemoveMaterialProperty2
returns: System.Boolean
parameters:
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
  - features
related:
  - IFeature.GetMaterialPropertyValues2
  - IFeature.HasMaterialPropertyValues
  - IFeature.IGetMaterialPropertyValues2
  - IFeature.IRemoveMaterialProperty2
  - IFeature.ISetMaterialPropertyValues2
  - IFeature.SetMaterialPropertyValues2
keywords:
  - material
  - properties
  - features
  - removematerialproperty2
  - ifeature
  - feature
  - remove
  - property2
  - config
  - opt
  - int32
  - names
  - object
  - boolean
readonly: null
---

# IFeature.RemoveMaterialProperty2

Removes material property values from this feature.

## Signature

```csharp
System.Boolean RemoveMaterialProperty2( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

True if material property values are removed, false if not

## Remarks

This method is intended to be used on features that have a changed material property value, for example, color.

## See Also

- `IFeature.GetMaterialPropertyValues2`
- `IFeature.HasMaterialPropertyValues`
- `IFeature.IGetMaterialPropertyValues2`
- `IFeature.IRemoveMaterialProperty2`
- `IFeature.ISetMaterialPropertyValues2`
- `IFeature.SetMaterialPropertyValues2`