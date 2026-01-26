---
type: method
interface: IMathVector
member: Add
returns: System.Object
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector object to add to this math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.IAdd
  - IMathVector.ISubtract
  - IMathVector.Subtract
keywords:
  - add
  - imathvector
  - math
  - vector
  - obj
  - object
---

# IMathVector.Add

Adds this math vector with the specified math vector.

## Signature

```csharp
System.Object Add( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector object to add to this math vector

## Return Value

Newly created math vector object or NULL if the operation fails

## See Also

- `IMathVector.IAdd`
- `IMathVector.ISubtract`
- `IMathVector.Subtract`