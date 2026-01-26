---
type: method
interface: ITableAnnotation
member: SetColumnType2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column whose type to set
  -
    name: Type
    type: System.Int32
    description: Column type as defined by swTableColumnTypes_e
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to set the hidden column type, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetColumnType2
keywords:
  - setcolumntype2
  - itableannotation
  - table
  - annotation
  - column
  - type2
  - index
  - int32
  - type
  - include
  - hidden
  - boolean
  - insert
  - bom
  - vba
  - vb
  - net
---

# ITableAnnotation.SetColumnType2

Obsolete. Superseded by ITableAnnotation::SetColumnType3.

## Signature

```csharp
System.Boolean SetColumnType2( 
   System.Int32
Index
,
   System.Int32
Type
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): Index of the column whose type to set
- `Type` (System.Int32): Column type as defined by swTableColumnTypes_e
- `IncludeHidden` (System.Boolean): True to set the hidden column type, false to not

## Return Value

True if column type is set, false if not

## Remarks

The index for both rows and columns is 0-based.
When you set a column type, the title is automatically changed to match that column type. If you change the column type to be a custom property column, then the column title is empty and you must set the column title using
ITableAnnotation::SetColumnTitle2
.
A BOM table column cannot be changed to a Quantity type column in the SOLIDWORKS Design user interface. This method is consistent with the user interface.

## Examples

- Insert Column in BOM Table (VBA) (Insert_Column_in_BOM_Table_Example_VB.htm)
- Insert Column in BOM Table (VB.NET) (Insert_Column_in_BOM_Table_Example_VBNET.htm)
- Insert Column in BOM Table (C#) (Insert_Column_in_BOM_Table_Example_CSharp.htm)

## See Also

- `ITableAnnotation.GetColumnType2`