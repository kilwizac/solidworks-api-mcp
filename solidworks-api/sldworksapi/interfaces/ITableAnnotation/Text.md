---
type: property
interface: ITableAnnotation
member: Text
returns: System.String
parameters:
  -
    name: Row
    type: System.Int32
    description: Index of the row
  -
    name: Column
    type: System.Int32
    description: Index of the column
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.CellTextHorizontalJustification
  - ITableAnnotation.CellTextVerticalJustification
  - ITableAnnotation.GetCellTextFormat
  - ITableAnnotation.GetCellUseDocTextFormat
  - ITableAnnotation.GetTextFormat
  - ITableAnnotation.GetUseDocTextFormat
  - ITableAnnotation.IsCellTextEditable
  - ITableAnnotation.SetCellTextFormat
  - ITableAnnotation.SetTextFormat
keywords:
  - text
  - itableannotation
  - table
  - annotation
  - row
  - int32
  - column
  - string
  - contents
  - vba
  - insert
  - hole
readonly: null
---

# ITableAnnotation.Text

Obsolete. Superseded by ITableAnnotation::Text2.

## Signature

```csharp
System.String Text( 
   System.Int32
Row
,
   System.Int32
Column
) {get; set;}
```
## Parameters

- `Row` (System.Int32): Index of the row
- `Column` (System.Int32): Index of the column

## Return Value

Cell text

## Remarks

Index for both rows and columns is 0-based.
This property returns the string that drives the text displayed in the specified cell. For example, the string returned by this property would be the parameter string if the cell is linked to a dimension value or custom property. To get the text actually displayed in the cell, use
ITableAnnotation::DisplayedText
.
Table annotation:
BOM
: All cells are editable.
General
: All cells are editable.
Hole
: Only some columns are editable because some information is automatically generated, thus, that information cannot be edited. The header row and custom columns are editable.
Revision
: All cells are editable
You might experience decreased performance when updating
the text in multiple cells in large tables because the table is rebuilt after changing the text in a cell. To increase performance while updating the text in large tables:
Set
IAnnotation::Visible
to false. (The table is not rebuilt while the table is hidden.)
Update the text in the table cells.
Set IAnnotation::Visible to true.

## Examples

- Get Table Annotation and Contents (VBA) (Get_Table_Annotation_and_Contents_Example_VB.htm)
- Insert Hole Table (VBA) (Insert_Hole_Table_Example_VB.htm)

## See Also

- `ITableAnnotation.CellTextHorizontalJustification`
- `ITableAnnotation.CellTextVerticalJustification`
- `ITableAnnotation.GetCellTextFormat`
- `ITableAnnotation.GetCellUseDocTextFormat`
- `ITableAnnotation.GetTextFormat`
- `ITableAnnotation.GetUseDocTextFormat`
- `ITableAnnotation.IsCellTextEditable`
- `ITableAnnotation.SetCellTextFormat`
- `ITableAnnotation.SetTextFormat`