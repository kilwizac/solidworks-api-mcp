---
type: method
interface: IView
member: GetFaceHatchCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
  - ui
related:
  - IModelDoc2.InsertHatchedFace
  - IView.GetFaceHatches
  - IView.IGetFaceHatches
  - IView.ScaleHatchPattern
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - face
  - hatches
  - view
  - hatching
  - getfacehatchcount
  - hatch
  - count
  - int32
  - crosshatches
  - vba
---

# IView.GetFaceHatchCount

Gets the number of face hatches in the view.

## Signature

```csharp
System.Int32 GetFaceHatchCount()
```
## Parameters

None.

## Return Value

Number of faces hatches in the view

## Remarks

Call this method before calling
IView::IGetFaceHatches
to get the size of the array for that method.
To get the number of solid hatches in a detail, broken, or crop view, use
IView::GetSolidHatchCount
. To get solid hatches in detail, broken, or crop views, use
IView::GetSolidHatchInfo
or
IView::IGetSolidHatchInfo
.

## Examples

- Get Crosshatches on the View (VBA) (Get_Crosshatches_on_View_Example_VB.htm)

## See Also

- `IModelDoc2.InsertHatchedFace`
- `IView.GetFaceHatches`
- `IView.IGetFaceHatches`
- `IView.ScaleHatchPattern`