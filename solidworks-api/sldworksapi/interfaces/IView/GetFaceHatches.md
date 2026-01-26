---
type: method
interface: IView
member: GetFaceHatches
returns: System.Object
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
  - IView.GetFaceHatchCount
  - IView.IGetFaceHatches
  - IView.ScaleHatchPattern
keywords:
  - face
  - hatch
  - see
  - ifacehatch
  - drawing
  - views
  - also
  - iview
  - hatches
  - view
  - hatching
  - getfacehatches
  - object
  - data
  - vb
  - net
  - vba
---

# IView.GetFaceHatches

Gets the face hatches in the view.

## Signature

```csharp
System.Object GetFaceHatches()
```
## Parameters

None.

## Return Value

Face hatches in the view

## Remarks

To get the number of solid hatches in a detail, broken, or crop view, use
IView::GetSolidHatchCount
. To get solid hatches in detail, broken, or crop views, use
IView::GetSolidHatchInfo
or
IView::IGetSolidHatchInfo
.

## Examples

- Get Face Hatch Data (C#) (Get_Face_Hatch_Data_Example_CSharp.htm)
- Get Face Hatch Data (VB.NET) (Get_Face_Hatch_Data_Example_VBNET.htm)
- Get Face Hatch Data (VBA) (Get_Face_Hatch_Data_Example_VB.htm)

## See Also

- `IModelDoc2.InsertHatchedFace`
- `IView.GetFaceHatchCount`
- `IView.IGetFaceHatches`
- `IView.ScaleHatchPattern`