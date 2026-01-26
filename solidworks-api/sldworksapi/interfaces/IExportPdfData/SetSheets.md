---
type: method
interface: IExportPdfData
member: SetSheets
returns: System.Boolean
parameters:
  -
    name: Which
    type: System.Int32
    description: Drawing sheets to export to PDF as defined in swExportDataSheetsToExport_e
  -
    name: Sheets
    type: System.Object
    description: Array of the names of the drawing sheets to export
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IExportPdfData.GetSheets
  - IExportPdfData.GetWhichSheets
keywords:
  - setsheets
  - iexportpdfdata
  - export
  - pdf
  - data
  - sheets
  - which
  - int32
  - object
  - boolean
  - save
  - file
  - vba
  - vb
  - net
---

# IExportPdfData.SetSheets

Sets the drawing sheets to export.

## Signature

```csharp
System.Boolean SetSheets( 
   System.Int32
Which
,
   System.Object
Sheets
)
```
## Parameters

- `Which` (System.Int32): Drawing sheets to export to PDF as defined in swExportDataSheetsToExport_e
- `Sheets` (System.Object): Array of the names of the drawing sheets to export

## Return Value

True if the drawings sheets are set to export to PDF, false if not

## Examples

- Save File as PDF (VBA) (Save_File_as_PDF_Example_VB.htm)
- Save File as PDF (C#) (Save_File_as_PDF_Example_CSharp.htm)
- Save File as PDF (VB.NET) (Save_File_as_PDF_Example_VBNET.htm)

## See Also

- `IExportPdfData.GetSheets`
- `IExportPdfData.GetWhichSheets`