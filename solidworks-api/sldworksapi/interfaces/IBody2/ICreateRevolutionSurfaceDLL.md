---
type: method
interface: IBody2
member: ICreateRevolutionSurfaceDLL
returns: Surface
parameters:
  -
    name: ProfileCurve
    type: Curve
    description: Pointer to a profile curve object
  -
    name: AxisPoint
    type: System.Double
    description: Array of 3 doubles (x,y,z)
  -
    name: AxisDirection
    type: System.Double
    description: Array of 3 doubles (x,y,z)
  -
    name: ProfileEndPtParams
    type: System.Double
    description: Array of 2 doubles (uStart,uEnd)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - icreaterevolutionsurfacedll
  - ibody2
  - body2
  - create
  - revolution
  - dll
  - profile
  - curve
  - axis
  - point
  - double
  - direction
  - end
  - pt
  - params
---

# IBody2.ICreateRevolutionSurfaceDLL

Creates a surface of revolution for this body.

## Signature

```csharp
Surface ICreateRevolutionSurfaceDLL( 
   Curve
ProfileCurve
,
   ref System.Double
AxisPoint
,
   ref System.Double
AxisDirection
,
   ref System.Double
ProfileEndPtParams
)
```
## Parameters

- `ProfileCurve` (Curve): Pointer to a profile curve object
- `AxisPoint` (System.Double): Array of 3 doubles (x,y,z)
- `AxisDirection` (System.Double): Array of 3 doubles (x,y,z)
- `ProfileEndPtParams` (System.Double): Array of 2 doubles (uStart,uEnd)

## Return Value

Pointer to a new surface of revolution

## Remarks

Any existing object created by this method is destroyed if you call this method again.