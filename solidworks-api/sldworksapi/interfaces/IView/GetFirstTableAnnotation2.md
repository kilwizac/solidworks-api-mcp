---
type: method
interface: IView
member: GetFirstTableAnnotation2
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
  - ITableAnnotation.GetNext
  - IView.GetTableAnnotations
keywords:
  - getfirsttableannotation2
  - iview
  - view
  - first
  - table
  - annotation2
  - object
  - annotation
  - contents
  - vba
---

# IView.GetFirstTableAnnotation2

Gets the first table annotation in this view.

## Signature

```csharp
System.Object GetFirstTableAnnotation2()
```
## Parameters

None.

## Return Value

First table annotation

## Remarks

This method obsoletes IView::GetFirstTableAnnotation by supporting inactive sheets.

## Examples

- Get Table Annotation and Contents (VBA) (Get_Table_Annotation_and_Contents_Example_VB.htm)

## See Also

- `ITableAnnotation.GetNext`
- `IView.GetTableAnnotations`