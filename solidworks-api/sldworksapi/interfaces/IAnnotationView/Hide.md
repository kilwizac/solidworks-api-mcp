---
type: method
interface: IAnnotationView
member: Hide
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
  - IAnnotationView.IsShown
  - IAnnotationView.Show
keywords:
  - hide
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

# IAnnotationView.Hide

Hides the annotations in an annotation view that is not activated.

## Signature

```csharp
System.Boolean Hide()
```
## Parameters

None.

## Return Value

True if the annotations in an annotation view that is not activated are hidden (see Remarks )

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
- `IAnnotationView.IsShown`
- `IAnnotationView.Show`