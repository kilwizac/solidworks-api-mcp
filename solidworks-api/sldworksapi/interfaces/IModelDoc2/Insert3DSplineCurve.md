---
type: method
interface: IModelDoc2
member: Insert3DSplineCurve
returns: void
parameters:
  -
    name: CurveClosed
    type: System.Boolean
    description: True if you want the curve to be closed, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - splines
  - 3d
  - insert3dsplinecurve
  - imodeldoc2
  - model
  - doc2
  - insert3
  - spline
  - curve
  - closed
  - boolean
  - void
  - insert
  - vba
  - create
  - through
  - reference
  - points
  - vb
  - net
---

# IModelDoc2.Insert3DSplineCurve

Inserts a 3D-spline curve through the selected reference points.

## Signature

```csharp
void Insert3DSplineCurve( 
   System.Boolean
CurveClosed
)
```
## Parameters

- `CurveClosed` (System.Boolean): True if you want the curve to be closed, false if not

## Return Value

Unknown.

## Remarks

Before calling this method, select the reference points by calling
IModelDocExtension::SelectbyID2
with Marks of 1.
To create 2D splines on a sketch, use
IModelDoc2::SketchSpline
or
IModelDoc2::CreateSpline
or
IModelDoc2::ICreateSpline
.

## Examples

- Insert a 3D-Spline Curve (VBA) (Insert_3D_Spline_Curve_Example_VB.htm)
- Create Curve Through Reference Points (VBA) (Create_Curve_Through_Reference_Points_Example_VB.htm)
- Create Curve Through Reference Points (VB.NET) (Create_Curve_Through_Reference_Points_Example_VBNET.htm)
- Create Curve Through Reference Points (C#) (Create_Curve_Through_Reference_Points_Example_CSharp.htm)