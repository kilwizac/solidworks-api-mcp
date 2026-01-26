---
type: method
interface: IPartDoc
member: GetEntityName
returns: System.String
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.DeleteEntityName
  - IPartDoc.GetEntityByName
  - IPartDoc.GetNamedEntities
  - IPartDoc.GetNamedEntitiesCount
  - IPartDoc.IDeleteEntityName
  - IPartDoc.IGetEntityByName
  - IPartDoc.IGetEntityName
  - IPartDoc.IGetNamedEntities
  - IPartDoc.SetEntityName
keywords:
  - parts
  - see
  - also
  - ipartdoc
  - entities
  - name
  - entity
  - ientity
  - getentityname
  - part
  - doc
  - object
  - string
  - named
  - vba
  - select
  - rename
  - cross
  - break
  - feature
  - data
  - sheet
  - metal
  - vb
  - net
---

# IPartDoc.GetEntityName

Gets the name of the specified entity.

## Signature

```csharp
System.String GetEntityName( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Entity

## Return Value

Name of entity

## Remarks

Valid for faces, edges, and vertices only.
SOLIDWORKS suggests that you use the more comprehensive method
IModelDoc2::GetEntityName
or
IModelDoc2::IGetEntityName
instead of this method.

## Examples

- Get Named Entities (VBA) (Get_Named_Entities_Example_VB.htm)
- Select and Rename Object (VBA) (Create_and_Rename_Objects_Example_VB.htm)
- Get Cross Break Feature Data in Sheet Metal Part (C#) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_CSharp.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VB.NET) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VBNET.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VBA) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.SetEntityName`