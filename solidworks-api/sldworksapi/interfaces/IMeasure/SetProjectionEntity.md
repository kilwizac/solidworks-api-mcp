---
type: method
interface: IMeasure
member: SetProjectionEntity
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Face or plane
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.Projection
  - IMeasure.ProjectionOption
keywords:
  - setprojectionentity
  - imeasure
  - measure
  - projection
  - entity
  - object
  - boolean
---

# IMeasure.SetProjectionEntity

Sets the face or plane to which to project the measured distance.

## Signature

```csharp
System.Boolean SetProjectionEntity( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Face or plane

## Return Value

True if Entity is set, false if not

## See Also

- `IMeasure.Projection`
- `IMeasure.ProjectionOption`