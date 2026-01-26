---
type: property
interface: ITableAnnotation
member: DisplayedText2
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
    description: True to get the text displayed in the hidden cell, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - cells
  - tables
  - table
  - text
  - displayedtext2
  - itableannotation
  - annotation
  - displayed
  - text2
  - row
  - int32
  - column
  - include
  - hidden
  - boolean
  - string
  - contents
  - vba
readonly: true
---

# ITableAnnotation.DisplayedText2

Gets the actual text displayed in the specified cell in this table.

## Signature

```csharp
System.String DisplayedText2( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Boolean
IncludeHidden
) {get;}
```
## Parameters

- `Row` (System.Int32): Index of the row
- `Column` (System.Int32): Index of the column
- `IncludeHidden` (System.Boolean): True to get the text displayed in the hidden cell, false to not

## Return Value

Actual text displayed in the specified cell

## Remarks

Index for both rows and columns is 0-based.
To get the parameterized string that drives this displayed text, use
ITableAnnotation::Text2
.

## Examples

- Get Table Annotation and Contents (VBA) (Get_Table_Annotation_and_Contents_Example_VB.htm)