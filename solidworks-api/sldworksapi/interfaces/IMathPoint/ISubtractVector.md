---
type: method
interface: IMathPoint
member: ISubtractVector
returns: MathPoint
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector by which to subtract this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.SubtractVector
keywords:
  - isubtractvector
  - imathpoint
  - math
  - point
  - subtract
  - vector
  - obj
---

# IMathPoint.ISubtractVector

Gets a math point that describes the difference between a math vector's magnitude from the calling math point

## Signature

```csharp
MathPoint ISubtractVector( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector by which to subtract this math point

## Return Value

Newly created math point or NULL if the operation fails

## See Also

- `IMathPoint.SubtractVector`