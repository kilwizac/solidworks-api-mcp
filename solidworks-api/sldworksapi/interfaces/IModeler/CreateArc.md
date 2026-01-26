---
type: method
interface: IModeler
member: CreateArc
returns: System.Object
parameters:
  -
    name: Center
    type: System.Object
    description: Array containing 3 doubles for location of the center of the arc (x,y,z )
  -
    name: Axis
    type: System.Object
    description: Array containing 3 doubles (x,y,z)
  -
    name: Radius
    type: System.Double
    description: Arc radius
  -
    name: StartPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z)
  -
    name: EndPoint
    type: System.Object
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
  - createarc
  - imodeler
  - modeler
  - arc
  - center
  - object
  - axis
  - radius
  - double
  - start
  - point
  - end
  - temporary
  - extruded
  - body
  - vb
  - net
  - vba
---

# IModeler.CreateArc

Creates an arc.

## Signature

```csharp
System.Object CreateArc( 
   System.Object
Center
,
   System.Object
Axis
,
   System.Double
Radius
,
   System.Object
StartPoint
,
   System.Object
EndPoint
)
```
## Parameters

- `Center` (System.Object): Array containing 3 doubles for location of the center of the arc (x,y,z )
- `Axis` (System.Object): Array containing 3 doubles (x,y,z)
- `Radius` (System.Double): Arc radius
- `StartPoint` (System.Object): Array of 3 doubles (x,y,z)
- `EndPoint` (System.Object): Array of 3 doubles (x,y,z)

## Return Value

Curve

## Remarks

If your application uses
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
, then your application must also use
ICurve::CreateTrimmedCurve2
for the curves created by IModeler::CreateArc or
IModeler::ICreateArc
and
IModeler::CreateLine
or
IModeler::ICreateLine
.

## Examples

- Create Temporary Extruded Body (C#) (Create_Temporary_Extruded_Body_Example_CSharp.htm)
- Create Temporary Extruded Body (VB.NET) (Create_Temporary_Extruded_Body_Example_VBNET.htm)
- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)

## See Also

- `IBody2.AddProfileArc`
- `IBody2.IAddProfileArc`
- `IModeler.CreateEllipse`
- `IModeler.ICreateEllipse`