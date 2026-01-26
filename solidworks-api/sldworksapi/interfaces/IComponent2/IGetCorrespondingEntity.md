---
type: method
interface: IComponent2
member: IGetCorrespondingEntity
returns: Entity
parameters:
  -
    name: PEntity
    type: Entity
    description: Pointer to the IEntity object (vertex, face, or edge)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetCorresponding
  - IComponent2.GetCorrespondingEntity
  - IModelDocExtension.GetCorresponding
  - IModelDocExtension.GetCorrespondingEntity
keywords:
  - corresponding
  - entities
  - entity
  - see
  - also
  - ientity
  - igetcorrespondingentity
  - icomponent2
  - component2
---

# IComponent2.IGetCorrespondingEntity

Gets the entity that corresponds with the Dispatch pointer in the context of the component.

## Signature

```csharp
Entity IGetCorrespondingEntity( 
   Entity
PEntity
)
```
## Parameters

- `PEntity` (Entity): Pointer to the IEntity object (vertex, face, or edge)

## Return Value

Pointer to the corresponding object in the context of the component

## See Also

- `IComponent2.GetCorresponding`
- `IComponent2.GetCorrespondingEntity`
- `IModelDocExtension.GetCorresponding`
- `IModelDocExtension.GetCorrespondingEntity`