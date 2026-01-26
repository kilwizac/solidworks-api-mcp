---
type: method
interface: IBody2
member: OffsetPlanarWireBody
returns: Body2
parameters:
  -
    name: Distance
    type: System.Double
    description: Distance by which to offset the planar wire body
  -
    name: Normal
    type: MathVector
    description: Plane normal
  -
    name: Option
    type: System.Int32
    description: How to fill the gap between edges as defined in swOffsetPlanarWireBodyOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - offsetplanarwirebody
  - ibody2
  - body2
  - offset
  - planar
  - wire
  - body
  - distance
  - double
  - normal
  - math
  - vector
  - option
  - int32
---

# IBody2.OffsetPlanarWireBody

Offsets a planar wire body in the normal plane by the specified distance.

## Signature

```csharp
Body2 OffsetPlanarWireBody( 
   System.Double
Distance
,
   MathVector
Normal
,
   System.Int32
Option
)
```
## Parameters

- `Distance` (System.Double): Distance by which to offset the planar wire body
- `Normal` (MathVector): Plane normal
- `Option` (System.Int32): How to fill the gap between edges as defined in swOffsetPlanarWireBodyOptions_e

## Return Value

Pointer to the IBody2 object

## Remarks

The offset direction is determined by the direction of the first edge and the normal. For example, imagine that you are standing on the plane with normal pointing upwards and you are looking along the first edge, then the offset is to your right.