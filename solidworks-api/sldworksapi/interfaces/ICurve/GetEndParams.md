---
type: method
interface: ICurve
member: GetEndParams
returns: System.Boolean
parameters:
  -
    name: Start
    type: System.Double
    description: Start parameter value
  -
    name: End
    type: System.Double
    description: End parameter value
  -
    name: IsClosed
    type: System.Boolean
    description: True for closed curves, false for other types
  -
    name: IsPeriodic
    type: System.Boolean
    description: True for periodic curves, false for other types
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getendparams
  - icurve
  - curve
  - end
  - params
  - start
  - double
  - closed
  - boolean
  - periodic
  - create
  - space
  - parameter
  - surface
  - vba
  - evaluate
  - curves
  - defined
  - sketch
  - find
  - outside
  - edges
  - face
  - intersecting
  - faces
  - segment
  - data
  - points
  - spline
  - trimmed
  - vb
  - net
---

# ICurve.GetEndParams

Gets the end conditions of this curve.

## Signature

```csharp
System.Boolean GetEndParams( 
   out System.Double
Start
,
   out System.Double
End
,
   out System.Boolean
IsClosed
,
   out System.Boolean
IsPeriodic
)
```
## Parameters

- `Start` (System.Double): Start parameter value
- `End` (System.Double): End parameter value
- `IsClosed` (System.Boolean): True for closed curves, false for other types
- `IsPeriodic` (System.Boolean): True for periodic curves, false for other types

## Return Value

True if the operation was successful, false if not

## Remarks

The parametric range is the valid range for the curve. If the curve is infinite (such as a line), then the parametric maximum is the largest permissible value in the parametric space.

## Examples

- Create Space Parameter Curve on Surface (VBA) (Create_Space_Parameter_Curve_on_Surface_Example_VB.htm)
- Evaluate Curves Defined in Sketch Space (VBA) (Evaluate_Curves_Defined_in_Sketch_Space_Example_VB.htm)
- Find Outside Edges of Face (VBA) (Find_Outside_Edges_of_Face_Example_VB.htm)
- Get Intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)
- Get Sketch Segment and Curve Data (VBA) (Get_Sketch_Segment_and_Curve_Data_Example_VB.htm)
- Get Start and End Points of Spline (VBA) (Get_Start_and_End_Points_of_Spline_Example_VB.htm)
- Create Trimmed Curve (VBA) (Return_Untrimmed_Curve_Example_VB.htm)
- Create Trimmed Curve (VB.NET) (Return_Untrimmed_Curve_Example_VBNET.htm)
- Create Trimmed Curve (C#) (Return_Untrimmed_Curve_Example_CSharp.htm)