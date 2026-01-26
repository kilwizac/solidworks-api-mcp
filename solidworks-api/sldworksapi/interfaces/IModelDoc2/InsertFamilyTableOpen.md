---
type: method
interface: IModelDoc2
member: InsertFamilyTableOpen
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of the Microsoft Excel design table
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IDesignTable
  - IModelDoc2.CloseFamilyTable
  - IModelDoc2.DeleteDesignTable
  - IModelDoc2.GetDesignTable
  - IModelDoc2.IGetDesignTable
  - IModelDoc2.InsertFamilyTableEdit
  - IModelDoc2.InsertFamilyTableNew
  - IModelDocExtension.HasDesignTable
keywords:
  - design
  - tables
  - see
  - also
  - idesigntable
  - excel
  - table
  - insert
  - insertfamilytableopen
  - imodeldoc2
  - model
  - doc2
  - family
  - open
  - file
  - name
  - string
  - boolean
---

# IModelDoc2.InsertFamilyTableOpen

Inserts the specified Microsoft Excel design table.

## Signature

```csharp
System.Boolean InsertFamilyTableOpen( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Full path and filename of the Microsoft Excel design table

## Return Value

True if the design table is inserted, false if not

## See Also

- `IDesignTable`
- `IModelDoc2.CloseFamilyTable`
- `IModelDoc2.DeleteDesignTable`
- `IModelDoc2.GetDesignTable`
- `IModelDoc2.IGetDesignTable`
- `IModelDoc2.InsertFamilyTableEdit`
- `IModelDoc2.InsertFamilyTableNew`
- `IModelDocExtension.HasDesignTable`