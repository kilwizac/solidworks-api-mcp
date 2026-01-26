---
type: method
interface: IView
member: IGetFaceHatches
returns: FaceHatch
parameters:
  -
    name: NumFacesHatches
    type: System.Int32
    description: Number of face hatches in the view
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
  - igetfacehatches
  - num
  - faces
  - int32
---

# IView.IGetFaceHatches

Gets the face hatches in the view.

## Signature

```csharp
FaceHatch IGetFaceHatches( 
   System.Int32
NumFacesHatches
)
```
## Parameters

- `NumFacesHatches` (System.Int32): Number of face hatches in the view

## Return Value

in-process, unmanaged C++: Pointer to an array of face hatches VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IView::GetFaceHatchCount
before calling this method to get the value for NumFacesHatches.
To get the number of solid-fill hatches in a detail, broken, or crop view, use
IView::GetSolidHatchCount
. To get solid hatches in detail, broken, or crop views, use
IView::GetSolidHatchInfo
or
IView::IGetSolidHatchInfo
.

## See Also

- `IModelDoc2.InsertHatchedFace`
- `IView.GetFaceHatches`
- `IView.ScaleHatchPattern`