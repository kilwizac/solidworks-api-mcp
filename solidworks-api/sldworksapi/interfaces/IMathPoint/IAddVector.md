---
type: method
interface: IMathPoint
member: IAddVector
returns: MathPoint
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector by which to translate this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.AddVector
  - IMathPoint.ISubtractVector
  - IMathPoint.SubtractVector
keywords:
  - iaddvector
  - imathpoint
  - math
  - point
  - add
  - vector
  - obj
---

# IMathPoint.IAddVector

Translates a math point by a math vector to create a new math point.

## Signature

```csharp
MathPoint IAddVector( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector by which to translate this math point

## Return Value

Newly created translated math point or NULL if the operation fails

## See Also

- `IMathPoint.AddVector`
- `IMathPoint.ISubtractVector`
- `IMathPoint.SubtractVector`