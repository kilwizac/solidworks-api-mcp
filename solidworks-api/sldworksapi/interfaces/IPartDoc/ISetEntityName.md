---
type: method
interface: IPartDoc
member: ISetEntityName
returns: System.Boolean
parameters:
  -
    name: Entity
    type: Entity
    description: Entity
  -
    name: StringValue
    type: System.String
    description: Name of the entity
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
  - IPartDoc.IGetEntityName
  - IPartDoc.IGetNamedEntities
  - IPartDoc.SetEntityName
keywords:
  - entity
  - see
  - also
  - ientity
  - name
  - isetentityname
  - ipartdoc
  - part
  - doc
  - string
  - value
  - boolean
---

# IPartDoc.ISetEntityName

Sets the name of the entity if the entity does not have a name.

## Signature

```csharp
System.Boolean ISetEntityName( 
   Entity
Entity
,
   System.String
StringValue
)
```
## Parameters

- `Entity` (Entity): Entity
- `StringValue` (System.String): Name of the entity

## Return Value

True if name is set successfully, false if not

## Remarks

If the entity already has a name, then this method does not change the name and returns false.
This behavior is intended to prevent a program from accidentally renaming an entity that is referenced in some other location. For example, if an assembly contains a mate to a face on a part, then a name is automatically assigned to that face. If you were to change that name, then there is no guarantee that the mate is still valid. Therefore, when using entity names, you should first check to see if the entity is already named, and, if so, use the existing name. If no name exists for the entity, then you can name the entity.
You can explicitly delete an entity name using the
IPartDoc::DeleteEntityName
or
IPartDoc::IDeleteEntityName
method. You then have the option of renaming the item or using that name elsewhere. The method was provided because the action is already available in the core SOLIDWORKS Design software. However, you should recognize the possibility of reference failures as described.

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.SetEntityName`