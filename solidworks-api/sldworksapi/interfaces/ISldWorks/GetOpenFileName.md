---
type: method
interface: ISldWorks
member: GetOpenFileName
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
    description: Not used
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: DisplayName
    type: System.String
    description: Recommended file name to use
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.EnumDocuments2
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenedFileInfo
  - ISldWorks.IGetOpenDocumentByName2
keywords:
  - getopenfilename
  - isldworks
  - sld
  - works
  - open
  - file
  - name
  - dialog
  - title
  - string
  - initial
  - filter
  - options
  - int32
  - config
  - display
---

# ISldWorks.GetOpenFileName

Obsolete. Superseded by ISldWorks::GetOpenFileName2.

## Signature

```csharp
System.String GetOpenFileName( 
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
)
```
## Parameters

- `DialogTitle` (System.String): Title of the dialog
- `InitialFileName` (System.String): Path and file name of the file to open
- `FileFilter` (System.String): File name extension of the file to open
- `OpenOptions` (System.Int32): Not used
- `ConfigName` (System.String): Name of the configuration
- `DisplayName` (System.String): Recommended file name to use

## Return Value

Path and file name of the file to open

## See Also

- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenedFileInfo`
- `ISldWorks.IGetOpenDocumentByName2`