---
type: method
interface: IBody2
member: AddProfileBsplineByPts
returns: System.Object
parameters:
  -
    name: NumPoints
    type: System.Int32
    description: Number of B-spline points
  -
    name: PointArray
    type: System.Object
    description: 0-based array of 3 * NumPoints doubles
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IAddProfileBsplineByPts
keywords:
  - addprofilebsplinebypts
  - ibody2
  - body2
  - add
  - profile
  - bspline
  - pts
  - num
  - points
  - int32
  - point
  - array
  - object
---

# IBody2.AddProfileBsplineByPts

Adds a profile B-spline.

## Signature

```csharp
System.Object AddProfileBsplineByPts( 
   System.Int32
NumPoints
,
   System.Object
PointArray
)
```
## Parameters

- `NumPoints` (System.Int32): Number of B-spline points
- `PointArray` (System.Object): 0-based array of 3 * NumPoints doubles

## Return Value

Pointer to the profile B-spline, ICurve

## See Also

- `IBody2.IAddProfileBsplineByPts`