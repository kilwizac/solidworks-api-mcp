---
type: method
interface: IMathUtility
member: ICreatePoint
returns: MathPoint
parameters:
  -
    name: ArrayDataIn
    type: System.Double
    description: Array of doubles representing the coordinates (x,y,z) of the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.CreatePoint
keywords:
  - points
  - math
  - point
  - see
  - imathpoint
  - icreatepoint
  - imathutility
  - utility
  - create
  - array
  - data
  - double
---

# IMathUtility.ICreatePoint

Creates a new math point.

## Signature

```csharp
MathPoint ICreatePoint( 
   ref System.Double
ArrayDataIn
)
```
## Parameters

- `ArrayDataIn` (System.Double): Array of doubles representing the coordinates (x,y,z) of the point

## Return Value

Newly created IMathPoint object or NULL if the operation fails

## See Also

- `IMathUtility.CreatePoint`