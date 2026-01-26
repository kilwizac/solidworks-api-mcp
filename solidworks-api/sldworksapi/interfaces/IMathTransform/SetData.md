---
type: method
interface: IMathTransform
member: SetData
returns: void
parameters:
  -
    name: XAxisObjIn
    type: System.Object
    description: X rotation math vector object of the transform
  -
    name: YAxisObjIn
    type: System.Object
    description: Y rotation math vector object of the transform
  -
    name: ZAxisObjIn
    type: System.Object
    description: Z rotation math vector object of the transform
  -
    name: TransformObjIn
    type: System.Object
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
  - IMathTransform.ISetData
keywords:
  - setdata
  - imathtransform
  - math
  - transform
  - data
  - axis
  - obj
  - object
  - scale
  - val
  - double
  - void
---

# IMathTransform.SetData

Sets the math vectors and data that describe the transformation matrix.

## Signature

```csharp
void SetData( 
   System.Object
XAxisObjIn
,
   System.Object
YAxisObjIn
,
   System.Object
ZAxisObjIn
,
   System.Object
TransformObjIn
,
   System.Double
ScaleValIn
)
```
## Parameters

- `XAxisObjIn` (System.Object): X rotation math vector object of the transform
- `YAxisObjIn` (System.Object): Y rotation math vector object of the transform
- `ZAxisObjIn` (System.Object): Z rotation math vector object of the transform
- `TransformObjIn` (System.Object): Translation math vector object of the transform
- `ScaleValIn` (System.Double): Scale component of the transform

## Return Value

Unknown.

## See Also

- `IMathTransform.GetData2`
- `IMathTransform.IGetData2`
- `IMathTransform.ISetData`