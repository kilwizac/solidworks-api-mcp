---
type: method
interface: ISldWorks
member: GetOpenFileName2
returns: System.String
parameters:
  -
    name: DialogTitle
    type: System.String
    description: Title of the dialog
  -
    name: InitialFileName
    type: System.String
    description: Path and file name of the file to open
  -
    name: FileFilter
    type: System.String
    description: File name extension of the file to open
  -
    name: OpenOptions
    type: System.Int32
    description: Open options as defined by swGetOpenFileNameOptions_e
  -
    name: ConfigName
    type: System.String
    description: Name of configuration of InitialFileName; comma-separated list of sheet names beginning with active sheet if OpenOptions is swGetOpenFileNameOptions_e.swGetOpenFileNameOptions_SelectedSheets
  -
    name: DisplayName
    type: System.String
    description: Recommended name to use for opened file
  -
    name: DisplayStateName
    type: System.String
    description: Selected display state name
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
  - document
  - open
  - getopenfilename2
  - isldworks
  - sld
  - works
  - file
  - name2
  - dialog
  - title
  - string
  - initial
  - name
  - filter
  - options
  - int32
  - config
  - display
  - state
  - vba
---

# ISldWorks.GetOpenFileName2

Prompts the user for the name of the file to open.

## Signature

```csharp
System.String GetOpenFileName2( 
   System.String
DialogTitle
,
   System.String
InitialFileName
,
   System.String
FileFilter
,
   out System.Int32
OpenOptions
,
   out System.String
ConfigName
,
   out System.String
DisplayName
,
   out System.String
DisplayStateName
)
```
## Parameters

- `DialogTitle` (System.String): Title of the dialog
- `InitialFileName` (System.String): Path and file name of the file to open
- `FileFilter` (System.String): File name extension of the file to open
- `OpenOptions` (System.Int32): Open options as defined by swGetOpenFileNameOptions_e
- `ConfigName` (System.String): Name of configuration of InitialFileName; comma-separated list of sheet names beginning with active sheet if OpenOptions is swGetOpenFileNameOptions_e.swGetOpenFileNameOptions_SelectedSheets
- `DisplayName` (System.String): Recommended name to use for opened file
- `DisplayStateName` (System.String): Selected display state name

## Return Value

Path and file name of the file to open

## Examples

- Open File (VBA) (Open_File_Example_VB.htm)