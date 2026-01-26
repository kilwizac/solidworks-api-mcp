---
type: method
interface: ISldWorks
member: GetExportFileData
returns: System.Object
parameters:
  -
    name: FileType
    type: System.Int32
    description: File type as defined in swExportDataFileType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - export
  - pdf
  - sheet
  - see
  - also
  - isheet
  - getexportfiledata
  - isldworks
  - sld
  - works
  - file
  - data
  - type
  - int32
  - object
  - save
  - vba
  - vb
  - net
---

# ISldWorks.GetExportFileData

Gets the data interface for the specified file type to which to export one or more drawing sheets.

## Signature

```csharp
System.Object GetExportFileData( 
   System.Int32
FileType
)
```
## Parameters

- `FileType` (System.Int32): File type as defined in swExportDataFileType_e

## Return Value

Data interface for the specified file type to which to export one or more drawing sheets

## Examples

- Save File As PDF (VBA) (Save_File_as_PDF_Example_VB.htm)
- Save File as PDF (C#) (Save_File_as_PDF_Example_CSharp.htm)
- Save File as PDF (VB.NET) (Save_File_as_PDF_Example_VBNET.htm)