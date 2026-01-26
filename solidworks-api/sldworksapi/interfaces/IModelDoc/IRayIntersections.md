---
type: method
interface: IModelDoc
member: IRayIntersections
returns: System.Int32
parameters:
  -
    name: BodiesIn
    type: Body
    description: 
  -
    name: NumBodies
    type: System.Int32
    description: 
  -
    name: BasePointsIn
    type: System.Double
    description: 
  -
    name: VectorsIn
    type: System.Double
    description: 
  -
    name: NumRays
    type: System.Int32
    description: 
  -
    name: Options
    type: System.Int32
    description: 
  -
    name: HitRadius
    type: System.Double
    description: 
  -
    name: Offset
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - irayintersections
  - imodeldoc
  - model
  - doc
  - ray
  - intersections
  - bodies
  - body
  - num
  - int32
  - base
  - points
  - double
  - vectors
  - rays
  - options
  - hit
  - radius
  - offset
---

# IModelDoc.IRayIntersections

Obsolete. Superseded by IModelDoc2::IRayIntersections.

## Signature

```csharp
System.Int32 IRayIntersections( 
   ref Body
BodiesIn
,
   System.Int32
NumBodies
,
   ref System.Double
BasePointsIn
,
   ref System.Double
VectorsIn
,
   System.Int32
NumRays
,
   System.Int32
Options
,
   System.Double
HitRadius
,
   System.Double
Offset
)
```
## Parameters

- `BodiesIn` (Body): 
- `NumBodies` (System.Int32): 
- `BasePointsIn` (System.Double): 
- `VectorsIn` (System.Double): 
- `NumRays` (System.Int32): 
- `Options` (System.Int32): 
- `HitRadius` (System.Double): 
- `Offset` (System.Double): 

## Return Value

Unknown.