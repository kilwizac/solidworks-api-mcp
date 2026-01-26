---
type: method
interface: IDragOperator
member: ICollisionDetection
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of components for collision detection
  -
    name: ComponentArray
    type: Component2
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
  - IDragOperator.CollisionDetection
  - IDragOperator.CollisionDetectionEnabled
keywords:
  - icollisiondetection
  - idragoperator
  - drag
  - operator
  - collision
  - detection
  - count
  - int32
  - component
  - array
  - component2
  - part
  - only
  - boolean
  - stop
---

# IDragOperator.ICollisionDetection

Sets the collision detection parameters.

## Signature

```csharp
System.Boolean ICollisionDetection( 
   System.Int32
Count
,
   ref Component2
ComponentArray
,
   System.Boolean
PartOnly
,
   System.Boolean
StopAt
)
```
## Parameters

- `Count` (System.Int32): Number of components for collision detection
- `ComponentArray` (Component2): Array of components for collision detection
- `PartOnly` (System.Boolean): True checks for collisions with only the components that you selected to move, false check for collisions in all affected components
- `StopAt` (System.Boolean): True stops the motion of the component when it touches any other entity, false does not

## Return Value

True if successful, false if not

## See Also

- `IDragOperator.CollisionDetection`
- `IDragOperator.CollisionDetectionEnabled`