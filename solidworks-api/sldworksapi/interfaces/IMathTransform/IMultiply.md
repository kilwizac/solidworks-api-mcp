---
type: method
interface: IMathTransform
member: IMultiply
returns: MathTransform
parameters:
  -
    name: TransformObjIn
    type: MathTransform
    description: Math transform by which to multiply the calling math transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathTransform.Multiply
keywords:
  - imultiply
  - imathtransform
  - math
  - transform
  - multiply
  - obj
---

# IMathTransform.IMultiply

Multiplies two matrices together.

## Signature

```csharp
MathTransform IMultiply( 
   MathTransform
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (MathTransform): Math transform by which to multiply the calling math transform

## Return Value

Newly created math transform object or null if the operation fails

## Remarks

The resulting transform is the result of transforming math transform with respect to the transformObjIn coordinate frame.

## See Also

- `IMathTransform.Multiply`