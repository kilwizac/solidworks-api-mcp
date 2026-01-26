---
type: method
interface: IModelDoc2
member: CreateTangentArc2
returns: System.Boolean
parameters:
  -
    name: P1x
    type: System.Double
    description: x coordinate of start point in meters
  -
    name: P1y
    type: System.Double
    description: y coordinate of start point in meters
  -
    name: P1z
    type: System.Double
    description: Always 0
  -
    name: P2x
    type: System.Double
    description: x coordinate of end point in meters
  -
    name: P2y
    type: System.Double
    description: y coordinate of end point in meters
  -
    name: P2z
    type: System.Double
    description: Always 0
  -
    name: ArcTypeIn
    type: System.Int32
    description: Type of tangent arc as defined in swTangentArcTypes_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.Create3PointArc
  - IModelDoc2.CreateArc2
  - IModelDoc2.CreateArcByCenter
  - IModelDoc2.ICreateArc2
keywords:
  - createtangentarc2
  - imodeldoc2
  - model
  - doc2
  - create
  - tangent
  - arc2
  - p1x
  - double
  - p1y
  - p1z
  - p2x
  - p2y
  - p2z
  - arc
  - type
  - int32
  - boolean
---

# IModelDoc2.CreateTangentArc2

Obsolete. Superseded by ISketchManager::CreateTangentArc.

## Signature

```csharp
System.Boolean CreateTangentArc2( 
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
   System.Int32
ArcTypeIn
)
```
## Parameters

- `P1x` (System.Double): x coordinate of start point in meters
- `P1y` (System.Double): y coordinate of start point in meters
- `P1z` (System.Double): Always 0
- `P2x` (System.Double): x coordinate of end point in meters
- `P2y` (System.Double): y coordinate of end point in meters
- `P2z` (System.Double): Always 0
- `ArcTypeIn` (System.Int32): Type of tangent arc as defined in swTangentArcTypes_e

## Return Value

1 = success, 0 = failure

## Remarks

This method can only create 2D tangent arcs. Use
ISketchManager::CreateTangentArc
to create 3D tangent arcs.

## See Also

- `IModelDoc2.Create3PointArc`
- `IModelDoc2.CreateArc2`
- `IModelDoc2.CreateArcByCenter`
- `IModelDoc2.ICreateArc2`