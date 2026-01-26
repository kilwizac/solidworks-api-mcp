---
type: method
interface: IMathPoint
member: IScale
returns: MathPoint
parameters:
  -
    name: ValueIn
    type: System.Double
    description: Scale by which to multiply the magnitude of the math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.Scale
keywords:
  - iscale
  - imathpoint
  - math
  - point
  - scale
  - value
  - double
---

# IMathPoint.IScale

Scales a math point's magnitude.

## Signature

```csharp
MathPoint IScale( 
   System.Double
ValueIn
)
```
## Parameters

- `ValueIn` (System.Double): Scale by which to multiply the magnitude of the math point

## Return Value

Newly created scaled math point or NULL if the operation fails

## See Also

- `IMathPoint.Scale`