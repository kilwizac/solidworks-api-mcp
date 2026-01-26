---
type: method
interface: IMathVector
member: Subtract
returns: System.Object
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector to subtract from this math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.Add
  - IMathVector.IAdd
  - IMathVector.ISubtract
keywords:
  - subtract
  - imathvector
  - math
  - vector
  - obj
  - object
---

# IMathVector.Subtract

Subtracts the specified math vector's magnitude from this math vector and returns a new math vector.

## Signature

```csharp
System.Object Subtract( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector to subtract from this math vector

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathVector.Add`
- `IMathVector.IAdd`
- `IMathVector.ISubtract`