---
type: method
interface: IMathPoint
member: IMultiplyTransform
returns: MathPoint
parameters:
  -
    name: TransformObjIn
    type: MathTransform
    description: Math transform by which to multiply this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.MultiplyTransform
keywords:
  - imultiplytransform
  - imathpoint
  - math
  - point
  - multiply
  - transform
  - obj
---

# IMathPoint.IMultiplyTransform

Multiplies a math point with a math transform; the point is rotated, scaled, and then translated.

## Signature

```csharp
MathPoint IMultiplyTransform( 
   MathTransform
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (MathTransform): Math transform by which to multiply this math point

## Return Value

Newly created translated math point or null if the operation fails

## See Also

- `IMathPoint.MultiplyTransform`