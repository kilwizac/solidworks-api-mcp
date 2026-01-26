---
type: method
interface: IPartDoc
member: DeleteEntityName
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity whose name to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
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
  - parts
  - ipartdoc
  - entities
  - deleteentityname
  - part
  - doc
  - delete
  - object
  - boolean
  - vba
---

# IPartDoc.DeleteEntityName

Deletes the name associated with the specified entity.

## Signature

```csharp
System.Boolean DeleteEntityName( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Entity whose name to remove

## Return Value

True if the name is removed successfully, false if not

## Remarks

Deleting an entity name can cause references to fail.
For example, if an assembly contains a mate to a part face, then a name may automatically be assigned to that face. If you delete that name, then there is no guarantee that the mate will still be valid. This method was provided because the action is available in the core product. However, you should recognize the possibility of reference failures as just described.
Entity names are kept with the part document, so this method resides on the
IPartDoc
object.

## Examples

- Get Entity By Name (VBA) (Get_Entity_By_Name_Example.htm)

## See Also

- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.SetEntityName`