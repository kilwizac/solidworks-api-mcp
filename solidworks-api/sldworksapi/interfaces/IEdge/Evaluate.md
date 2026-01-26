---
type: method
interface: IEdge
member: Evaluate
returns: System.Object
parameters:
  -
    name: Parameter
    type: System.Double
    description: Value of the edge parameter
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.IEvaluate
keywords:
  - evaluate
  - iedge
  - edge
  - parameter
  - double
  - object
  - select
  - tangent
  - edges
  - via
  - iteration
  - vba
---

# IEdge.Evaluate

Obsolete. Superseded by IEdge::Evaluate2.

## Signature

```csharp
System.Object Evaluate( 
   System.Double
Parameter
)
```
## Parameters

- `Parameter` (System.Double): Value of the edge parameter

## Return Value

Array values containing the x,y,z value and derivative of the edge (see Remarks )

## Remarks

Use
IEdge::GetCurveParams2
or
IEdge::IGetCurveParams2
to determine the valid parameter range for this method.
This OLE implementation of this method returns an array of doubles as follows:
[
PointX, PointY, PointZ, TangentX, TangentY, TangentZ, Success
]
where the point values are in meters and
Success
is True if successful and false if not.
The return value for the COM implementation is different. To determine success, check the HRESULT return value. The array is as follows:
[
PointX, PointY, PointZ, TangentX, TangentY, TangentZ
]
where the point values are specified in meters.

## Examples

- Select Tangent Edges Via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)

## See Also

- `IEdge.IEvaluate`