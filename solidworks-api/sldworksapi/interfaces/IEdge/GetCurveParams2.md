---
type: method
interface: IEdge
member: GetCurveParams2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
  - IEdge.IGetCurveParams2
  - IEdge.IsParamReversed
keywords:
  - getcurveparams2
  - iedge
  - edge
  - curve
  - params2
  - object
  - dimension
  - drawing
  - vba
  - parameterization
  - intersecting
  - face
  - length
  - select
  - tangent
  - edges
  - via
  - iteration
---

# IEdge.GetCurveParams2

Obsolete. Superseded by IEdge::GetCurveParams3.

## Signature

```csharp
System.Object GetCurveParams2()
```
## Parameters

None.

## Return Value

Array values describing the parameterization of the edge

## Remarks

Calls to this method must be preceded by a call to
IEdge::GetCurve
or
IEdge::IGetCurve
because SOLIDWORKS does not keep the underlying curve information. Edge::GetCurve generates this information so that you can extract the curve parameters.
You can use the data returned by this method to determine if a circular edge is a complete circle or an arc.
The return value is the following array of 11 doubles:
[
StartPtX, StartPtY, StartPtZ, EndPtX, EndPtY, EndPtZ, StartUParam, EndUParam, PackDouble1, PackDouble2, PackDouble3
]
where
PackDouble1,
PackDouble2,
and
PackDouble3
are each a set of two integers packed into a double. These variables hold the following pair of integers:
PackDouble1
Two packed integers:
Unused
curveType as documented in
ICurve::Identity
PackDouble2
Two packed integers:
Unused
curveTag
PackDouble3
Two packed integers:
Unused
SenseFlag (indicates whether the curve and edge are in the same direction)
If SenseFlag is True, then the curve and edge are in the same direction. If SenseFlag is false, then the curve and edge are in opposite directions. In this case, this method returns the start parameter (point) that corresponds to the end of the edge and the end parameter (point) that corresponds to the end of the edge.
The start parameter is always smaller than the end parameter. If the curve and edge are in opposite directions, then the start and end parameters are along the negative portion of the parameter space. For example, if the start parameter of the edge is 10 and the end parameter is 5, then the parameter range returned is -10, -5. This ensures that the start parameter is smaller than the end parameter. To correct the values for the edge, swap the two values between the start and end parameters and then negate both values so that the value of the start parameter is 5 and the end parameter is 10.
If the curve is closed and the curve starts and ends at the same point, then
StartUParam
and
EndUParam
are a period apart.

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Get Edge Curve Parameterization (VBA) (Get_Edge_Curve_Parameterization_Example_VB.htm)
- Get Intersecting Face and Edge (VBA) (Get_Intersecting_Face_and_Edge_Example_VB.htm)
- Get Length of Edge (VBA) (Get_Length_of_Edge_Example_VB.htm)
- Select Tangent Edges Via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`
- `IEdge.IGetCurveParams2`
- `IEdge.IsParamReversed`