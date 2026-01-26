---
type: property
interface: IBody2
member: RemoveMaterialProperty
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
  - documents
  - geometry
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.HasMaterialPropertyValues
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IMaterialPropertyValues2
  - IBody2.IRemoveMaterialProperty
  - IBody2.MaterialPropertyValues2
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
keywords:
  - material
  - bodies
  - see
  - also
  - ibody2
  - removematerialproperty
  - body2
  - remove
  - config
  - opt
  - int32
  - names
  - object
  - boolean
  - properties
  - body
  - vb
  - net
  - vba
readonly: null
---

# IBody2.RemoveMaterialProperty

Removes the material property values (e.g., color) from the body in the specified configurations in parts and assemblies.

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

- `Config_opt` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

Unknown.

## Examples

- Remove Material Properties from Body (C#) (Remove_Material_From_Bodies_Example_CSharp.htm)
- Remove Material Properties from Body (VB.NET) (Remove_Material_From_Bodies_Example_VBNET.htm)
- Remove Material Properties from Body (VBA) (Remove_Material_From_Bodies_Example_VB.htm)

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.HasMaterialPropertyValues`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`