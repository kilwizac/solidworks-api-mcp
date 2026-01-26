---
type: method
interface: IMathPoint
member: Scale
returns: System.Object
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
  - IMathPoint.IScale
keywords:
  - scale
  - imathpoint
  - math
  - point
  - value
  - double
  - object
---

# IMathPoint.Scale

Scales a math point's magnitude.

## Signature

```csharp
System.Object Scale( 
   System.Double
ValueIn
)
```
## Parameters

- `ValueIn` (System.Double): Scale by which to multiply the magnitude of the math point

## Return Value

Newly created scaled math point or NULL if the operation fails

## See Also

- `IMathPoint.IScale`