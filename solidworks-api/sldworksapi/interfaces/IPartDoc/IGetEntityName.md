---
type: method
interface: IPartDoc
member: IGetEntityName
returns: System.String
parameters:
  -
    name: Entity
    type: Entity
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
  - IPartDoc.GetEntityName
  - IPartDoc.GetNamedEntities
  - IPartDoc.GetNamedEntitiesCount
  - IPartDoc.IDeleteEntityName
  - IPartDoc.IGetEntityByName
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
  - igetentityname
  - part
  - doc
  - string
  - edge
  - data
---

# IPartDoc.IGetEntityName

Gets the name of the specified entity.

## Signature

```csharp
System.String IGetEntityName( 
   Entity
Entity
)
```
## Parameters

- `Entity` (Entity): Entity

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

- Get Edge Data By Name (C++) (Get_Edge_Data_By_Name_Example_CPlusPlus_COM.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.SetEntityName`