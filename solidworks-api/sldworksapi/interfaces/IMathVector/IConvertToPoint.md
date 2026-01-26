---
type: method
interface: IMathVector
member: IConvertToPoint
returns: MathPoint
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.ConvertToPoint
keywords:
  - points
  - convert
  - iconverttopoint
  - imathvector
  - math
  - vector
  - point
---

# IMathVector.IConvertToPoint

Converts this math vector to a point by using the three components of the math vector to be the coordinates of a new math point.

## Signature

```csharp
MathPoint IConvertToPoint()
```
## Parameters

None.

## Return Value

Newly created IMathPoint object or NULL if the operation fails

## See Also

- `IMathVector.ConvertToPoint`