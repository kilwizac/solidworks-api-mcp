---
type: method
interface: IAnnotation
member: CanShowInAnnotationView
returns: System.Boolean
parameters:
  -
    name: AnnotationViewName
    type: System.String
    description: Name of annotation view in which to show this annotation (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - ui
related:
  - IAnnotation.CanShowInMultipleAnnotationViews
  - IAnnotationView.Hide
  - IAnnotationView.IsShown
  - IAnnotationView.Show
keywords:
  - canshowinannotationview
  - iannotation
  - annotation
  - can
  - show
  - view
  - name
  - string
  - boolean
  - where
  - annotations
  - shown
  - vb
  - net
  - vba
---

# IAnnotation.CanShowInAnnotationView

Gets whether this annotation can be shown in the specified annotation view.

## Signature

```csharp
System.Boolean CanShowInAnnotationView( 
   System.String
AnnotationViewName
)
```
## Parameters

- `AnnotationViewName` (System.String): Name of annotation view in which to show this annotation (see Remarks )

## Return Value

True if this annotation can be shown in the specified annotation view, false if not

## Remarks

Use
IFeature::Name
to get the name of the annotation view. See the examples for details.

## Examples

- Get Where Annotations Can Be Shown (C#) (Get_Where_Annotations_Can_Be_Shown_Example_CSharp.htm)
- Get Where Annotations Can Be Shown (VB.NET) (Get_Where_Annotations_Can_Be_Shown_Example_VBNET.htm)
- Get Where Annotations Can Be Shown (VBA) (Get_Where_Annotations_Can_Be_Shown_Example_VB.htm)

## See Also

- `IAnnotation.CanShowInMultipleAnnotationViews`
- `IAnnotationView.Hide`
- `IAnnotationView.IsShown`
- `IAnnotationView.Show`