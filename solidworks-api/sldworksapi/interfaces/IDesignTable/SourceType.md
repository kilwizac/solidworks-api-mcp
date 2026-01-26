---
type: property
interface: IDesignTable
member: SourceType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.FileName
  - IDesignTable.LinkToFile
  - IDesignTable.SaveAsExcelFile
keywords:
  - sourcetype
  - idesigntable
  - design
  - table
  - source
  - type
  - int32
readonly: null
---

# IDesignTable.SourceType

Gets or sets the type of source file for this design table.

## Signature

```csharp
System.Int32 SourceType {get; set;}
```
## Parameters

None.

## Return Value

Type of source file as defined in swDesignTableSourceTypes_e EndOLEPropertyRow

## Remarks

You must call:
IDesignTable::EditFeature
before setting this property.
IDesignTable::UpdateFeature
after setting this property.

## See Also

- `IDesignTable.FileName`
- `IDesignTable.LinkToFile`
- `IDesignTable.SaveAsExcelFile`