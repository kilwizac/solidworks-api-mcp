---
type: method
interface: IMathVector
member: Scale
returns: System.Object
parameters:
  -
    name: ValueIn
    type: System.Double
    description: Value by which to scale the math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.IScale
keywords:
  - scale
  - imathvector
  - math
  - vector
  - value
  - double
  - object
---

# IMathVector.Scale

Scales this math vector's magnitude by a factor and returns a new math vector.

## Signature

```csharp
System.Object Scale( 
   System.Double
ValueIn
)
```
## Parameters

- `ValueIn` (System.Double): Value by which to scale the math vector

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathVector.IScale`