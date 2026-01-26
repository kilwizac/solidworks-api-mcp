---
type: property
interface: IComponent2
member: IRemoveMaterialProperty2
returns: System.Boolean
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
    description: Array of configuration names for this component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IMaterialPropertyValues
  - IComponent2.ISetMaterialPropertyValues2
  - IComponent2.MaterialPropertyValues
  - IComponent2.RemoveMaterialProperty2
  - IComponent2.SetMaterialPropertyValues2
keywords:
  - iremovematerialproperty2
  - icomponent2
  - component2
  - remove
  - material
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

# IComponent2.IRemoveMaterialProperty2

Removes material property values from the component.

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

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations for this component
- `Config_names` (System.String): Array of configuration names for this component

## Return Value

True if the material property values are removed, false if not

## Remarks

This method is intended to be used on components whose material property value has changed; for example, color.

## See Also

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.ISetMaterialPropertyValues2`
- `IComponent2.MaterialPropertyValues`
- `IComponent2.RemoveMaterialProperty2`
- `IComponent2.SetMaterialPropertyValues2`