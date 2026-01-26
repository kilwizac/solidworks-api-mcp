---
type: method
interface: ICoEdge
member: Evaluate
returns: System.Object
parameters:
  -
    name: Param
    type: System.Double
    description: Curve parameter desired (U value desired for evaluation)
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurveParams
  - ICoEdge.IEvaluate
  - ICoEdge.IGetCurveParams
keywords:
  - evaluate
  - icoedge
  - co
  - edge
  - param
  - double
  - object
  - determine
  - type
  - face
  - vba
  - select
  - tangent
  - faces
  - edges
  - all
  - holes
  - vb
  - net
---

# ICoEdge.Evaluate

Obsolete. Superseded by ICoEdge::Evaluate2.

## Signature

```csharp
System.Object Evaluate( 
   System.Double
Param
)
```
## Parameters

- `Param` (System.Double): Curve parameter desired (U value desired for evaluation)

## Return Value

Array of doubles (see Remarks )

## Remarks

The tangency vector is defined to be in the direction of the coedge.
The format of the return value is an array of 6 doubles:
retval[0] x location on the curve
retval[1] y location on the curve
retval[2] z location on the curve
retval[3] x vector describing the tangency at the parameter location on the coedge
retval[4] y vector describing the tangency at the parameter location on the coedge
retval[5] z vector describing the tangency at the parameter location on the coedge

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Select Tangent Faces (VBA) (Select_Tangent_Faces_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ICoEdge.GetCurveParams`
- `ICoEdge.IEvaluate`
- `ICoEdge.IGetCurveParams`