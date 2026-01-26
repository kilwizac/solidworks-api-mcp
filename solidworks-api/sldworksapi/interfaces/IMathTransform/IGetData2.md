---
type: method
interface: IMathTransform
member: IGetData2
returns: void
parameters:
  -
    name: XAxisObjOut
    type: MathVector
    description: Rotation about the x axis
  -
    name: YAxisObjOut
    type: MathVector
    description: Rotation about the y axis
  -
    name: ZAxisObjOut
    type: MathVector
    description: Rotation about the z axis
  -
    name: TransformObjOut
    type: MathVector
    description: Transformation vector
  -
    name: ScaleOut
    type: System.Double
    description: Scale
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathTransform.GetData2
  - IMathTransform.ISetData
  - IMathTransform.SetData
keywords:
  - igetdata2
  - imathtransform
  - math
  - transform
  - data2
  - axis
  - obj
  - out
  - vector
  - scale
  - double
  - void
---

# IMathTransform.IGetData2

Gets the math vectors and data that describe the transformation matrix.

## Signature

```csharp
void IGetData2( 
   out MathVector
XAxisObjOut
,
   out MathVector
YAxisObjOut
,
   out MathVector
ZAxisObjOut
,
   out MathVector
TransformObjOut
,
   out System.Double
ScaleOut
)
```
## Parameters

- `XAxisObjOut` (MathVector): Rotation about the x axis
- `YAxisObjOut` (MathVector): Rotation about the y axis
- `ZAxisObjOut` (MathVector): Rotation about the z axis
- `TransformObjOut` (MathVector): Transformation vector
- `ScaleOut` (System.Double): Scale

## Return Value

The previous version of this method, IMathTransform::IGetData , returned inversed x, y, z axes. This version of this method returns the actual x, y, z axes.

## See Also

- `IMathTransform.GetData2`
- `IMathTransform.ISetData`
- `IMathTransform.SetData`