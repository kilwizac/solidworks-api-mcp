---
type: method
interface: IView
member: IGetAnnotations
returns: Annotation
parameters:
  -
    name: NumAnnotations
    type: System.Int32
    description: Number of annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetAnnotations
  - IView.GetFirstAnnotation3
keywords:
  - view
  - see
  - also
  - iview
  - annotations
  - annotation
  - iannotation
  - drawing
  - views
  - igetannotations
  - num
  - int32
---

# IView.IGetAnnotations

Gets the annotations in this view.

## Signature

```csharp
Annotation IGetAnnotations( 
   System.Int32
NumAnnotations
)
```
## Parameters

- `NumAnnotations` (System.Int32): Number of annotations

## Return Value

in-process, unmanaged C++: Pointer to an array of annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IView::GetAnnotationCount
before calling this method to get the value for NumAnnotations.

## See Also

- `IView.GetAnnotations`
- `IView.GetFirstAnnotation3`