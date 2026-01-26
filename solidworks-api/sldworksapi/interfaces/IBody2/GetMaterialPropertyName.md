---
type: property
interface: IBody2
member: GetMaterialPropertyName
returns: System.String
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration (see Remarks )
  -
    name: Database
    type: System.String
    description: Name of configuration (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialUserName2
  - IBody2.HasMaterialPropertyValues
  - IBody2.IGetMaterialPropertyValuesForFace
  - IBody2.IMaterialPropertyValues2
  - IBody2.IRemoveMaterialProperty
  - IBody2.MaterialPropertyValues2
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
keywords:
  - bodies
  - see
  - also
  - ibody2
  - material
  - getmaterialpropertyname
  - body2
  - name
  - config
  - string
  - database
  - vb
  - net
  - vba
readonly: null
---

# IBody2.GetMaterialPropertyName

Gets the names of the material database and the material for the specified configuration.

## Signature

```csharp
System.String GetMaterialPropertyName( 
   System.String
ConfigName
,
   out System.String
Database
)
```
## Parameters

- `ConfigName` (System.String): Name of configuration (see Remarks )
- `Database` (System.String): Name of configuration (see Remarks )

## Return Value

Name of material

## Remarks

This method gets the name of the material database and an entry in the material database that you need for the XML lookup.
Open the database as an XML stream and work with the XML API to get the data.
If...
Then...
Only the Default configuration exists for the part
Use "" for ConfigName
A material was not applied to the configuration
Database name and return value are blank

## Examples

- Set Material (C#) (Set_Material_Example_CSharp.htm)
- Set Material (VB.NET) (Set_Material_Example_VBNET.htm)
- Set Material (VBA) (Set_Material_Example_VB.htm)

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialUserName2`
- `IBody2.HasMaterialPropertyValues`
- `IBody2.IGetMaterialPropertyValuesForFace`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`