---
type: method
interface: IHoleDataTable
member: GetColumnNames
returns: System.Boolean
parameters:
  -
    name: ColumnNames
    type: System.Object
    description: Array of column names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getcolumnnames
  - iholedatatable
  - hole
  - data
  - table
  - column
  - names
  - object
  - boolean
---

# IHoleDataTable.GetColumnNames

Gets the names of all the columns in this Hole Wizard fastener table.

## Signature

```csharp
System.Boolean GetColumnNames( 
   out System.Object
ColumnNames
)
```
## Parameters

- `ColumnNames` (System.Object): Array of column names

## Return Value

True if column names successfully retrieved, false if not

## Examples

- IHoleDataTable (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleDataTable)