---
type: property
interface: IDesignTable
member: LinkToFile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IDesignTable.FileName
  - IDesignTable.SourceType
  - IDesignTable.UpdateModel
keywords:
  - linktofile
  - idesigntable
  - design
  - table
  - link
  - file
  - boolean
readonly: null
---

# IDesignTable.LinkToFile

Gets or sets whether to link the design table to the model.

## Signature

```csharp
System.Boolean LinkToFile {get; set;}
```
## Parameters

None.

## Return Value

True to link the design table to the model, false to not

## Remarks

When a design table is linked to the model, any changes you make to the design table outside of the SOLIDWORKS Design software are reflected in the design table within the SOLIDWORKS Design model, and vice versa.

## See Also

- `IDesignTable.FileName`
- `IDesignTable.SourceType`
- `IDesignTable.UpdateModel`