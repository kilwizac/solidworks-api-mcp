---
type: method
interface: ICurve
member: IsCircle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CircleParams
  - ICurve.ICircleParams
  - ICurve.Identity
keywords:
  - circles
  - iscircle
  - icurve
  - curve
  - circle
  - boolean
  - circular
  - holes
  - face
  - select
  - edges
  - all
  - vb
  - net
  - vba
---

# ICurve.IsCircle

Gets whether the curve is a circle.

## Signature

```csharp
System.Boolean IsCircle()
```
## Parameters

None.

## Return Value

True if the curve is a circle, false if other curve type

## Remarks

Use
IEdge::GetCurveParams2
or
IEdge::IGetCurveParams2
to determine if a circular edge is a complete circle or an arc.

## Examples

- Get Circular Holes in Face (C++) (Get_Circular_Holes_In_Face_Example_CPlusPlus_COM.htm)
- Select Edges of All Holes on Face (C#) (Select_Edges_of_All_Holes_on_Face_Example_CSharp.htm)
- Select Edges of All Holes on Face (VB.NET) (Select_Edges_of_All_Holes_on_Face_Example_VBNET.htm)
- Select Edges of All Holes on Face (VBA) (Select_Edges_of_All_Holes_on_Face_Example_VB.htm)

## See Also

- `ICurve.CircleParams`
- `ICurve.ICircleParams`
- `ICurve.Identity`