---
type: method
interface: IMathVector
member: IScale
returns: MathVector
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
  - IMathVector.Scale
keywords:
  - iscale
  - imathvector
  - math
  - vector
  - scale
  - value
  - double
---

# IMathVector.IScale

Scales this math vector's magnitude by a factor and returns a new math vector.

## Signature

```csharp
MathVector IScale( 
   System.Double
ValueIn
)
```
## Parameters

- `ValueIn` (System.Double): Value by which to scale the math vector

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathVector.Scale`