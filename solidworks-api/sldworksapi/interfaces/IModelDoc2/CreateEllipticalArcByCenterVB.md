---
type: method
interface: IModelDoc2
member: CreateEllipticalArcByCenterVB
returns: System.Boolean
parameters:
  -
    name: CenterX
    type: System.Double
    description: X values for the ellipse center point
  -
    name: CenterY
    type: System.Double
    description: Y values for the ellipse center point
  -
    name: CenterZ
    type: System.Double
    description: Z values for the ellipse center point
  -
    name: MajorX
    type: System.Double
    description: X values for a point on the ellipse and on the major axis
  -
    name: MajorY
    type: System.Double
    description: Y values for a point on the ellipse and on the major axis
  -
    name: MajorZ
    type: System.Double
    description: Z values for a point on the ellipse and on the major axis
  -
    name: MinorX
    type: System.Double
    description: X values for a point on the ellipse and on the minor axis
  -
    name: MinorY
    type: System.Double
    description: Y values for a point on the ellipse and on the minor axis
  -
    name: MinorZ
    type: System.Double
    description: Z values for a point on the ellipse and on the minor axis
  -
    name: StartX
    type: System.Double
    description: X values for CCW elliptical arc start point
  -
    name: StartY
    type: System.Double
    description: Y values for CCW elliptical arc start point
  -
    name: StartZ
    type: System.Double
    description: Z values for CCW elliptical arc start point
  -
    name: EndX
    type: System.Double
    description: X values for CCW elliptical arc end point
  -
    name: EndY
    type: System.Double
    description: Y values for CCW elliptical arc end point
  -
    name: EndZ
    type: System.Double
    description: Z values for CCW elliptical arc end point
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateEllipse2
  - IModelDoc2.CreateEllipticalArc2
  - IModelDoc2.CreateEllipticalArcByCenter
  - IModelDoc2.ICreateEllipse2
  - IModelDoc2.ICreateEllipticalArc2
  - IModelDoc2.ICreateEllipticalArcByCenter
keywords:
  - createellipticalarcbycentervb
  - imodeldoc2
  - model
  - doc2
  - create
  - elliptical
  - arc
  - center
  - vb
  - double
  - major
  - minor
  - start
  - end
  - boolean
---

# IModelDoc2.CreateEllipticalArcByCenterVB

Obsolete. Superseded by SketchManager::CreateEllipticalArc.

## Signature

```csharp
System.Boolean CreateEllipticalArcByCenterVB( 
   System.Double
CenterX
,
   System.Double
CenterY
,
   System.Double
CenterZ
,
   System.Double
MajorX
,
   System.Double
MajorY
,
   System.Double
MajorZ
,
   System.Double
MinorX
,
   System.Double
MinorY
,
   System.Double
MinorZ
,
   System.Double
StartX
,
   System.Double
StartY
,
   System.Double
StartZ
,
   System.Double
EndX
,
   System.Double
EndY
,
   System.Double
EndZ
)
```
## Parameters

- `CenterX` (System.Double): X values for the ellipse center point
- `CenterY` (System.Double): Y values for the ellipse center point
- `CenterZ` (System.Double): Z values for the ellipse center point
- `MajorX` (System.Double): X values for a point on the ellipse and on the major axis
- `MajorY` (System.Double): Y values for a point on the ellipse and on the major axis
- `MajorZ` (System.Double): Z values for a point on the ellipse and on the major axis
- `MinorX` (System.Double): X values for a point on the ellipse and on the minor axis
- `MinorY` (System.Double): Y values for a point on the ellipse and on the minor axis
- `MinorZ` (System.Double): Z values for a point on the ellipse and on the minor axis
- `StartX` (System.Double): X values for CCW elliptical arc start point
- `StartY` (System.Double): Y values for CCW elliptical arc start point
- `StartZ` (System.Double): Z values for CCW elliptical arc start point
- `EndX` (System.Double): X values for CCW elliptical arc end point
- `EndY` (System.Double): Y values for CCW elliptical arc end point
- `EndZ` (System.Double): Z values for CCW elliptical arc end point

## Return Value

True if successfully created, false otherwise

## Remarks

The Start* and End* arguments should be specified in a counter-clockwise (CCW) manner.

## See Also

- `IModelDoc2.CreateEllipse2`
- `IModelDoc2.CreateEllipticalArc2`
- `IModelDoc2.CreateEllipticalArcByCenter`
- `IModelDoc2.ICreateEllipse2`
- `IModelDoc2.ICreateEllipticalArc2`
- `IModelDoc2.ICreateEllipticalArcByCenter`