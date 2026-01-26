---
type: method
interface: IEntity
member: GetSafeEntity
returns: Entity
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.GetSafeBody
  - IBody2.IsSafe
keywords:
  - getsafeentity
  - ientity
  - entity
  - safe
  - faces
  - affected
  - scale
  - feature
  - vba
  - use
---

# IEntity.GetSafeEntity

Gets a safe entity.

## Signature

```csharp
Entity GetSafeEntity()
```
## Parameters

None.

## Return Value

Pointer to the IEntity object

## Remarks

A safe entity is an entity that continues to be valid after rebuilds until the pointer becomes invalid if the entity object to which it points is deleted.
To determine if an entity is safe, use the
IEntity::IsSafe
property. This property is read-only and does not persist from session to session.

## Examples

- Get Faces Affected By Scale Feature (VBA) (Get_Faces_Affected_by_Scale_Feature_Example_VB.htm)
- Use Safe Entity (VBA) (Use_Safe_Entity_Example_VB.htm)

## See Also

- `IBody2.GetSafeBody`
- `IBody2.IsSafe`