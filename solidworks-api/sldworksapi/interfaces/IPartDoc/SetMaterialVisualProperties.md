---
type: method
interface: IPartDoc
member: SetMaterialVisualProperties
returns: System.Int32
parameters:
  -
    name: Properties
    type: MaterialVisualPropertiesData
    description: Material visual properties
  -
    name: ConfigOption
    type: System.Int32
    description: Configurations as defined in swInConfigurationOpts_e
  -
    name: ConfigNames
    type: System.Object
    description: Array of strings of the names of the configurations whose material visual properties to set
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetMaterialPropertyName2
  - IPartDoc.GetMaterialVisualProperties
  - IPartDoc.IMaterialPropertyValues
  - IPartDoc.MaterialIdName
  - IPartDoc.MaterialPropertyValues
  - IPartDoc.MaterialUserName
  - IPartDoc.SetMaterialPropertyName2
keywords:
  - properties
  - material
  - visual
  - parts
  - see
  - also
  - ipartdoc
  - materials
  - setmaterialvisualproperties
  - part
  - doc
  - data
  - config
  - option
  - int32
  - names
  - object
  - vba
  - vb
  - net
---

# IPartDoc.SetMaterialVisualProperties

Sets the material visual properties for the active configuration and any specified configurations of this part.

## Signature

```csharp
System.Int32 SetMaterialVisualProperties( 
   MaterialVisualPropertiesData
Properties
,
   System.Int32
ConfigOption
,
   System.Object
ConfigNames
)
```
## Parameters

- `Properties` (MaterialVisualPropertiesData): Material visual properties
- `ConfigOption` (System.Int32): Configurations as defined in swInConfigurationOpts_e
- `ConfigNames` (System.Object): Array of strings of the names of the configurations whose material visual properties to set

## Return Value

0 on success, non-0 on failure

## Remarks

ConfigNames is used only when ConfigOption is set to swSpecifyConfiguration. If a different value is specified for ConfigOption, then ConfigNames is ignored.
This method always affects the active configuration, regardless of the value specified for ConfigNames.

## Examples

- Get and Set Material Visual Properties (VBA) (Get_and_Set_Material_Visual_Properties_Example_VB.htm)
- Get and Set Material Visual Properties (VB.NET) (Get_and_Set_Material_Visual_Properties_Example_VBNET.htm)
- Get and Set Material Visual Properties (C#) (Get_and_Set_Material_Visual_Properties_Example_CSharp.htm)

## See Also

- `IPartDoc.GetMaterialPropertyName2`
- `IPartDoc.GetMaterialVisualProperties`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialIdName`
- `IPartDoc.MaterialPropertyValues`
- `IPartDoc.MaterialUserName`
- `IPartDoc.SetMaterialPropertyName2`