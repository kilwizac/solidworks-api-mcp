---
type: method
interface: ISldWorks
member: ExportToolboxItem
returns: System.Int32
parameters:
  -
    name: StdToExport
    type: System.String
    description: Standard to export (see Remarks )
  -
    name: DestinationFolderPath
    type: System.String
    description: Path where to export the data (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.ImportToolboxItem
keywords:
  - exporttoolboxitem
  - isldworks
  - sld
  - works
  - export
  - toolbox
  - item
  - std
  - string
  - destination
  - folder
  - path
  - int32
---

# ISldWorks.ExportToolboxItem

Exports data for the specified Toolbox standard.

## Signature

```csharp
System.Int32 ExportToolboxItem( 
   System.String
StdToExport
,
   System.String
DestinationFolderPath
)
```
## Parameters

- `StdToExport` (System.String): Standard to export (see Remarks )
- `DestinationFolderPath` (System.String): Path where to export the data (see Remarks )

## Return Value

0 if successful, 1 if errors

## Remarks

Specify StdToImport with the path and file name beneath
C:\SOLIDWORKS Data\browser
, e.g., "
ansi inch\bolts and screws\hex head\heavy hex bolt_ai.sldprt
".
Specify DestinationFolderPath with the path where to export the Excel Workbook (
*.xslx
). The data is exported to a file whose name is formatted as follows:
standard
_
hole class
_
hole type
.xslx

## See Also

- `ISldWorks.ImportToolboxItem`