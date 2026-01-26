---
type: method
interface: IModeler
member: ICreateArc
returns: Curve
parameters:
  -
    name: Center
    type: System.Double
    description: Array containing 3 doubles for location of the center of the arc (x,y,z )
  -
    name: Axis
    type: System.Double
    description: Array containing 3 doubles (x,y,z)
  -
    name: Radius
    type: System.Double
    description: Arc radius
  -
    name: StartPoint
    type: System.Double
    description: Array of 3 doubles (x,y,z)
  -
    name: EndPoint
    type: System.Double
    description: Array of 3 doubles (x,y,z)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBody2.AddProfileArc
  - IBody2.IAddProfileArc
  - IModeler.CreateEllipse
  - IModeler.ICreateEllipse
keywords:
  - arcs
  - create
  - icreatearc
  - imodeler
  - modeler
  - arc
  - center
  - double
  - axis
  - radius
  - start
  - point
  - end
  - curve
---

# IModeler.ICreateArc

Creates an arc.

## Signature

```csharp
Curve ICreateArc( 
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

- `Center` (System.Double): Array containing 3 doubles for location of the center of the arc (x,y,z )
- `Axis` (System.Double): Array containing 3 doubles (x,y,z)
- `Radius` (System.Double): Arc radius
- `StartPoint` (System.Double): Array of 3 doubles (x,y,z)
- `EndPoint` (System.Double): Array of 3 doubles (x,y,z)

## Return Value

Curve

## Remarks

If your application uses
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
, then your application must also use
ICurve::CreateTrimmedCurve2
for the curves created by
IModeler::CreateArc
or IModeler::ICreateArc and
IModeler::CreateLine
or
IModeler::ICreateLine
.

## See Also

- `IBody2.AddProfileArc`
- `IBody2.IAddProfileArc`
- `IModeler.CreateEllipse`
- `IModeler.ICreateEllipse`