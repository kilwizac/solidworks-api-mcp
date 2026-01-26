---
type: method
interface: IView
member: IGetTableAnnotations
returns: TableAnnotation
parameters:
  -
    name: NumTableAnnotation
    type: System.Int32
    description: Total number of table annotations in this drawing view
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
  - annotation
  - iannotation
  - view
  - iview
  - tables
  - igettableannotations
  - num
  - int32
---

# IView.IGetTableAnnotations

Gets all of the table annotations in this drawing view.

## Signature

```csharp
TableAnnotation IGetTableAnnotations( 
   System.Int32
NumTableAnnotation
)
```
## Parameters

- `NumTableAnnotation` (System.Int32): Total number of table annotations in this drawing view

## Return Value

in-process, unmanaged C++: Pointer to an array of table annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use this method to obtain the array of table annotations all at once instead of calling
IView::GetFirstTableAnnotation
and then repeatedly calling
ITableAnnotation::GetNext
to obtain the table annotations in the drawing view.
Before calling this method, call
IView::GetTableAnnotationCount
to get the value for numTableAnnotations.

## See Also

- `IView.GetTableAnnotations`