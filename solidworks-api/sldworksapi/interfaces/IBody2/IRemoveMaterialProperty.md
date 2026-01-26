---
type: property
interface: IBody2
member: IRemoveMaterialProperty
returns: System.Boolean
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Config_count
    type: System.Int32
    description: Number of configurations in the part or assembly
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
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IMaterialPropertyValues2
  - IBody2.MaterialPropertyValues2
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
keywords:
  - material
  - bodies
  - see
  - also
  - ibody2
  - iremovematerialproperty
  - body2
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

# IBody2.IRemoveMaterialProperty

Removes the material property values (e.g., color) from the body in the specified configurations in parts and assemblies.

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

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_count` (System.Int32): Number of configurations in the part or assembly
- `Config_names` (System.String): Array of configuration names

## Return Value

True if the material is removed from the body, false if not

## Remarks

Before calling this method, call
IModelDoc2::GetConfigurationCount
to get the value for Config_Count.

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`