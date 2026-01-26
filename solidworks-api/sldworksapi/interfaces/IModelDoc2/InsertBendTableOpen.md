---
type: method
interface: IModelDoc2
member: InsertBendTableOpen
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: File name of the bend table to insert into this model document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.DeleteBendTable
  - IModelDoc2.InsertBendTableEdit
  - IModelDoc2.InsertBendTableNew
keywords:
  - bend
  - table
  - bends
  - text
  - file
  - insertbendtableopen
  - imodeldoc2
  - model
  - doc2
  - insert
  - open
  - name
  - string
  - boolean
---

# IModelDoc2.InsertBendTableOpen

Inserts an existing bend table from a file into this model document.

## Signature

```csharp
System.Boolean InsertBendTableOpen( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): File name of the bend table to insert into this model document

## Return Value

True if the table is successfully inserted, false if not

## See Also

- `IModelDoc2.DeleteBendTable`
- `IModelDoc2.InsertBendTableEdit`
- `IModelDoc2.InsertBendTableNew`