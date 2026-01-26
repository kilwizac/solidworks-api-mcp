---
type: method
interface: IMathUtility
member: ICreateTransformRotateAxis
returns: MathTransform
parameters:
  -
    name: PointObjIn
    type: MathPoint
    description: Center point of the axis of the transform
  -
    name: VectorObjIn
    type: MathVector
    description: Axis vector of the transform
  -
    name: Angle
    type: System.Double
    description: Angle of rotation about the X axis vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.ComposeTransform
  - IMathUtility.CreateTransform
  - IMathUtility.CreateTransformRotateAxis
  - IMathUtility.ICreateTransform
keywords:
  - transform
  - rotate
  - icreatetransformrotateaxis
  - imathutility
  - math
  - utility
  - create
  - axis
  - point
  - obj
  - vector
  - angle
  - double
---

# IMathUtility.ICreateTransformRotateAxis

Creates a new math transform matrix that represents the rotation by an angle about a vector positioned at a point.

## Signature

```csharp
MathTransform ICreateTransformRotateAxis( 
   MathPoint
PointObjIn
,
   MathVector
VectorObjIn
,
   System.Double
Angle
)
```
## Parameters

- `PointObjIn` (MathPoint): Center point of the axis of the transform
- `VectorObjIn` (MathVector): Axis vector of the transform
- `Angle` (System.Double): Angle of rotation about the X axis vector

## Return Value

Newly created math transform or NULL if the operation fails

## See Also

- `IMathUtility.ComposeTransform`
- `IMathUtility.CreateTransform`
- `IMathUtility.CreateTransformRotateAxis`
- `IMathUtility.ICreateTransform`