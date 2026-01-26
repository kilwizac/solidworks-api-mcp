---
type: property
interface: ITableAnnotation
member: Text2
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
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to get or set text in the hidden cell, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - table
  - text
  - text2
  - itableannotation
  - annotation
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - string
  - insert
  - bom
  - extract
  - data
  - vba
  - vb
  - net
readonly: null
---

# ITableAnnotation.Text2

Gets or sets the parametrized string of text for the specified cell of this table.

## Signature

```csharp
System.String Text2( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
IncludeHidden
) {get; set;}
```
## Parameters

- `Row` (System.Int32): Index of the row
- `Column` (System.Int32): Index of the column
- `IncludeHidden` (System.Boolean): True to get or set text in the hidden cell, false to not

## Return Value

Cell text

## Remarks

Index for both rows and columns is 0-based.
This property returns the string that drives the text displayed in the specified cell. For example, the string returned by this property would be the parameter string if the cell is linked to a dimension value or custom property. To get the text actually displayed in the cell, use
ITableAnnotation::DisplayedText2
.
Table annotation:
BOM
: All cells are editable.
General
: All cells are editable.
Hole
: Only columns that are not automatically generated are editable. The header row and custom columns are editable.
Revision
: All cells are editable
You might experience decreased performance when updating
the text in multiple cells in large tables, because the table automatically rebuilds each time you change the text in a cell. To increase performance while updating the text in large tables:
Set
IAnnotation::Visible
to false. (The table is not rebuilt while the table is hidden.)
Update the text in the table cells.
Set IAnnotation::Visible to true.

## Examples

- Insert BOM Table and Extract Data (VBA) (Insert_BOM_Table_and_Extract_Data_Example_VB.htm)
- Insert BOM Table and Extract Data (VB.NET) (Insert_BOM_Table_and_Extract_Data_Example_VBNET.htm)
- Insert BOM Table and Extract Data (C#) (Insert_BOM_Table_and_Extract_Data_Example_CSharp.htm)