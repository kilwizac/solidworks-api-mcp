---
type: method
interface: ICurve
member: GetLength2
returns: System.Double
parameters:
  -
    name: StartParam
    type: System.Double
    description: Start parameter
  -
    name: EndParam
    type: System.Double
    description: End parameter
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getlength2
  - icurve
  - curve
  - length2
  - start
  - param
  - double
  - end
  - edge
  - parameterization
  - vba
  - intersecting
  - faces
  - length
  - reference
  - information
  - points
  - spline
---

# ICurve.GetLength2

Obsolete. Superseded by ICurve::GetLength3.

## Signature

```csharp
System.Double GetLength2( 
   System.Double
StartParam
,
   System.Double
EndParam
)
```
## Parameters

- `StartParam` (System.Double): Start parameter
- `EndParam` (System.Double): End parameter

## Return Value

Length of the curve between the two parameters

## Examples

- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)
- Get intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)
- Get Length of Edge (VBA) (Get_Length_of_Edge_Example_VB.htm)
- Get Reference Curve Information (VBA) (Get_Reference_Curve_Information_Example_VB.htm)
- Get Start and End Points of Spline (VBA) (Get_Start_and_End_Points_of_Spline_Example_VB.htm)