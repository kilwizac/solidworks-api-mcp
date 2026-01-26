---
type: method
interface: ISldWorks
member: ExportHoleWizardItem
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
  - ISldWorks.ImportHoleWizardItem
keywords:
  - exportholewizarditem
  - isldworks
  - sld
  - works
  - export
  - hole
  - wizard
  - item
  - std
  - string
  - destination
  - folder
  - path
  - int32
---

# ISldWorks.ExportHoleWizardItem

Exports data for the specified Hole Wizard standard.

## Signature

```csharp
System.Int32 ExportHoleWizardItem( 
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

Specify StdToImport with the path and file name as shown on the Hole Wizard tab of the Toolbox, e.g., "
ansi inch\Counterbore Holes\Hex Bolt
".
Specify DestinationFolderPath with the path where to create the Excel Workbook (
*.xslx
). The data is exported to a file whose name is formatted as follows:
standard
_
hole class
_
hole type
.xslx

## See Also

- `ISldWorks.ImportHoleWizardItem`