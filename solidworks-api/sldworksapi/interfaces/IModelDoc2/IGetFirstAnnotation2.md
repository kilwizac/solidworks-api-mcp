---
type: method
interface: IModelDoc2
member: IGetFirstAnnotation2
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IModelDoc2.GetFirstAnnotation2
keywords:
  - annotation
  - see
  - also
  - iannotation
  - first
  - igetfirstannotation2
  - imodeldoc2
  - model
  - doc2
  - annotation2
---

# IModelDoc2.IGetFirstAnnotation2

Gets the first annotation in the model.

## Signature

```csharp
Annotation IGetFirstAnnotation2()
```
## Parameters

None.

## Return Value

First annotation in model

## Remarks

For parts and assemblies, this method returns the first
IAnnotation
object in the model. For drawings, access the annotations using the
IView::GetFirstAnnotation3
method.
A dimension becomes suppressed or hidden when you specifically select a dimension and hide it, or when you select a feature and you select to hide all dimensions. If you need to filter out these dimensions, use
IAnnotation::Visible
to check that status.
NOTE:
The difference between the obsoleted IModelDoc2::GetFirstAnnotation and this method, IModelDoc2::GetFirstAnnotation2, is that IModelDoc2::GetFirstAnnotation2 retrieves any display dimension, including suppressed, hidden, or dangling dimensions.
To get the next annotation in the model, call
IAnnotation::GetNext3
.

## See Also

- `IModelDoc2.GetFirstAnnotation2`