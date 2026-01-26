---
type: property
interface: IExportPdfData
member: ExportAs3D
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - pdf
  - exportas3d
  - iexportpdfdata
  - export
  - data
  - as3
  - boolean
readonly: null
---

# IExportPdfData.ExportAs3D

Gets or sets whether to export this part or drawing document to 3D PDF.

## Signature

```csharp
System.Boolean ExportAs3D {get; set;}
```
## Parameters

None.

## Return Value

True to export this part or drawing document to 3D PDF, false to not

## Remarks

Call
IModelDocExtension::SaveAs
after setting this property.