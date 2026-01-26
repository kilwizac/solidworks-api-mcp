---
type: method
interface: IDimension
member: GetArcEndCondition
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the endpoint to get the end condition from; 1 is the first endpoint, 2 is the second endpoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.SetArcEndCondition
keywords:
  - arcs
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - getarcendcondition
  - arc
  - end
  - condition
  - index
  - int32
---

# IDimension.GetArcEndCondition

Gets the end conditions for linear dimensions that end on an arc.

## Signature

```csharp
System.Int32 GetArcEndCondition( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the endpoint to get the end condition from; 1 is the first endpoint, 2 is the second endpoint

## Return Value

End condition as defined in swArcEndCondition_e

## Remarks

In a linear dimension, the distance measured is from one point to another. If one or both of those points are on an arc, you can change the point to be the center of the arc, the nearest point on the arc, or the furthest point on the arc. The arc end condition describes which point is used.
Use
IDimension::SetArcEndCondition
to set the arc end conditions.

## See Also

- `IDimension.SetArcEndCondition`