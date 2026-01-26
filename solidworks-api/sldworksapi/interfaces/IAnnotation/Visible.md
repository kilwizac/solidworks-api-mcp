---
type: property
interface: IAnnotation
member: Visible
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - annotation
  - see
  - also
  - iannotation
  - hide
  - show
  - visible
  - int32
  - patterned
  - cosmetic
  - thread
  - annotations
  - data
  - vb
  - net
  - vba
readonly: null
---

# IAnnotation.Visible

Gets or sets the visibility state of this annotation.

## Signature

```csharp
System.Int32 Visible {get; set;}
```
## Parameters

None.

## Return Value

Visibility state as defined in swAnnotationVisibilityState_e

## Remarks

There are several reasons why an annotation might or might not be visible on the screen.
This property determines whether an annotation has been individually displayed or hidden if you selected and specifically hid the annotation or if you selected and specifically hid the dimensions of a feature. This property cannot determine whether an annotation is hidden if it is on a layer that is hidden (all annotations of this type are hidden) or if the feature that owns it is suppressed. Therefore, even though this method indicates that an annotation is visible, it might not necessarily be visible on the screen.
If an annotation's visibility is set to swAnnotationHalfHidden, then that annotation is in a half-hidden state, which is not a permanent state. For example, during a
Hide/Show Annotations
operation in a drawing, a half-hidden annotation is displayed in gray if the interactive user selects to show all annotations. Any annotation set to swAnnotationHalfHidden is hidden when the interactive user finishes using
Hide/Show Annotations
.
When you use this property to change the visibility of an annotation, you also cause changes to the visible model. To see those changes, redraw the graphics window using
IModelDoc2::GraphicsRedraw2
.

## Examples

- Get Patterned Cosmetic Thread Annotations Data (C#) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_CSharp.htm)
- Get Patterned Cosmetic Thread Annotations Data (VB.NET) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VBNET.htm)
- Get Patterned Cosmetic Thread Annotations Data (VBA) (Get_Patterned_Cosmetic_Thread_Annotations_Data_Example_VB.htm)