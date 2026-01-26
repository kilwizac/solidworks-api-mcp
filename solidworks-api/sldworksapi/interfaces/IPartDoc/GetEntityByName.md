---
type: method
interface: IPartDoc
member: GetEntityByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of entity
  -
    name: EntityType
    type: System.Int32
    description: Entity type as defined in swSelectType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.DeleteEntityName
  - IPartDoc.GetEntityName
  - IPartDoc.GetNamedEntities
  - IPartDoc.GetNamedEntitiesCount
  - IPartDoc.IDeleteEntityName
  - IPartDoc.IGetEntityByName
  - IPartDoc.IGetEntityName
  - IPartDoc.IGetNamedEntities
  - IPartDoc.SetEntityName
keywords:
  - entity
  - see
  - also
  - ientity
  - name
  - parts
  - ipartdoc
  - entities
  - getentitybyname
  - part
  - doc
  - string
  - type
  - int32
  - object
  - vba
---

# IPartDoc.GetEntityByName

Gets an entity (face, edge, vertex) by name.

## Signature

```csharp
System.Object GetEntityByName( 
   System.String
Name
,
   System.Int32
EntityType
)
```
## Parameters

- `Name` (System.String): Name of entity
- `EntityType` (System.Int32): Entity type as defined in swSelectType_e (see Remarks )

## Return Value

Entity

## Remarks

Valid entityType types:
swSelFACES
swSelEDGES
swSelVERTICES
Another way to obtain an
IEntity
object based on its name is to traverse the body topology (for example, use
IBody2::GetFirstFace
or
IBody2::IGetFirstFace
and so on) and use
IModelDoc2::GetEntityName
or
IModelDoc2::IGetEntityName
to determine when you have located the desired entity.
Because the names of entities are stored with the part document, this method resides on the
IPartDoc
object.

## Examples

- Get Entity By Name (VBA) (Get_Entity_By_Name_Example.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.SetEntityName`