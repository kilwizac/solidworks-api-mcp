---
type: method
interface: IView
member: GetTableAnnotations
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetTableAnnotationCount
  - IView.IGetTableAnnotations
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
  - gettableannotations
  - object
  - arrays
  - vba
  - vb
  - net
---

# IView.GetTableAnnotations

Gets all of the table annotations on this drawing view.

## Signature

```csharp
System.Object GetTableAnnotations()
```
## Parameters

None.

## Return Value

Array of table annotations

## Remarks

This method can be used to obtain the array of table annotations all at once instead of calling
IView::GetFirstTableAnnotation
and then repeatedly calling
ITableAnnotation::GetNext
to obtain the table annotations.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetTableAnnotationCount`
- `IView.IGetTableAnnotations`