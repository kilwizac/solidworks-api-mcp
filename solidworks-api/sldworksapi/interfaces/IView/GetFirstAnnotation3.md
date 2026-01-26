---
type: method
interface: IView
member: GetFirstAnnotation3
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IAnnotation.GetNext3
  - IView.GetAnnotationCount
  - IView.GetAnnotations
  - IView.GetAnnotationsByType
  - IView.IGetAnnotations
keywords:
  - view
  - see
  - also
  - iview
  - annotations
  - drawing
  - views
  - annotation
  - iannotation
  - getfirstannotation3
  - first
  - annotation3
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - entities
  - attached
  - cosmetic
  - thread
  - show
  - sheet
---

# IView.GetFirstAnnotation3

Gets the first annotation in this drawing view.

## Signature

```csharp
Annotation GetFirstAnnotation3()
```
## Parameters

None.

## Return Value

First annotation in the drawing view

## Remarks

This method gets any display dimension, including suppressed, hidden, or dangling dimensions on the sheet and on the sheet format if it is visible. The sheet must be visible. See
ISheet::SheetFormatVisible
.
A dimension becomes suppressed or hidden when you specifically select a dimension and hide it or when you select a feature and say hide all dimensions. If you need to filter out these dimensions, you must use
IAnnotation::Visible
to check that status.
If the annotation is on a layer that is not shown, the annotation is still returned.
To get the next annotation, call
IAnnotation::GetNext3
.

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Entities Attached to Cosmetic Thread (VBA) (Get_Entities_Attached_To_Cosmetic_Thread_Example_VB.htm)
- Show Dimensions in Drawing Sheet (VBA) (Show_Dimensions_in_Drawing_Sheet_Example_VB.htm)

## See Also

- `IAnnotation.GetNext3`
- `IView.GetAnnotationCount`
- `IView.GetAnnotations`
- `IView.GetAnnotationsByType`
- `IView.IGetAnnotations`