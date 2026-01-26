---
type: method
interface: IBody2
member: IAddProfileArcDLL
returns: Curve
parameters:
  -
    name: Center
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: Axis
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: Radius
    type: System.Double
    description: Radius of the arc
  -
    name: StartPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
  -
    name: EndPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - iaddprofilearcdll
  - ibody2
  - body2
  - add
  - profile
  - arc
  - dll
  - center
  - double
  - axis
  - radius
  - start
  - point
  - end
  - curve
---

# IBody2.IAddProfileArcDLL

Adds a profile arc.

## Signature

```csharp
Curve IAddProfileArcDLL( 
   ref System.Double
Center
,
   ref System.Double
Axis
,
   System.Double
Radius
,
   ref System.Double
StartPoint
,
   ref System.Double
EndPoint
)
```
## Parameters

- `Center` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `Axis` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `Radius` (System.Double): Radius of the arc
- `StartPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z)
- `EndPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z)

## Return Value

Pointer to the arc profile curve