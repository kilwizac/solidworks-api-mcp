---
type: method
interface: IEdge
member: IEvaluate
returns: System.Double
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
  - IEdge.Evaluate
keywords:
  - ievaluate
  - iedge
  - edge
  - evaluate
  - parameter
  - double
---

# IEdge.IEvaluate

Obsolete. Superseded by IEdge::IEvaluate2.

## Signature

```csharp
System.Double IEvaluate( 
   System.Double
Parameter
)
```
## Parameters

- `Parameter` (System.Double): Value of the edge parameter

## Return Value

Pointer to an array of doubles (see Remarks )

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

## See Also

- `IEdge.Evaluate`