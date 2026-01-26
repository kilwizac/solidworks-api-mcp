---
type: method
interface: IMathTransform
member: GetData2
returns: void
parameters:
  -
    name: XAxisObjOut
    type: System.Object
    description: Rotation about the x axis
  -
    name: YAxisObjOut
    type: System.Object
    description: Rotation about the y axis
  -
    name: ZAxisObjOut
    type: System.Object
    description: Rotation about the z axis
  -
    name: TransformObjOut
    type: System.Object
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
  - IMathTransform.IGetData2
  - IMathTransform.ISetData
  - IMathTransform.SetData
keywords:
  - getdata2
  - imathtransform
  - math
  - transform
  - data2
  - axis
  - obj
  - out
  - object
  - scale
  - double
  - void
---

# IMathTransform.GetData2

Gets the math vectors and data that describe the transformation matrix.

## Signature

```csharp
void GetData2( 
   out System.Object
XAxisObjOut
,
   out System.Object
YAxisObjOut
,
   out System.Object
ZAxisObjOut
,
   out System.Object
TransformObjOut
,
   out System.Double
ScaleOut
)
```
## Parameters

- `XAxisObjOut` (System.Object): Rotation about the x axis
- `YAxisObjOut` (System.Object): Rotation about the y axis
- `ZAxisObjOut` (System.Object): Rotation about the z axis
- `TransformObjOut` (System.Object): Transformation vector
- `ScaleOut` (System.Double): Scale

## Return Value

The previous version of this method, IMathTransform::GetData , returned inversed x, y, z axes. This version of this method returns the actual x, y, z axes.

## See Also

- `IMathTransform.IGetData2`
- `IMathTransform.ISetData`
- `IMathTransform.SetData`