---
type: method
interface: IMathVector
member: ISubtract
returns: MathVector
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector to subtract from this math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.Add
  - IMathVector.IAdd
  - IMathVector.Subtract
keywords:
  - isubtract
  - imathvector
  - math
  - vector
  - subtract
  - obj
---

# IMathVector.ISubtract

Subtracts the specified math vector's magnitude from this math vector and returns a new math vector.

## Signature

```csharp
MathVector ISubtract( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector to subtract from this math vector

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathVector.Add`
- `IMathVector.IAdd`
- `IMathVector.Subtract`