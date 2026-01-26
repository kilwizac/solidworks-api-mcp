---
type: property
interface: IModelView
member: Orientation3
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.Scale2
keywords:
  - view
  - orientation
  - model
  - orientation3
  - imodelview
  - math
  - transform
readonly: null
---

# IModelView.Orientation3

Gets or sets the model view orientation matrix.

## Signature

```csharp
MathTransform Orientation3 {get; set;}
```
## Parameters

None.

## Return Value

View orientation matrix

## Remarks

When modifying a model view transform, you must use IModelView::Orientation3 and
IModelView::Translation3
. For example:
...
Dim xyzOrigin As SldWorks.MathPoint
dPoint(0) = 0#: dPoint(1) = 0#: dPoint(2) = 0#
Set xyzOrigin = swMathUtil.
CreatePoint
((dPoint))
Set swVectorZ = swVectorZ.
Scale
(-1)
Set swMathTrans = swMathUtil.
ComposeTransform
(swVectorX, swVectorY, swVectorZ, xyzOrigin.
ConvertToVector
, 1#)
Set swMathTrans = swMathTrans.
Inverse
Set swModelView = swModel.
ActiveView
Set swViewTrans = swModelView.
Orientation3
swModelView.
Orientation3
= swMathTrans
Dim u As Double
u = swModelView.
Scale2
Set swMathPoint = swVectorT.
ConvertToPoint
Set swMathPoint = swMathPoint.
Scale
(-1 * u)
Set swMathPoint = swMathPoint.
MultiplyTransform
(swMathTrans)
swModelView.
Translation3
= swMathPoint.
ConvertToVector
...
Also, check the vectors by looking at the triad in the model view.

## See Also

- `IModelView.Scale2`