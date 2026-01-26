---
type: method
interface: IMathPoint
member: Subtract
returns: System.Object
parameters:
  -
    name: PointObjIn
    type: System.Object
    description: Math point by which to subtract this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.ISubtract
keywords:
  - subtract
  - imathpoint
  - math
  - point
  - obj
  - object
---

# IMathPoint.Subtract

Gets a math vector that describes the difference between the math point magnitude from the calling math point.

## Signature

```csharp
System.Object Subtract( 
   System.Object
PointObjIn
)
```
## Parameters

- `PointObjIn` (System.Object): Math point by which to subtract this math point

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathPoint.ISubtract`