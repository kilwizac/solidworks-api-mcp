---
type: method
interface: IModelDoc2
member: Create3PointArc
returns: System.Boolean
parameters:
  -
    name: P1x
    type: System.Double
    description: X value of point 1
  -
    name: P1y
    type: System.Double
    description: Y value of point 1
  -
    name: P1z
    type: System.Double
    description: Z value of point 1
  -
    name: P2x
    type: System.Double
    description: X value of point 2
  -
    name: P2y
    type: System.Double
    description: Y value of point 2
  -
    name: P2z
    type: System.Double
    description: Z value of point 2
  -
    name: P3x
    type: System.Double
    description: X value of point 3
  -
    name: P3y
    type: System.Double
    description: Y value of point 3
  -
    name: P3z
    type: System.Double
    description: Z value of point 3
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateArc2
  - IModelDoc2.CreateArcByCenter
  - IModelDoc2.CreateTangentArc2
  - IModelDoc2.ICreateArc2
keywords:
  - create3pointarc
  - imodeldoc2
  - model
  - doc2
  - create3
  - point
  - arc
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

# IModelDoc2.Create3PointArc

Obsolete. Superseded by ISketchManager::Create3PointArc.

## Signature

```csharp
System.Boolean Create3PointArc( 
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

- `P1x` (System.Double): X value of point 1
- `P1y` (System.Double): Y value of point 1
- `P1z` (System.Double): Z value of point 1
- `P2x` (System.Double): X value of point 2
- `P2y` (System.Double): Y value of point 2
- `P2z` (System.Double): Z value of point 2
- `P3x` (System.Double): X value of point 3
- `P3y` (System.Double): Y value of point 3
- `P3z` (System.Double): Z value of point 3

## Return Value

True if successfully created, false otherwise

## See Also

- `IModelDoc2.CreateArc2`
- `IModelDoc2.CreateArcByCenter`
- `IModelDoc2.CreateTangentArc2`
- `IModelDoc2.ICreateArc2`