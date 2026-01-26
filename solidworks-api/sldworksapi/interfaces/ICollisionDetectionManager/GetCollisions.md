---
type: method
interface: ICollisionDetectionManager
member: GetCollisions
returns: System.Int32
parameters:
  -
    name: TreatContactAsCollision
    type: System.Boolean
    description: True to treat touching faces/edges/vertices as colliding, false to require solid bodies to overlap in a finite volume
  -
    name: Collisions
    type: System.Object
    description: Array of ICollision s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - getcollisions
  - icollisiondetectionmanager
  - collision
  - detection
  - manager
  - collisions
  - treat
  - contact
  - boolean
  - object
  - int32
---

# ICollisionDetectionManager.GetCollisions

Gets the collisions detected.

## Signature

```csharp
System.Int32 GetCollisions( 
   System.Boolean
TreatContactAsCollision
,
   out System.Object
Collisions
)
```
## Parameters

- `TreatContactAsCollision` (System.Boolean): True to treat touching faces/edges/vertices as colliding, false to require solid bodies to overlap in a finite volume
- `Collisions` (System.Object): Array of ICollision s

## Return Value

Number of collisions found

## Remarks

Use
ICollisionDetectionManager::IsCollisionPresent
to determine whether to run this method.
This method can take significantly longer to execute than ICollisionDetectionManager::IsCollisionPresent, because this method might perform the collision detection calculation repeatedly.

## Examples

- ICollisionDetectionManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICollisionDetectionManager)