---
type: method
interface: IAttribute
member: GetEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.GetName
  - IAttribute.GetParameter
  - IAttribute.IGetEntity2
  - IAttributeDef.CreateInstance5
  - IBody2.FindAttribute
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
  - getentity
  - iattribute
  - attribute
  - object
---

# IAttribute.GetEntity

Gets the entity to which this attribute was originally associated.

## Signature

```csharp
System.Object GetEntity()
```
## Parameters

None.

## Return Value

Object for the entity or NULL (see Remarks )

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

- `IAttribute.GetName`
- `IAttribute.GetParameter`
- `IAttribute.IGetEntity2`
- `IAttributeDef.CreateInstance5`
- `IBody2.FindAttribute`
- `IEntity.FindAttribute`
- `IEntity.IFindAttribute`
- `IFeature.GetSpecificFeature2`
- `ISldWorks.DefineAttribute`