---
type: property
interface: IComponent2
member: RemoveMaterialProperty2
returns: System.Boolean
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
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.HasMaterialPropertyValues
  - IComponent2.IGetMaterialPropertyValues2
  - IComponent2.IMaterialPropertyValues
  - IComponent2.IRemoveMaterialProperty2
  - IComponent2.ISetMaterialPropertyValues2
  - IComponent2.MaterialPropertyValues
  - IComponent2.SetMaterialPropertyValues2
keywords:
  - removematerialproperty2
  - icomponent2
  - component2
  - remove
  - material
  - property2
  - config
  - opt
  - int32
  - names
  - object
  - boolean
  - properties
  - assembly
  - component
  - vba
readonly: null
---

# IComponent2.RemoveMaterialProperty2

Removes the appearance from the component.

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

- `Config_opt` (System.Int32): Configuration options as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names for this component

## Return Value

True if the component's appearance is removed, false if not

## Remarks

This method is intended to be used on a component whose appearance has changed; for example, color.

## Examples

- Remove Material Properties from Assembly Component (VBA) (Remove_Material_Properties_from_Assembly_Component_Example_VB.htm)

## See Also

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.HasMaterialPropertyValues`
- `IComponent2.IGetMaterialPropertyValues2`
- `IComponent2.IMaterialPropertyValues`
- `IComponent2.IRemoveMaterialProperty2`
- `IComponent2.ISetMaterialPropertyValues2`
- `IComponent2.MaterialPropertyValues`
- `IComponent2.SetMaterialPropertyValues2`