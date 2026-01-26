---
type: property
interface: IImportIgesData
member: IncludeAllLevels
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportIgesData.ProcessByLevel
  - IImportIgesData.SetLevels
keywords:
  - includealllevels
  - iimportigesdata
  - import
  - iges
  - data
  - include
  - all
  - levels
  - boolean
readonly: true
---

# IImportIgesData.IncludeAllLevels

Gets whether all levels (layers) are imported.

## Signature

```csharp
System.Boolean IncludeAllLevels {get;}
```
## Parameters

None.

## Return Value

True to import all levels, false to not

## Remarks

If this property is false, then you can use
IImportIgesData::IncludeOnlyLevels
to find out which levels will be processed.

## See Also

- `IImportIgesData.ProcessByLevel`
- `IImportIgesData.SetLevels`