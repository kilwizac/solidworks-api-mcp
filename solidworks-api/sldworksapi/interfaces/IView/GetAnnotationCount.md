---
type: method
interface: IView
member: GetAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetAnnotations
keywords:
  - annotation
  - see
  - also
  - iannotation
  - drawing
  - views
  - view
  - iview
  - annotations
  - getannotationcount
  - count
  - int32
---

# IView.GetAnnotationCount

Gets the number of annotations in this view.

## Signature

```csharp
System.Int32 GetAnnotationCount()
```
## Parameters

None.

## Return Value

Number of annotations

## Remarks

Call this method before
IView::GetAnnotations
to determine the size of the array for that method.

## See Also

- `IView.GetAnnotations`