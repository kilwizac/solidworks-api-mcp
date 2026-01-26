---
type: method
interface: ICollisionDetectionManager
member: RemoveGroup
returns: System.Boolean
parameters:
  -
    name: GroupIndex
    type: System.Int32
    description: Zero-based index of the collision detection group to remove from collision detection
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - removegroup
  - icollisiondetectionmanager
  - collision
  - detection
  - manager
  - remove
  - group
  - index
  - int32
  - boolean
---

# ICollisionDetectionManager.RemoveGroup

Removes the specified collision detection group from collision detection.

## Signature

```csharp
System.Boolean RemoveGroup( 
   System.Int32
GroupIndex
)
```
## Parameters

- `GroupIndex` (System.Int32): Zero-based index of the collision detection group to remove from collision detection

## Return Value

True if collision detection group successfully removed, false if not