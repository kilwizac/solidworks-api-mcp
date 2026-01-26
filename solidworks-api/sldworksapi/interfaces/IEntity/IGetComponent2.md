---
type: method
interface: IEntity
member: IGetComponent2
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAnnotation.GetAttachedEntities2
  - IAttribute.GetEntityState
  - IAttribute.IGetEntity2
  - IComponent2.IGetCorrespondingEntity
  - IEntity.GetComponent
  - IEntity.GetSafeEntity
  - IFaultEntity.Entity
  - IModelDocExtension.GetCorrespondingEntity
  - IPartDoc.IGetEntityName
  - IPartDoc.IGetNamedEntities
  - IView.IGetVisibleEntities
keywords:
  - igetcomponent2
  - ientity
  - entity
  - component2
---

# IEntity.IGetComponent2

Gets the owning component for this entity.

## Signature

```csharp
Component2 IGetComponent2()
```
## Parameters

None.

## Return Value

Pointer to the component that owns this entity

## Remarks

You can use
ISelectionMgr::GetSelectedObject6
to get the selected object in the assembly, then use the entity object representing that face or edge object to call this method.
This method works only when you get the
IEntity
object directly from the assembly document or from an assembly entity that is displayed in a drawing document.

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAttribute.GetEntityState`
- `IAttribute.IGetEntity2`
- `IComponent2.IGetCorrespondingEntity`
- `IEntity.GetComponent`
- `IEntity.GetSafeEntity`
- `IFaultEntity.Entity`
- `IModelDocExtension.GetCorrespondingEntity`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IView.IGetVisibleEntities`