---
type: method
interface: IAnnotationView
member: IGetAnnotations
returns: Annotation
parameters:
  -
    name: AnnotationCount
    type: System.Int32
    description: Number of annotations
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IAnnotationView.Annotations
keywords:
  - igetannotations
  - iannotationview
  - annotation
  - view
  - annotations
  - count
  - int32
---

# IAnnotationView.IGetAnnotations

Obsolete. Superseded by IAnnotationView::GetAnnotations2.

## Signature

```csharp
Annotation IGetAnnotations( 
   System.Int32
AnnotationCount
)
```
## Parameters

- `AnnotationCount` (System.Int32): Number of annotations

## Return Value

in-process, unmanaged C++: Pointer to an array of annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IAnnotationView::AnnotationCount
to get the value for AnnotationCount.

## See Also

- `IAnnotationView.Annotations`