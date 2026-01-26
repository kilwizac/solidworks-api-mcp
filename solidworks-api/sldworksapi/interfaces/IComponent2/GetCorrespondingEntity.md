---
type: method
interface: IComponent2
member: GetCorrespondingEntity
returns: System.Object
parameters:
  -
    name: Entity
    type: System.Object
    description: Pointer to the Dispatch object of an entity (vertex, face, or edge)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetCorresponding
  - IComponent2.IGetCorrespondingEntity
  - IModelDocExtension.GetCorresponding
  - IModelDocExtension.GetCorrespondingEntity
keywords:
  - corresponding
  - entities
  - entity
  - see
  - also
  - ientity
  - getcorrespondingentity
  - icomponent2
  - component2
  - object
---

# IComponent2.GetCorrespondingEntity

Gets the entity that corresponds with the Dispatch pointer in the context of the component.

## Signature

```csharp
System.Object GetCorrespondingEntity( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Pointer to the Dispatch object of an entity (vertex, face, or edge)

## Return Value

Pointer to the corresponding object in the context of the component

## See Also

- `IComponent2.GetCorresponding`
- `IComponent2.IGetCorrespondingEntity`
- `IModelDocExtension.GetCorresponding`
- `IModelDocExtension.GetCorrespondingEntity`