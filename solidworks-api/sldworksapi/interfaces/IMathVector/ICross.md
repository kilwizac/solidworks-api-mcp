---
type: method
interface: IMathVector
member: ICross
returns: MathVector
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector to use to determine the cross product
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.Cross
keywords:
  - icross
  - imathvector
  - math
  - vector
  - cross
  - obj
---

# IMathVector.ICross

Gets the cross product between two math vectors.

## Signature

```csharp
MathVector ICross( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector to use to determine the cross product

## Return Value

Newly created math vector

## See Also

- `IMathVector.Cross`