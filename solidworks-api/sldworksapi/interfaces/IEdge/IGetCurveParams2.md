---
type: method
interface: IEdge
member: IGetCurveParams2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurveParams
  - ICoEdge.IGetCurveParams
  - IEdge.GetCurveParams2
  - IEdge.IsParamReversed
keywords:
  - igetcurveparams2
  - iedge
  - edge
  - curve
  - params2
  - double
  - circular
  - holes
  - face
---

# IEdge.IGetCurveParams2

Returns the curve parameters for this edge, including the edge and curve direction (sense).

## Signature

```csharp
System.Double IGetCurveParams2()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- Get Circular Holes in Face (C++) (Get_Circular_Holes_In_Face_Example_CPlusPlus_COM.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICoEdge.IGetCurveParams`
- `IEdge.GetCurveParams2`
- `IEdge.IsParamReversed`