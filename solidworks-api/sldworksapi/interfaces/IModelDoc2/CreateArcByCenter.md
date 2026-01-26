---
type: method
interface: IModelDoc2
member: CreateArcByCenter
returns: System.Boolean
parameters:
  -
    name: P1x
    type: System.Double
    description: X coordinate for first point
  -
    name: P1y
    type: System.Double
    description: Y coordinate for first point
  -
    name: P1z
    type: System.Double
    description: Z coordinate for first point
  -
    name: P2x
    type: System.Double
    description: X coordinate for second point
  -
    name: P2y
    type: System.Double
    description: Y coordinate for second point
  -
    name: P2z
    type: System.Double
    description: Z coordinate for second point
  -
    name: P3x
    type: System.Double
    description: X coordinate for third point
  -
    name: P3y
    type: System.Double
    description: Y coordinate for third point
  -
    name: P3z
    type: System.Double
    description: Z coordinate for third point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.Create3PointArc
  - IModelDoc2.CreateArc2
  - IModelDoc2.CreateTangentArc2
  - IModelDoc2.ICreateArc2
keywords:
  - arcs
  - create
  - sketch
  - entities
  - createarcbycenter
  - imodeldoc2
  - model
  - doc2
  - arc
  - center
  - p1x
  - double
  - p1y
  - p1z
  - p2x
  - p2y
  - p2z
  - p3x
  - p3y
  - p3z
  - boolean
---

# IModelDoc2.CreateArcByCenter

Creates an arc by center in this model document.

## Signature

```csharp
System.Boolean CreateArcByCenter( 
   System.Double
P1x
,
   System.Double
P1y
,
   System.Double
P1z
,
   System.Double
P2x
,
   System.Double
P2y
,
   System.Double
P2z
,
   System.Double
P3x
,
   System.Double
P3y
,
   System.Double
P3z
)
```
## Parameters

- `P1x` (System.Double): X coordinate for first point
- `P1y` (System.Double): Y coordinate for first point
- `P1z` (System.Double): Z coordinate for first point
- `P2x` (System.Double): X coordinate for second point
- `P2y` (System.Double): Y coordinate for second point
- `P2z` (System.Double): Z coordinate for second point
- `P3x` (System.Double): X coordinate for third point
- `P3y` (System.Double): Y coordinate for third point
- `P3z` (System.Double): Z coordinate for third point

## Return Value

True if successful, false otherwise

## See Also

- `IModelDoc2.Create3PointArc`
- `IModelDoc2.CreateArc2`
- `IModelDoc2.CreateTangentArc2`
- `IModelDoc2.ICreateArc2`