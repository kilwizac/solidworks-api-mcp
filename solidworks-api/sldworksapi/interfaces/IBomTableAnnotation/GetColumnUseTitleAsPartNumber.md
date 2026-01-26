---
type: method
interface: IBomTableAnnotation
member: GetColumnUseTitleAsPartNumber
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based number indicating the part-number column
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - parts
related:
  - IBomTableAnnotation.SetColumnUseTitleAsPartNumber
keywords:
  - bill
  - materials
  - part
  - numbers
  - getcolumnusetitleaspartnumber
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

# IBomTableAnnotation.GetColumnUseTitleAsPartNumber

Gets whether the document title is being used for the specified part-number column.

## Signature

```csharp
System.Boolean GetColumnUseTitleAsPartNumber( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based number indicating the part-number column

## Return Value

True if document title is being used for the specified part-number column, false if not

## See Also

- `IBomTableAnnotation.SetColumnUseTitleAsPartNumber`