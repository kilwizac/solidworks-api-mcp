---
type: method
interface: IMathVector
member: IDot
returns: System.Double
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector to use to determine the dot value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.Dot
keywords:
  - idot
  - imathvector
  - math
  - vector
  - dot
  - obj
  - double
---

# IMathVector.IDot

Gets the value of the dot product between two math vectors.

## Signature

```csharp
System.Double IDot( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector to use to determine the dot value

## Return Value

Value of the dot product

## See Also

- `IMathVector.Dot`