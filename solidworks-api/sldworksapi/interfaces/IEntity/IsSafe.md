---
type: property
interface: IEntity
member: IsSafe
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - issafe
  - ientity
  - entity
  - safe
  - boolean
readonly: true
---

# IEntity.IsSafe

Gets whether this IEntity object survived a rebuild.

## Signature

```csharp
System.Boolean IsSafe {get;}
```
## Parameters

None.

## Return Value

True if the IEntity object survived the rebuild, false if not

## Remarks

The IEntity::IsSafe property is read-only and does not persist from session to session. To make an entity safe, use
IEntity::GetSafeEntity
.