---
type: method
interface: ISldWorks
member: ImportHoleWizardItem
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
  -
    name: ReplaceData
    type: System.Boolean
    description: True to replace data, false to not
  -
    name: ErrorFile
    type: System.Boolean
    description: True to create an error file, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.ExportHoleWizardItem
keywords:
  - importholewizarditem
  - isldworks
  - sld
  - works
  - import
  - hole
  - wizard
  - item
  - std
  - string
  - destination
  - file
  - path
  - replace
  - data
  - boolean
  - error
  - int32
---

# ISldWorks.ImportHoleWizardItem

Imports data for the specified Hole Wizard standard.

## Signature

```csharp
System.Int32 ImportHoleWizardItem( 
   System.String
StdToImport
,
   System.String
DestinationFilePath
,
   System.Boolean
ReplaceData
,
   System.Boolean
ErrorFile
)
```
## Parameters

- `StdToImport` (System.String): Standard to import (see Remarks )
- `DestinationFilePath` (System.String): Path and name of file to import (see Remarks )
- `ReplaceData` (System.Boolean): True to replace data, false to not
- `ErrorFile` (System.Boolean): True to create an error file, false to not

## Return Value

0 if the Hole Wizard standard imported successfully, 1 if not

## Remarks

Specify StdToImport with the path and file name as shown on the Hole Wizard tab of the Toolbox, e.g., "
ansi inch\Counterbore Holes\Hex Bolt
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

- `ISldWorks.ExportHoleWizardItem`