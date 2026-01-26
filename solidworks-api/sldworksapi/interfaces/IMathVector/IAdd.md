---
type: method
interface: IMathVector
member: IAdd
returns: MathVector
parameters:
  -
    name: VectorObjIn
    type: MathVector
    description: Math vector object to add to this math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.Add
  - IMathVector.ISubtract
  - IMathVector.Subtract
keywords:
  - iadd
  - imathvector
  - math
  - vector
  - add
  - obj
---

# IMathVector.IAdd

Adds this math vector with the specified math vector.

## Signature

```csharp
MathVector IAdd( 
   MathVector
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (MathVector): Math vector object to add to this math vector

## Return Value

Newly created math vector object or NULL if the operation fails

## See Also

- `IMathVector.Add`
- `IMathVector.ISubtract`
- `IMathVector.Subtract`