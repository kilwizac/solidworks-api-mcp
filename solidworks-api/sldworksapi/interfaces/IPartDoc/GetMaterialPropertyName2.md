---
type: property
interface: IPartDoc
member: GetMaterialPropertyName2
returns: System.String
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration (see Remarks )
  -
    name: Database
    type: System.String
    description: Name of material database
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.GetMaterialVisualProperties
  - IPartDoc.IMaterialPropertyValues
  - IPartDoc.MaterialIdName
  - IPartDoc.MaterialPropertyValues
  - IPartDoc.MaterialUserName
  - IPartDoc.SetMaterialPropertyName2
  - IPartDoc.SetMaterialVisualProperties
keywords:
  - material
  - properties
  - parts
  - see
  - also
  - ipartdoc
  - materials
  - getmaterialpropertyname2
  - part
  - doc
  - name2
  - config
  - name
  - string
  - database
  - paths
  - document
  - vba
readonly: null
---

# IPartDoc.GetMaterialPropertyName2

Gets the names of the material database and the material for the specified configuration.

## Signature

```csharp
System.String GetMaterialPropertyName2( 
   System.String
ConfigName
,
   out System.String
Database
)
```
## Parameters

- `ConfigName` (System.String): Name of configuration (see Remarks )
- `Database` (System.String): Name of material database

## Return Value

Name of material

## Remarks

This method gets the name of the material database and an entry in the material database that you need for the XML lookup.
Open the database as an XML stream and work with the XML API to get the data.
If...
Then...
Only the default configuration exists for the part
Use "" for ConfigName
A material was not applied to the configuration
Database name and return value are blank

## Examples

- Get Material Database Paths of Document (VBA) (Get_Material_Database_Paths_of_Document_Example_VB.htm)
- Get Material (VBA) (Get_Material_Example_VB.htm)

## See Also

- `IPartDoc.GetMaterialVisualProperties`
- `IPartDoc.IMaterialPropertyValues`
- `IPartDoc.MaterialIdName`
- `IPartDoc.MaterialPropertyValues`
- `IPartDoc.MaterialUserName`
- `IPartDoc.SetMaterialPropertyName2`
- `IPartDoc.SetMaterialVisualProperties`