---
type: method
interface: ITableAnnotation
member: GetColumnTitle2
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the column
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to get the title of the hidden column, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.SetColumnTitle2
keywords:
  - table
  - columns
  - getcolumntitle2
  - itableannotation
  - annotation
  - column
  - title2
  - index
  - int32
  - include
  - hidden
  - boolean
  - string
  - export
  - boms
  - xml
  - vba
  - vb
  - net
---

# ITableAnnotation.GetColumnTitle2

Gets the title of the specified column.

## Signature

```csharp
System.String GetColumnTitle2( 
   System.Int32
Index
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating the column
- `IncludeHidden` (System.Boolean): True to get the title of the hidden column, false to not

## Return Value

Column title

## Examples

- Export BOMs to XML (VBA) (Export_BOMs_to_XML_Example_VB.htm)
- Export BOMs to XML (VB.NET) (Export_BOMs_to_XML_Example_VBNET.htm)
- Export BOMs to XML (C#) (Export_BOMs_to_XML_Example_CSharp.htm)

## See Also

- `ITableAnnotation.SetColumnTitle2`