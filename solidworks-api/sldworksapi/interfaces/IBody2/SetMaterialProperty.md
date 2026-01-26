---
type: property
interface: IBody2
member: SetMaterialProperty
returns: System.Int32
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
  -
    name: Database
    type: System.String
    description: "solidworks material.sldmat" or "" or "custom materials.sldmat" (see Remarks )
  -
    name: MaterialName
    type: System.String
    description: Name of the SOLIDWORKS material to apply to the body (see Remarks )
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
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialUserName2
keywords:
  - material
  - bodies
  - see
  - also
  - ibody2
  - setmaterialproperty
  - body2
  - config
  - name
  - string
  - database
  - int32
  - vb
  - net
  - vba
readonly: null
---

# IBody2.SetMaterialProperty

Sets the material for this body.

## Signature

```csharp
System.Int32 SetMaterialProperty( 
   System.String
ConfigName
,
   System.String
Database
,
   System.String
MaterialName
)
```
## Parameters

- `ConfigName` (System.String): Name of configuration
- `Database` (System.String): "solidworks material.sldmat" or "" or "custom materials.sldmat" (see Remarks )
- `MaterialName` (System.String): Name of the SOLIDWORKS material to apply to the body (see Remarks )

## Return Value

Return status as defined by swBodyMaterialApplicationError_e

## Remarks

Click
Tools > Options > System Options > File Locations > Material Databases
to verify that a folder for Database is specified.
You can only use materials from a valid SOLIDWORKS materials database. You can specify either "solidworks materials.sldmat" or "" for the SOLIDWORKS Materials database or "custom materials.sldmat" for the Custom Materials database.
You can also find out the names of the materials in the materials database by opening the database as an XML stream and work with the XML API to get the data.

## Examples

- Set Material (C#) (Set_Material_Example_CSharp.htm)
- Set Material (VB.NET) (Set_Material_Example_VBNET.htm)
- Set Material (VBA) (Set_Material_Example_VB.htm)

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.HasMaterialPropertyValues`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialUserName2`