---
type: method
interface: ICollisionDetectionManager
member: IsCollisionPresent
returns: System.Int32
parameters:
  -
    name: TreatContactAsCollision
    type: System.Boolean
    description: True to treat touching faces/edges/vertices as colliding, false to require solid bodies to overlap in a finite volume
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - iscollisionpresent
  - icollisiondetectionmanager
  - collision
  - detection
  - manager
  - present
  - treat
  - contact
  - boolean
  - int32
---

# ICollisionDetectionManager.IsCollisionPresent

Performs collision detection analysis between all groups of components.

## Signature

```csharp
System.Int32 IsCollisionPresent( 
   System.Boolean
TreatContactAsCollision
)
```
## Parameters

- `TreatContactAsCollision` (System.Boolean): True to treat touching faces/edges/vertices as colliding, false to require solid bodies to overlap in a finite volume

## Return Value

Return code as defined in swCollisionDetectionResults_e

## Remarks

This method takes less time to run than
ICollisionDetectionManager::GetCollisions
.

## Examples

- ICollisionDetectionManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICollisionDetectionManager)