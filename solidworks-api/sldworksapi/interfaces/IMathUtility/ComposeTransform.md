---
type: method
interface: IMathUtility
member: ComposeTransform
returns: MathTransform
parameters:
  -
    name: XVec
    type: MathVector
    description: X-axis of the transform origin
  -
    name: YVec
    type: MathVector
    description: Y-axis of the transform origin
  -
    name: ZVec
    type: MathVector
    description: Z-axis of the transform origin
  -
    name: TransVec
    type: MathVector
    description: Translation of the origin in space
  -
    name: Scale
    type: System.Double
    description: Scale factor (typically 1; must be > 0)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.CreateTransform
  - IMathUtility.CreateTransformRotateAxis
  - IMathUtility.ICreateTransform
  - IMathUtility.ICreateTransformRotateAxis
keywords:
  - transform
  - compose
  - composetransform
  - imathutility
  - math
  - utility
  - vec
  - vector
  - trans
  - scale
  - double
---

# IMathUtility.ComposeTransform

Creates a new transform matrix.

## Signature

```csharp
MathTransform ComposeTransform( 
   MathVector
XVec
,
   MathVector
YVec
,
   MathVector
ZVec
,
   MathVector
TransVec
,
   System.Double
Scale
)
```
## Parameters

- `XVec` (MathVector): X-axis of the transform origin
- `YVec` (MathVector): Y-axis of the transform origin
- `ZVec` (MathVector): Z-axis of the transform origin
- `TransVec` (MathVector): Translation of the origin in space
- `Scale` (System.Double): Scale factor (typically 1; must be > 0)

## Return Value

New transform

## Remarks

XVec, YVec and ZVec are expected to be mutually orthogonal. These three vectors can be non-unit vectors and are unitized during the construction of the
IMathTransform
.

## See Also

- `IMathUtility.CreateTransform`
- `IMathUtility.CreateTransformRotateAxis`
- `IMathUtility.ICreateTransform`
- `IMathUtility.ICreateTransformRotateAxis`