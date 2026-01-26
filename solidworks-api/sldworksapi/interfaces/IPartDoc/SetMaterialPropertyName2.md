---
type: property
interface: IPartDoc
member: SetMaterialPropertyName2
returns: void
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
  -
    name: Database
    type: System.String
    description: Name of the material database (see Remarks )
  -
    name: Name
    type: System.String
    description: Name of material (see Remarks )
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
  - IPartDoc.SetMaterialVisualProperties
keywords:
  - material
  - properties
  - parts
  - see
  - also
  - ipartdoc
  - materials
  - remove
  - setmaterialpropertyname2
  - part
  - doc
  - name2
  - config
  - name
  - string
  - database
  - void
  - visual
  - vba
  - vb
  - net
readonly: null
---

# IPartDoc.SetMaterialPropertyName2

Sets the name of the material property for the specified configuration.

## Signature

```csharp
void SetMaterialPropertyName2( 
   System.String
ConfigName
,
   System.String
Database
,
   System.String
Name
)
```
## Parameters

- `ConfigName` (System.String): Name of configuration
- `Database` (System.String): Name of the material database (see Remarks )
- `Name` (System.String): Name of material (see Remarks )

## Return Value

Unknown.

## Remarks

This method only supports parts.
Click
Tools > Options > System Options > File Locations > Material Databases
to verify that a folder for Database is specified.
If Database is an empty string, then the default
sldmaterials
is used. Otherwise, specify the material database file name with the
.sldmat
filename extension. For example:
PartDoc.SetMaterialPropertyName2 "AddHoles", "solidworks materials.sldmat", "Alloy Steel"
- or -
PartDoc.SetMaterialPropertyName2 "AddHoles", "c:\Program Files\SOLIDWORKS\lang\english\sldmaterials\solidworks materials.sldmat", "Alloy Steel"
To remove a material, pass an empty string to Name.

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
- `IPartDoc.SetMaterialVisualProperties`