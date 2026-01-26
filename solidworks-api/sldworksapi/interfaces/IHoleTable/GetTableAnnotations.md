---
type: method
interface: IHoleTable
member: GetTableAnnotations
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IHoleTable.GetTableAnnotationCount
  - IHoleTable.IGetTableAnnotations
keywords:
  - split
  - table
  - gettableannotations
  - iholetable
  - hole
  - annotations
  - object
  - hide
  - show
  - first
  - column
  - vb
  - net
  - vba
---

# IHoleTable.GetTableAnnotations

Gets the hole table annotations for this hole table feature.

## Signature

```csharp
System.Object GetTableAnnotations()
```
## Parameters

None.

## Return Value

Array of IHoleTableAnnotation objects for this hole table feature

## Remarks

Because many of the
ITableAnnotation
APIs apply to all parts of a table annotation that has been split, you might not want all of the table annotations when just one table annotation would be sufficient.

## Examples

- Hide or Show First Column in Hole Table (VB.NET) (Hide_or_Show_First_Column_in_Hole_Table_Example_VBNET.htm)
- Hide or Show First Column in Hole Table (VBA) (Hide_or_Show_First_Column_in_Hole_Table_Example_VB.htm)
- Hide or Show First Column in Hole Table (C#) (Hide_or_Show_First_Column_in_Hole_Table_Example_CSharp.htm)

## See Also

- `IHoleTable.GetTableAnnotationCount`
- `IHoleTable.IGetTableAnnotations`