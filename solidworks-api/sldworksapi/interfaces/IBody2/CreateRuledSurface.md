---
type: method
interface: IBody2
member: CreateRuledSurface
returns: System.Object
parameters:
  -
    name: Curve1
    type: System.Object
    description: First curve
  -
    name: Curve2
    type: System.Object
    description: Second curve
  -
    name: ApexPoint
    type: System.Object
    description: Array of 3 doubles (x, y, z), the apex point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateRuledSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - ruled
  - createruledsurface
  - ibody2
  - body2
  - create
  - curve1
  - object
  - curve2
  - apex
  - point
---

# IBody2.CreateRuledSurface

Creates a ruled surface from the specified curves and apex point.

## Signature

```csharp
System.Object CreateRuledSurface( 
   System.Object
Curve1
,
   System.Object
Curve2
,
   System.Object
ApexPoint
)
```
## Parameters

- `Curve1` (System.Object): First curve
- `Curve2` (System.Object): Second curve
- `ApexPoint` (System.Object): Array of 3 doubles (x, y, z), the apex point

## Return Value

Pointer to ruled surface

## Remarks

Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.ICreateRuledSurface`