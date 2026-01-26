---
type: method
interface: ISldWorks
member: GetMaterialDatabases
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetMaterialDatabaseCount
  - ISldWorks.GetMaterialSchemaPathName
  - ISldWorks.IGetMaterialDatabases
keywords:
  - database
  - materials
  - material
  - getmaterialdatabases
  - isldworks
  - sld
  - works
  - databases
  - object
  - xml
  - schema
  - file
  - names
  - vba
  - paths
  - document
  - vb
  - net
---

# ISldWorks.GetMaterialDatabases

Gets the names of the material databases.

## Signature

```csharp
System.Object GetMaterialDatabases()
```
## Parameters

None.

## Return Value

Array of strings of the names of the material databases

## Remarks

Material database names must be unique. Do not re-use the name of a material database.

## Examples

- Get Material Database and XML Schema File Names (VBA) (Get_Material_Database_and_XML_Schema_File_Names_Example_VB.htm)
- Get Material Database Paths of Document (VBA) (Get_Material_Database_Paths_of_Document_Example_VB.htm)
- Set Material (C#) (Set_Material_Example_CSharp.htm)
- Set Material (VB.NET) (Set_Material_Example_VBNET.htm)
- Set Material (VBA) (Set_Material_Example_VB.htm)

## See Also

- `ISldWorks.GetMaterialDatabaseCount`
- `ISldWorks.GetMaterialSchemaPathName`
- `ISldWorks.IGetMaterialDatabases`