---
type: method
interface: IEdge
member: IsParamReversed
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetCurveParams2
  - IEdge.IGetCurveParams2
keywords:
  - isparamreversed
  - iedge
  - edge
  - param
  - reversed
  - boolean
---

# IEdge.IsParamReversed

Gets whether the edge and its underlying curve have the same parameterization or if the direction is reversed.

## Signature

```csharp
System.Boolean IsParamReversed()
```
## Parameters

None.

## Return Value

True if the curve direction and edge direction are different, false if not

## Remarks

If this method returns True, then the curve direction and edge direction are different. As the parameter increases, the corresponding point on the edge moves from the end of the edge to the start.
If this method returns false, then the curve direction and edge direction are the same.

## See Also

- `IEdge.GetCurveParams2`
- `IEdge.IGetCurveParams2`