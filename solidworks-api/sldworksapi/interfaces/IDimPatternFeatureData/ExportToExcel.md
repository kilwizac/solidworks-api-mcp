---
type: method
interface: IDimPatternFeatureData
member: ExportToExcel
returns: System.Int32
parameters:
  -
    name: ExcelFile
    type: System.String
    description: Path and Microsoft Excel file name to which to export the pattern table; valid filename extensions are .xls , .xlsx , and .xlsm
  -
    name: Overwrite
    type: System.Boolean
    description: True to overwrite a file in the specified path with the same file name, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IDimPatternFeatureData.ImportFromExcel
keywords:
  - exporttoexcel
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - export
  - excel
  - file
  - string
  - overwrite
  - boolean
  - int32
  - insert
  - variable
  - vb
  - net
  - vba
---

# IDimPatternFeatureData.ExportToExcel

Exports the pattern table to the specified Microsoft Excel file for this variable pattern feature.

## Signature

```csharp
System.Int32 ExportToExcel( 
   System.String
ExcelFile
,
   System.Boolean
Overwrite
)
```
## Parameters

- `ExcelFile` (System.String): Path and Microsoft Excel file name to which to export the pattern table; valid filename extensions are .xls , .xlsx , and .xlsm
- `Overwrite` (System.Boolean): True to overwrite a file in the specified path with the same file name, false to not

## Return Value

Status of exporting the pattern table to a Microsoft Excel file as defined in swPatternFeatureImportExportError_e

## Examples

- Insert Variable Pattern Feature (C#) (Insert_Advanced_Variable_Pattern_Feature_Example_CSharp.htm)
- Insert Variable Pattern Feature (VB.NET) (Insert_Advanced_Variable_Pattern_Feature_Example_VBNET.htm)
- Insert Variable Pattern Feature (VBA) (Insert_Advanced_Variable_Pattern_Feature_Example_VB.htm)

## See Also

- `IDimPatternFeatureData.ImportFromExcel`