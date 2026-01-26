---
type: method
interface: ISldWorks
member: ImportToolboxItem
returns: System.Int32
parameters:
  -
    name: StdToImport
    type: System.String
    description: Standard to import (see Remarks )
  -
    name: DestinationFilePath
    type: System.String
    description: Path and name of file to import (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.ExportToolboxItem
keywords:
  - importtoolboxitem
  - isldworks
  - sld
  - works
  - import
  - toolbox
  - item
  - std
  - string
  - destination
  - file
  - path
  - int32
---

# ISldWorks.ImportToolboxItem

Imports data for the specified Toolbox standard.

## Signature

```csharp
System.Int32 ImportToolboxItem( 
   System.String
StdToImport
,
   System.String
DestinationFilePath
)
```
## Parameters

- `StdToImport` (System.String): Standard to import (see Remarks )
- `DestinationFilePath` (System.String): Path and name of file to import (see Remarks )

## Return Value

0 if the Toolbox standard imported successfully, 1 if not

## Remarks

Specify StdToImport with the path and file name beneath
C:\SOLIDWORKS Data\browser
, e.g., "
ansi inch\bolts and screws\hex head\heavy hex bolt_ai.sldprt
".
Specify DestinationFilePath with the path and file name of the Excel Workbook (
*.xslx
) you want to import. The Excel file name is formatted as follows:
standard
_
hole class
_
hole type
.xslx

## See Also

- `ISldWorks.ExportToolboxItem`