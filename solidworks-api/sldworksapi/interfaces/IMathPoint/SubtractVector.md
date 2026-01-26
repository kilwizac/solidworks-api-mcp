---
type: method
interface: IMathPoint
member: SubtractVector
returns: System.Object
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector by which to subtract this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.ISubtractVector
keywords:
  - subtractvector
  - imathpoint
  - math
  - point
  - subtract
  - vector
  - obj
  - object
---

# IMathPoint.SubtractVector

Gets a math point that describes the difference between a math vector's magnitude from the calling math point

## Signature

```csharp
System.Object SubtractVector( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector by which to subtract this math point

## Return Value

Newly created math point or NULL if the operation fails

## See Also

- `IMathPoint.ISubtractVector`