---
type: method
interface: ITableAnnotation
member: InsertColumn
returns: System.Boolean
parameters:
  -
    name: Where
    type: System.Int32
    description: Where to insert the column as specified in swTableItemInsertPosition_e
  -
    name: Index
    type: System.Int32
    description: Index of the column where to insert the new column
  -
    name: Name
    type: System.String
    description: Column name
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - insertcolumn
  - itableannotation
  - table
  - annotation
  - insert
  - column
  - where
  - int32
  - index
  - name
  - string
  - boolean
  - part
  - number
  - bom
  - vb
  - net
  - vba
---

# ITableAnnotation.InsertColumn

Obsolete. Superseded by ITableAnnnotation::InsertColumn2.

## Signature

```csharp
System.Boolean InsertColumn( 
   System.Int32
Where
,
   System.Int32
Index
,
   System.String
Name
)
```
## Parameters

- `Where` (System.Int32): Where to insert the column as specified in swTableItemInsertPosition_e
- `Index` (System.Int32): Index of the column where to insert the new column
- `Name` (System.String): Column name

## Return Value

True if column is inserted successfully, false if not

## Remarks

The index for both rows and columns is 0-based.

## Examples

- Insert Part Number Column in BOM Table (C#) (Insert_Part_Number_Column_in_BOM_Table_Example_CSharp.htm)
- Insert Part Number Column in BOM Table (VB.NET) (Insert_Part_Number_Column_in_BOM_Table_Example_VBNET.htm)
- Insert Part Number Column in BOM Table (VBA) (Insert_Part_Number_Column_in_BOM_Table_Example_VB.htm)