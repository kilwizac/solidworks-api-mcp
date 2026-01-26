---
type: method
interface: ICurve
member: Evaluate
returns: System.Object
parameters:
  -
    name: Parameter
    type: System.Double
    description: Curve parameter
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICurve.IEvaluate
keywords:
  - evaluate
  - icurve
  - curve
  - parameter
  - double
  - object
---

# ICurve.Evaluate

Obsolete. Superseded by ICurve::Evaluate2.

## Signature

```csharp
System.Object Evaluate( 
   System.Double
Parameter
)
```
## Parameters

- `Parameter` (System.Double): Curve parameter

## Return Value

Array containing an array of doubles (see Remarks )

## Remarks

To determine a valid parameter range, use
ICurve::GetEndParams
or
IEdge::GetCurveParams2
or
IEdge::IGetCurveParams2
.
The OLE Automation return value is an array of doubles with the following format:
[
PointX, PointY, PointZ, TangentX, TangentY, TangentZ, Success
]
where:
PointX
,
PointY,
and
PointZ
represent the 3D point in space for the given parameter
TangentX
,
TangentY,
and
TangentZ
represent the tangent vector at the point
True if the operation is successful
This method returns values in meters.

## See Also

- `ICurve.IEvaluate`