---
type: method
interface: IBomTableAnnotation
member: SetColumnUseTitleAsPartNumber
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index indicating the part-number column
  -
    name: UseTitle
    type: System.Boolean
    description: True to use the document title for the specified part-number column, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - parts
related:
  - IBomTableAnnotation.GetColumnCustomProperty
keywords:
  - bill
  - materials
  - part
  - numbers
  - setcolumnusetitleaspartnumber
  - ibomtableannotation
  - bom
  - table
  - annotation
  - column
  - use
  - title
  - number
  - index
  - int32
  - boolean
---

# IBomTableAnnotation.SetColumnUseTitleAsPartNumber

Sets whether to use the document title for the specified part-number column.

## Signature

```csharp
System.Boolean SetColumnUseTitleAsPartNumber( 
   System.Int32
Index
,
   System.Boolean
UseTitle
)
```
## Parameters

- `Index` (System.Int32): 0-based index indicating the part-number column
- `UseTitle` (System.Boolean): True to use the document title for the specified part-number column, false to not

## Return Value

True to use the document title for the specified part-number column, false if you specify an invalid column number or the specified column is not the part-number column

## See Also

- `IBomTableAnnotation.GetColumnCustomProperty`