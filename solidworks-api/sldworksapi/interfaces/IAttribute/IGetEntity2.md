---
type: method
interface: IAttribute
member: IGetEntity2
returns: Entity
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.GetEntity
  - IAttribute.GetEntityState
  - IBody2.FindAttribute
  - IComponent2.FindAttribute
  - IEntity.FindAttribute
  - IEntity.IFindAttribute
  - IFeature.GetSpecificFeature2
  - ISldWorks.DefineAttribute
keywords:
  - entity
  - see
  - also
  - ientity
  - attributes
  - igetentity2
  - iattribute
  - attribute
  - entity2
---

# IAttribute.IGetEntity2

Gets the entity to which this attribute was originally associated.

## Signature

```csharp
Entity IGetEntity2()
```
## Parameters

None.

## Return Value

IEntity or NULL (see Remarks )

## Remarks

This method returns NULL when the attribute is associated with:
the document
an invalid entity
a suppressed entity
When this method returns NULL, use
IAttribute::GetEntityState
to determine which of these situations you have encountered.
When the
IAttribute
object is suppressed, this method returns NULL.

## See Also

- `IAttribute.GetEntity`
- `IAttribute.GetEntityState`
- `IBody2.FindAttribute`
- `IComponent2.FindAttribute`
- `IEntity.FindAttribute`
- `IEntity.IFindAttribute`
- `IFeature.GetSpecificFeature2`
- `ISldWorks.DefineAttribute`