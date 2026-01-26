---
type: method
interface: IEdge
member: GetParameter
returns: System.Object
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
  - IEdge.IGetParameter
keywords:
  - getparameter
  - iedge
  - edge
  - parameter
  - double
  - object
---

# IEdge.GetParameter

Gets the parameterization of the edge.

## Signature

```csharp
System.Object GetParameter( 
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

Array containing parameterization of the edge

## Remarks

This method returns an array of 2 doubles:
retval[0] - Parametric value of the specified point
retval[1] - BOOL value; True for success, false for failure

## See Also

- `IEdge.IGetParameter`