---
type: method
interface: IModelDoc2
member: CreateEllipticalArcByCenter
returns: System.Boolean
parameters:
  -
    name: Center
    type: System.Object
    description: Array of 3 doubles(x1, y1, z1) in meters that describe the ellipse center
  -
    name: Major
    type: System.Object
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
  -
    name: Minor
    type: System.Object
    description: Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis
  -
    name: Start
    type: System.Object
    description: Array of 3 doubles (x1, y1, z1) in meters that describe the start point of the ellipse
  -
    name: End
    type: System.Object
    description: Array of 3 doubles (x1, y1, z1) in meters that describe the end point of the ellipse
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
  - IModelDoc2.CreateEllipticalArcByCenterVB
  - IModelDoc2.ICreateEllipse2
  - IModelDoc2.ICreateEllipticalArc2
  - IModelDoc2.ICreateEllipticalArcByCenter
keywords:
  - createellipticalarcbycenter
  - imodeldoc2
  - model
  - doc2
  - create
  - elliptical
  - arc
  - center
  - object
  - major
  - minor
  - start
  - end
  - boolean
---

# IModelDoc2.CreateEllipticalArcByCenter

Obsolete. Superseded by SketchManager::CreateEllipticalArc.

## Signature

```csharp
System.Boolean CreateEllipticalArcByCenter( 
   System.Object
Center
,
   System.Object
Major
,
   System.Object
Minor
,
   System.Object
Start
,
   System.Object
End
)
```
## Parameters

- `Center` (System.Object): Array of 3 doubles(x1, y1, z1) in meters that describe the ellipse center
- `Major` (System.Object): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the major axis
- `Minor` (System.Object): Array of 3 doubles (x1, y1, z1) in meters that describe a point on the ellipse and on the minor axis
- `Start` (System.Object): Array of 3 doubles (x1, y1, z1) in meters that describe the start point of the ellipse
- `End` (System.Object): Array of 3 doubles (x1, y1, z1) in meters that describe the end point of the ellipse

## Return Value

True if successfully created, false otherwise

## Remarks

The Start and End arguments should be specified in a counter-clockwise (CCW) manner.

## See Also

- `IModelDoc2.CreateEllipse2`
- `IModelDoc2.CreateEllipticalArc2`
- `IModelDoc2.CreateEllipticalArcByCenterVB`
- `IModelDoc2.ICreateEllipse2`
- `IModelDoc2.ICreateEllipticalArc2`
- `IModelDoc2.ICreateEllipticalArcByCenter`