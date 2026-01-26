---
type: method
interface: IPartDoc
member: InsertBendTable
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X-coordinate for placement of the bend table
  -
    name: Y
    type: System.Double
    description: Y-coordinate for placement of the bend table
  -
    name: StartValue
    type: System.String
    description: Starting datum tag; a value from A to Z for letter tags; a positive integer for number tags
  -
    name: TableTemplate
    type: System.String
    description: Full pathname of the template (e.g., install_dir \ lang\ language \ bendtable-standard.sldbndtbt )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IBendTable
  - IView.InsertBendTable
keywords:
  - insertbendtable
  - ipartdoc
  - part
  - doc
  - insert
  - bend
  - table
  - double
  - start
  - value
  - string
  - template
  - object
---

# IPartDoc.InsertBendTable

Creates a bend table annotation for the flat pattern of this sheet metal part.

## Signature

```csharp
System.Object InsertBendTable( 
   System.Double
X
,
   System.Double
Y
,
   System.String
StartValue
,
   System.String
TableTemplate
)
```
## Parameters

- `X` (System.Double): X-coordinate for placement of the bend table
- `Y` (System.Double): Y-coordinate for placement of the bend table
- `StartValue` (System.String): Starting datum tag; a value from A to Z for letter tags; a positive integer for number tags
- `TableTemplate` (System.String): Full pathname of the template (e.g., install_dir \ lang\ language \ bendtable-standard.sldbndtbt )

## Return Value

IBendTableAnnotation

## See Also

- `IBendTable`
- `IView.InsertBendTable`