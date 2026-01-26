---
type: property
interface: IAnnotationView
member: AnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IAnnotationView.Annotations
keywords:
  - annotationcount
  - iannotationview
  - annotation
  - view
  - count
  - int32
  - move
  - annotations
  - notes
  - area
  - vb
  - net
  - vba
readonly: true
---

# IAnnotationView.AnnotationCount

Gets the number of annotations in this annotation view.

## Signature

```csharp
System.Int32 AnnotationCount {get;}
```
## Parameters

None.

## Return Value

Number of annotations

## Remarks

Call this method before calling
IAnnotationView::IGetAnnotations
to get the size of the array for that method.

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)

## See Also

- `IAnnotationView.Annotations`