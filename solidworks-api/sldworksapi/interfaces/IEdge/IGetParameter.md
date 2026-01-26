---
type: method
interface: IEdge
member: IGetParameter
returns: System.Double
parameters:
  -
    name: X
    type: System.Double
    description: X value
  -
    name: Y
    type: System.Double
    description: Y value
  -
    name: Z
    type: System.Double
    description: Z value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.GetParameter
keywords:
  - igetparameter
  - iedge
  - edge
  - parameter
  - double
---

# IEdge.IGetParameter

Gets the parameterization of the edge.

## Signature

```csharp
System.Double IGetParameter( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X value
- `Y` (System.Double): Y value
- `Z` (System.Double): Z value

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

This method returns an array of 2 doubles:
retval[0] - Parametric value of the specified point
retval[1] - BOOL value; True for success, false for failure

## See Also

- `IEdge.GetParameter`