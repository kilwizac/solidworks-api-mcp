---
type: method
interface: IDragOperator
member: CollisionDetection
returns: System.Boolean
parameters:
  -
    name: EntityArray
    type: System.Object
    description: Array of components for collision detection
  -
    name: PartOnly
    type: System.Boolean
    description: True checks for collisions with only the components that you selected to move, false check for collisions in all affected components
  -
    name: StopAt
    type: System.Boolean
    description: True stops the motion of the component when it touches any other entity, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IDragOperator.CollisionDetectionEnabled
  - IDragOperator.ICollisionDetection
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - collision
  - detection
  - components
  - icomponent2
  - collisiondetection
  - idragoperator
  - drag
  - operator
  - entity
  - array
  - object
  - part
  - only
  - boolean
  - stop
---

# IDragOperator.CollisionDetection

Sets the collision detection parameters.

## Signature

```csharp
System.Boolean CollisionDetection( 
   System.Object
EntityArray
,
   System.Boolean
PartOnly
,
   System.Boolean
StopAt
)
```
## Parameters

- `EntityArray` (System.Object): Array of components for collision detection
- `PartOnly` (System.Boolean): True checks for collisions with only the components that you selected to move, false check for collisions in all affected components
- `StopAt` (System.Boolean): True stops the motion of the component when it touches any other entity, false does not

## Return Value

True if successful, false if not

## See Also

- `IDragOperator.CollisionDetectionEnabled`
- `IDragOperator.ICollisionDetection`