---
type: method
interface: ICoEdge
member: GetCurveParams
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.IGetCurveParams
  - ICurve
  - IEdge.GetCurveParams2
  - IEdge.IGetCurveParams2
keywords:
  - getcurveparams
  - icoedge
  - co
  - edge
  - curve
  - params
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

# ICoEdge.GetCurveParams

Gets the curve parameters.

## Signature

```csharp
System.Object GetCurveParams()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

The return value format is an array of 10 doubles:
retval[0]  X startpoint
retval[1]  Y startpoint
retval[2]  Z startpoint
retval[3]  X endpoint
retval[4]  Y endpoint
retval[5]  Z endpoint
retval[6]  startParam
retval[7]  endParam
retval[8]  sense (Not used)
retval[9]  curve type (Not used)

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Select Tangent Faces (VBA) (Select_Tangent_Faces_Example_VB.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ICoEdge.IGetCurveParams`
- `ICurve`
- `IEdge.GetCurveParams2`
- `IEdge.IGetCurveParams2`