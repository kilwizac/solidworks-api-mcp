---
type: method
interface: IDimPatternFeatureData
member: ImportFromExcel
returns: System.Int32
parameters:
  -
    name: ExcelFile
    type: System.String
    description: Path and Microsoft Excel file name from which to import a table; valid filename extensions are .xls , .xlsx , and .xlsm
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IDimPatternFeatureData.ExportToExcel
keywords:
  - importfromexcel
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - import
  - excel
  - file
  - string
  - int32
---

# IDimPatternFeatureData.ImportFromExcel

Imports a table from the specified Microsoft Excel file for this variable pattern feature.

## Signature

```csharp
System.Int32 ImportFromExcel( 
   System.String
ExcelFile
)
```
## Parameters

- `ExcelFile` (System.String): Path and Microsoft Excel file name from which to import a table; valid filename extensions are .xls , .xlsx , and .xlsm

## Return Value

Status of importing a table from a Microsoft Excel file as defined in swPatternFeatureImportExportError_e

## See Also

- `IDimPatternFeatureData.ExportToExcel`