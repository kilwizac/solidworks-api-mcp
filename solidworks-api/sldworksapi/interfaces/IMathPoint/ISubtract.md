---
type: method
interface: IMathPoint
member: ISubtract
returns: MathVector
parameters:
  -
    name: PointObjIn
    type: MathPoint
    description: Math point by which to subtract this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.Subtract
keywords:
  - isubtract
  - imathpoint
  - math
  - point
  - subtract
  - obj
  - vector
---

# IMathPoint.ISubtract

Gets a math vector that describes the difference between the math point magnitude from the calling math point.

## Signature

```csharp
MathVector ISubtract( 
   MathPoint
PointObjIn
)
```
## Parameters

- `PointObjIn` (MathPoint): Math point by which to subtract this math point

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathPoint.Subtract`