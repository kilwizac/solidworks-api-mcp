---
type: method
interface: IModeler
member: CreateExtrudedBody
returns: Body2
parameters:
  -
    name: SheetBody
    type: Body2
    description: Sheet body that defines the profile for the temporary extruded body (see Remarks )
  -
    name: Direction
    type: MathVector
    description: Direction of the axis for the temporary extruded body
  -
    name: Length
    type: System.Double
    description: Length of the temporary extruded body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.CreateBodiesFromSheets2
  - IModeler.CreateBodyFromBox
  - IModeler.CreateBodyFromCone
  - IModeler.CreateBodyFromCyl
  - IModeler.CreateBodyFromFaces2
  - IModeler.CreateBrepBody3
  - IModeler.CreateSweptBody
  - IModeler.CreateWireBody
  - IModeler.ICreateBodiesFromSheets2
  - IModeler.ICreateBodyFromBox2
  - IModeler.ICreateBodyFromCone2
  - IModeler.ICreateBodyFromCyl2
  - IModeler.ICreateBodyFromFaces3
  - IModeler.ICreateBrepBody3
  - IModeler.ICreateWireBody
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - bodies
  - ibody2
  - extruded
  - createextrudedbody
  - imodeler
  - modeler
  - create
  - body
  - sheet
  - body2
  - direction
  - math
  - vector
  - length
  - double
  - temporary
  - elliptical
  - extrusion
  - vb
  - net
  - vba
---

# IModeler.CreateExtrudedBody

Creates a temporary extruded body.

## Signature

```csharp
Body2 CreateExtrudedBody( 
   Body2
SheetBody
,
   MathVector
Direction
,
   System.Double
Length
)
```
## Parameters

- `SheetBody` (Body2): Sheet body that defines the profile for the temporary extruded body (see Remarks )
- `Direction` (MathVector): Direction of the axis for the temporary extruded body
- `Length` (System.Double): Length of the temporary extruded body

## Return Value

Temporary extruded body

## Remarks

Before calling this method:
Call
IModeler::CreateArc
,
IModeler::ICreateArc
,
IModeler::CreateEllipse
,
IModeler::ICreateEllipse
,
IModeler::CreateLine
, or
IModeler::ICreateLine
to create curves that define the profile of the body that you want to extrude.
Call
ICurve::CreateTrimmedCurve2
to trim the curves of arcs and lines only.
Call
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
to create the profile body, passing in either trimmed arcs and lines or untrimmed elliptical curves.
Set SheetBody to the profile body.
After calling this method, call
IBody2::Display3
to display the extrusion.

## Examples

- Create Temporary Elliptical Extrusion (C#) (Create_Temporary_Elliptical_Extrusion_CSharp.htm)
- Create Temporary Elliptical Extrusion (VB.NET) (Create_Temporary_Elliptical_Extrusion_VBNET.htm)
- Create Temporary Elliptical Extrusion (VBA) (Create_Temporary_Elliptical_Extrusion_Example_VB.htm)
- Create Temporary Extruded Body (C#) (Create_Temporary_Extruded_Body_Example_CSharp.htm)
- Create Temporary Extruded Body (VB.NET) (Create_Temporary_Extruded_Body_Example_VBNET.htm)
- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)

## See Also

- `IModeler.CreateBodiesFromSheets2`
- `IModeler.CreateBodyFromBox`
- `IModeler.CreateBodyFromCone`
- `IModeler.CreateBodyFromCyl`
- `IModeler.CreateBodyFromFaces2`
- `IModeler.CreateBrepBody3`
- `IModeler.CreateSweptBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateBodiesFromSheets2`
- `IModeler.ICreateBodyFromBox2`
- `IModeler.ICreateBodyFromCone2`
- `IModeler.ICreateBodyFromCyl2`
- `IModeler.ICreateBodyFromFaces3`
- `IModeler.ICreateBrepBody3`
- `IModeler.ICreateWireBody`