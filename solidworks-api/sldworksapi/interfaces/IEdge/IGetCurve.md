---
type: method
interface: IEdge
member: IGetCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.GetCurve
  - ICoEdge.GetCurveParams
  - ICoEdge.GetEdge
  - ICoEdge.IGetCurve
  - ICoEdge.IGetCurveParams
  - ICoEdge.IGetEdge
  - IEdge.GetCurve
  - IEdge.GetCurveParams2
  - IEdge.IGetCurveParams2
keywords:
  - igetcurve
  - iedge
  - edge
  - curve
  - circular
  - holes
  - face
---

# IEdge.IGetCurve

Gets the underlying curve for this edge.

## Signature

```csharp
Curve IGetCurve()
```
## Parameters

None.

## Return Value

Pointer to the underlying curve for this edge

## Examples

- Get Circular Holes in Face (C++) (Get_Circular_Holes_In_Face_Example_CPlusPlus_COM.htm)

## See Also

- `ICoEdge.GetCurve`
- `ICoEdge.GetCurveParams`
- `ICoEdge.GetEdge`
- `ICoEdge.IGetCurve`
- `ICoEdge.IGetCurveParams`
- `ICoEdge.IGetEdge`
- `IEdge.GetCurve`
- `IEdge.GetCurveParams2`
- `IEdge.IGetCurveParams2`