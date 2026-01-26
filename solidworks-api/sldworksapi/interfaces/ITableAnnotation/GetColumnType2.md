---
type: method
interface: ITableAnnotation
member: GetColumnType2
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the column whose type to get
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to get the type of the hidden column, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.SetColumnType2
keywords:
  - getcolumntype2
  - itableannotation
  - table
  - annotation
  - column
  - type2
  - index
  - int32
  - include
  - hidden
  - boolean
  - insert
  - bom
  - vba
  - vb
  - net
---

# ITableAnnotation.GetColumnType2

Obsolete. Superseded by ITableAnnotation::GetColumnType3.

## Signature

```csharp
System.Int32 GetColumnType2( 
   System.Int32
Index
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating the column whose type to get
- `IncludeHidden` (System.Boolean): True to get the type of the hidden column, false to not

## Return Value

Type of column as defined by swTableColumnTypes_e

## Examples

- Insert Column in BOM Table (VBA) (Insert_Column_in_BOM_Table_Example_VB.htm)
- Insert Column in BOM Table (VB.NET) (Insert_Column_in_BOM_Table_Example_VBNET.htm)
- Insert Column in BOM Table (C#) (Insert_Column_in_BOM_Table_Example_CSharp.htm)

## See Also

- `ITableAnnotation.SetColumnType2`