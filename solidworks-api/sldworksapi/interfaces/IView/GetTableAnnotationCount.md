---
type: method
interface: IView
member: GetTableAnnotationCount
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
  - IView.GetTableAnnotations
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - drawing
  - views
  - gettableannotationcount
  - iview
  - view
  - annotation
  - count
  - int32
---

# IView.GetTableAnnotationCount

Gets the number of table annotations in this drawing view.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Total number of table annotations on this drawing view

## Remarks

Call this method before calling
IView::IGetTableAnnotations
to determine the size of the array for that method.

## See Also

- `IView.GetTableAnnotations`