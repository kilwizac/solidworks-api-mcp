---
type: method
interface: IMathTransform
member: ISetData
returns: void
parameters:
  -
    name: XAxisObjIn
    type: MathVector
    description: X rotation math vector object of the transform
  -
    name: YAxisObjIn
    type: MathVector
    description: Y rotation math vector object of the transform
  -
    name: ZAxisObjIn
    type: MathVector
    description: Z rotation math vector object of the transform
  -
    name: TransformObjIn
    type: MathVector
    description: Translation math vector object of the transform
  -
    name: ScaleValIn
    type: System.Double
    description: Scale component of the transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathTransform.GetData2
  - IMathTransform.IGetData2
  - IMathTransform.SetData
keywords:
  - isetdata
  - imathtransform
  - math
  - transform
  - data
  - axis
  - obj
  - vector
  - scale
  - val
  - double
  - void
---

# IMathTransform.ISetData

Sets the math vectors and data that describe the transformation matrix.

## Signature

```csharp
void ISetData( 
   MathVector
XAxisObjIn
,
   MathVector
YAxisObjIn
,
   MathVector
ZAxisObjIn
,
   MathVector
TransformObjIn
,
   System.Double
ScaleValIn
)
```
## Parameters

- `XAxisObjIn` (MathVector): X rotation math vector object of the transform
- `YAxisObjIn` (MathVector): Y rotation math vector object of the transform
- `ZAxisObjIn` (MathVector): Z rotation math vector object of the transform
- `TransformObjIn` (MathVector): Translation math vector object of the transform
- `ScaleValIn` (System.Double): Scale component of the transform

## Return Value

Unknown.

## See Also

- `IMathTransform.GetData2`
- `IMathTransform.IGetData2`
- `IMathTransform.SetData`