---
type: method
interface: IAnnotationView
member: Show
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IAnnotation.CanShowInAnnotationView
  - IAnnotation.CanShowInMultipleAnnotationViews
  - IAnnotationView.Activate
  - IAnnotationView.ActivateAndReorient
  - IAnnotationView.Hide
  - IAnnotationView.IsShown
keywords:
  - show
  - iannotationview
  - annotation
  - view
  - boolean
  - move
  - annotations
  - notes
  - area
  - vb
  - net
  - vba
---

# IAnnotationView.Show

Shows the annotations in an annotation view that is not activated.

## Signature

```csharp
System.Boolean Show()
```
## Parameters

None.

## Return Value

True if the annotations in an annotation view that is not activated are shown (see Remarks )

## Remarks

This method returns false if the annotation view is activated.

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)

## See Also

- `IAnnotation.CanShowInAnnotationView`
- `IAnnotation.CanShowInMultipleAnnotationViews`
- `IAnnotationView.Activate`
- `IAnnotationView.ActivateAndReorient`
- `IAnnotationView.Hide`
- `IAnnotationView.IsShown`