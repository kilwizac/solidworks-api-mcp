---
type: property
interface: IImportIgesData
member: IncludeOnlyLevels
returns: System.Object
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
  - includeonlylevels
  - iimportigesdata
  - import
  - iges
  - data
  - include
  - only
  - levels
  - object
readonly: true
---

# IImportIgesData.IncludeOnlyLevels

Gets the levels (layers) to import.

## Signature

```csharp
System.Object IncludeOnlyLevels {get;}
```
## Parameters

None.

## Return Value

Array of longs or integers (see Long vs. Integer ) indicating the levels to import

## Remarks

IImportIgesData::IncludeAllLevels
must be false to use this property.

## See Also

- `IImportIgesData.ProcessByLevel`
- `IImportIgesData.SetLevels`