---
type: method
interface: IMathVector
member: IMultiplyTransform
returns: MathVector
parameters:
  -
    name: TransformObjIn
    type: MathTransform
    description: Math transform by which to multiply the math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.MultiplyTransform
keywords:
  - imultiplytransform
  - imathvector
  - math
  - vector
  - multiply
  - transform
  - obj
---

# IMathVector.IMultiplyTransform

Multiplies this math vector by the specified math transform.

## Signature

```csharp
MathVector IMultiplyTransform( 
   MathTransform
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (MathTransform): Math transform by which to multiply the math vector

## Return Value

Newly created math vector or NULL if the operation fails

## Remarks

The matrix is rotated and then scaled. It is not transformed because the math vector is assumed to be positionless.

## See Also

- `IMathVector.MultiplyTransform`