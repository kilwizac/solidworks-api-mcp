---
type: method
interface: IModelDoc2
member: ICreateEllipticalArcByCenter
returns: void
parameters:
  -
    name: Center
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe the ellipse center
  -
    name: Major
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
  -
    name: Minor
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
  -
    name: Start
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis
  -
    name: End
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateEllipse2
  - IModelDoc2.CreateEllipticalArc2
  - IModelDoc2.CreateEllipticalArcByCenter
  - IModelDoc2.CreateEllipticalArcByCenterVB
  - IModelDoc2.ICreateEllipse2
  - IModelDoc2.ICreateEllipticalArc2
keywords:
  - elliptical
  - arcs
  - icreateellipticalarcbycenter
  - imodeldoc2
  - model
  - doc2
  - create
  - arc
  - center
  - double
  - major
  - minor
  - start
  - end
  - void
---

# IModelDoc2.ICreateEllipticalArcByCenter

Creates an elliptical arc trimmed between two points.

## Signature

```csharp
void ICreateEllipticalArcByCenter( 
   ref System.Double
Center
,
   ref System.Double
Major
,
   ref System.Double
Minor
,
   ref System.Double
Start
,
   ref System.Double
End
)
```
## Parameters

- `Center` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe the ellipse center
- `Major` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
- `Minor` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
- `Start` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis
- `End` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis

## Return Value

True if successfully created, false if not

## Remarks

The Start and End arguments should be specified in a counter-clockwise (CCW) manner.

## See Also

- `IModelDoc2.CreateEllipse2`
- `IModelDoc2.CreateEllipticalArc2`
- `IModelDoc2.CreateEllipticalArcByCenter`
- `IModelDoc2.CreateEllipticalArcByCenterVB`
- `IModelDoc2.ICreateEllipse2`
- `IModelDoc2.ICreateEllipticalArc2`