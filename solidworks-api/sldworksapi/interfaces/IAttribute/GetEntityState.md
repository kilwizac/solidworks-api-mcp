---
type: method
interface: IAttribute
member: GetEntityState
returns: System.Boolean
parameters:
  -
    name: WhichState
    type: System.Int32
    description: Entity state are defined in swAssociatedEntityStates_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAnnotation.GetAttachedEntities2
  - IAnnotation.IGetAttachedEntities
  - IAttribute.GetDefinition
  - IAttribute.GetName
  - IAttribute.GetParameter
  - IAttribute.IGetDefinition
  - IAttribute.IGetParameter
  - IAttributeDef.CreateInstance5
  - IComponent2.FindAttribute
  - IComponent2.IFindAttribute
  - IEntity.FindAttribute
  - IEntity.GetSafeEntity
  - IEntity.GetType
  - IEntity.IFindAttribute
  - IFaultEntity.Entity
  - IFeature.GetSpecificFeature2
  - IModelDocExtension.GetCorrespondingEntity
  - IPartDoc.GetEntityByName
  - IPartDoc.GetNamedEntities
  - IPartDoc.IGetEntityByName
  - IPartDoc.IGetNamedEntities
  - IView.GetVisibleEntities
  - IView.IGetVisibleEntities
keywords:
  - entity
  - see
  - also
  - ientity
  - state
  - getentitystate
  - iattribute
  - attribute
  - which
  - int32
  - boolean
  - find
  - vb
  - net
  - vba
---

# IAttribute.GetEntityState

Returns the state of the associated entity.

## Signature

```csharp
System.Boolean GetEntityState( 
   System.Int32
WhichState
)
```
## Parameters

- `WhichState` (System.Int32): Entity state are defined in swAssociatedEntityStates_e

## Return Value

True if the query state matches WhichState, false if not

## Remarks

If the attribute is not associated to any entity (that is, it is associated to the document), all queries return false.
The WhichState argument can take any of the values in the swAssociatedEntityStates_e, where:
swIsEntityInvalid is a general query. It returns true when the associated entity is not valid due to a suppression or modeling operation.
swIsEntitySuppressed is a more specific query. It returns true only if the associated entity is not valid due to a suppression.
IAttribute::GetEntity
and
IAttribute::IGetEntity2
return Nothing or null when the attribute is associated with:
document
invalid entity
suppressed entity
For example, if an attribute is applied to a face on a boss feature and then that boss feature is suppressed, your application might make the following calls:
IAttribute::GetEntity - Returns Nothing or null
IAttribute::GetEntityState(
swIsEntityInvalid
) - Returns true to indicate possibly a suppressed or deleted entity
IAttribute::GetEntityState(
swIsEntitySuppressed
) - Returns true to indicate that the entity is currently suppressed

## Examples

- Find Attribute (C#) (Find_Attribute_Example_CSharp.htm)
- Find Attribute (VB.NET) (Find_Attribute_Example_VBNET.htm)
- Find Attribute (VBA) (Find_Attribute_Example_VB.htm)

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAnnotation.IGetAttachedEntities`
- `IAttribute.GetDefinition`
- `IAttribute.GetName`
- `IAttribute.GetParameter`
- `IAttribute.IGetDefinition`
- `IAttribute.IGetParameter`
- `IAttributeDef.CreateInstance5`
- `IComponent2.FindAttribute`
- `IComponent2.IFindAttribute`
- `IEntity.FindAttribute`
- `IEntity.GetSafeEntity`
- `IEntity.GetType`
- `IEntity.IFindAttribute`
- `IFaultEntity.Entity`
- `IFeature.GetSpecificFeature2`
- `IModelDocExtension.GetCorrespondingEntity`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetNamedEntities`
- `IView.GetVisibleEntities`
- `IView.IGetVisibleEntities`