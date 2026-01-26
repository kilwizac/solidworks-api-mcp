---
type: method
interface: IDimension
member: SetArcEndCondition
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the endpoint on which to set the end condition; 1 is the first endpoint, 2 is the second endpoint
  -
    name: Condition
    type: System.Int32
    description: End condition as defined in swArcEndCondition_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.GetArcEndCondition
keywords:
  - arcs
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - setarcendcondition
  - arc
  - end
  - condition
  - index
  - int32
---

# IDimension.SetArcEndCondition

Sets the end conditions for linear dimensions that end on an arc.

## Signature

```csharp
System.Int32 SetArcEndCondition( 
   System.Int32
Index
,
   System.Int32
Condition
)
```
## Parameters

- `Index` (System.Int32): Index of the endpoint on which to set the end condition; 1 is the first endpoint, 2 is the second endpoint
- `Condition` (System.Int32): End condition as defined in swArcEndCondition_e

## Return Value

Indicates the success or failure of this method: 0 Command was successful; the arc end condition was set -1 Command failed for an unknown reason; the arc end condition was not set -2 Index parameter is invalid -3 Condition parameter is invalid -4 Endpoint 1 is not related to an arc -5 Endpoint 2 is not related to an arc

## Remarks

Linear dimensions measure the distance from one point to another. If one or both of those points is on an arc, the point can be changed to the center point of the arc, the nearest point on the arc, or the furthest point on the arc. The arc end condition describes which point to use.
Use
IDimension::GetArcEndCondition
to get the arc end conditions.
To see the effects of changing the arc endpoint conditions, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window.

## See Also

- `IDimension.GetArcEndCondition`