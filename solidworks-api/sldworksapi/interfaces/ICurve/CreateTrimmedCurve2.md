---
type: method
interface: ICurve
member: CreateTrimmedCurve2
returns: Curve
parameters:
  -
    name: X1
    type: System.Double
    description: x start point
  -
    name: Y1
    type: System.Double
    description: y start point
  -
    name: Z1
    type: System.Double
    description: z end point
  -
    name: X2
    type: System.Double
    description: x end point
  -
    name: Y2
    type: System.Double
    description: y end point
  -
    name: Z2
    type: System.Double
    description: z end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.ExtentCurve
  - ICurve.IConvertPcurveToBcurveSize
  - ICurve.IsTrimmedCurve
  - ICurve.JoinCurves
  - ICurve.ReverseCurve
  - ICurve.SimplifyBCurve
keywords:
  - createtrimmedcurve2
  - icurve
  - curve
  - create
  - trimmed
  - curve2
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - temporary
  - extruded
  - body
  - vba
  - elliptical
  - extrusion
  - vb
  - net
---

# ICurve.CreateTrimmedCurve2

Creates a trimmed curve.

## Signature

```csharp
Curve CreateTrimmedCurve2( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
)
```
## Parameters

- `X1` (System.Double): x start point
- `Y1` (System.Double): y start point
- `Z1` (System.Double): z end point
- `X2` (System.Double): x end point
- `Y2` (System.Double): y end point
- `Z2` (System.Double): z end point

## Return Value

Pointer to the ICurve object (see Remarks )

## Remarks

This method trims the curve from the start point to the end point in a parametric direction. It returns NULL if the curve is discontinued or non-linear between the points.
If your application calls
ISurface::CreateTrimmedSheet4
or
ISurface::ICreateTrimmedSheet4
to create a sheet with a boundary defined by arcs (
IModeler::CreateArc
or
IModeler::ICreateArc
) or lines (
IModeler::CreateLine
or
IModeler::ICreateLine
), then your application must first call this method to trim the arc and line curves before passing them to ISurface::CreateTrimmedSheet4 or ISurface::ICreateTrimmedSheet4.
If your application calls ISurface::CreateTrimmedSheet4 or ISurface::ICreateTrimmedSheet4 to create a sheet with an elliptical boundary (
IModeler::CreateEllipse
or
IModeler::ICreateEllipse
), then you do not need to trim the elliptical curve before passing it to ISurface::CreateTrimmedSheet4 or ISurface::ICreateTrimmedSheet4.

## Examples

- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)
- Create Temporary Elliptical Extrusion (VBA) (Create_Temporary_Elliptical_Extrusion_Example_VB.htm)
- Create Temporary Elliptical Extrusion (VB.NET) (Create_Temporary_Elliptical_Extrusion_VBNET.htm)
- Create Temporary Elliptical Extrusion (C#) (Create_Temporary_Elliptical_Extrusion_CSharp.htm)
- Create Trimmed Curve (VBA) (Return_Untrimmed_Curve_Example_VB.htm)
- Create Trimmed Curve (VB.NET) (Return_Untrimmed_Curve_Example_VBNET.htm)
- Create Trimmed Curve (C#) (Return_Untrimmed_Curve_Example_CSharp.htm)

## See Also

- `ICurve.ExtentCurve`
- `ICurve.IConvertPcurveToBcurveSize`
- `ICurve.IsTrimmedCurve`
- `ICurve.JoinCurves`
- `ICurve.ReverseCurve`
- `ICurve.SimplifyBCurve`