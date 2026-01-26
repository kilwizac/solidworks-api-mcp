---
type: method
interface: IExportPdfData
member: GetSheets
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IExportPdfData.GetWhichSheets
  - IExportPdfData.SetSheets
keywords:
  - getsheets
  - iexportpdfdata
  - export
  - pdf
  - data
  - sheets
  - object
---

# IExportPdfData.GetSheets

Gets the drawing sheets to export.

## Signature

```csharp
System.Object GetSheets()
```
## Parameters

None.

## Return Value

Array of the names of the sheets to export

## Remarks

Call
IModelDocExtension::SaveAs
after calling this method.

## See Also

- `IExportPdfData.GetWhichSheets`
- `IExportPdfData.SetSheets`