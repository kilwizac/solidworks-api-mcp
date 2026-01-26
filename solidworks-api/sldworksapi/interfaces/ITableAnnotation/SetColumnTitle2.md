---
type: method
interface: ITableAnnotation
member: SetColumnTitle2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the column whose title to set
  -
    name: Title
    type: System.String
    description: Column title
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to set the hidden column title, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetColumnTitle2
  - ITableAnnotation.SetColumnType2
keywords:
  - table
  - columns
  - setcolumntitle2
  - itableannotation
  - annotation
  - column
  - title2
  - index
  - int32
  - title
  - string
  - include
  - hidden
  - boolean
---

# ITableAnnotation.SetColumnTitle2

Sets the title of the specified column.

## Signature

```csharp
System.Boolean SetColumnTitle2( 
   System.Int32
Index
,
   System.String
Title
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): Index of the column whose title to set
- `Title` (System.String): Column title
- `IncludeHidden` (System.Boolean): True to set the hidden column title, false to not

## Return Value

True if title is set, false if not

## Remarks

The index for both rows and columns is 0-based.
False is returned if the table does not have a header enabled. The title cannot be set to empty text.

## See Also

- `ITableAnnotation.GetColumnTitle2`
- `ITableAnnotation.SetColumnType2`