---
type: method
interface: ISldWorks
member: GetOpenedFileInfo
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of the last model successfully opened by SOLIDWORKS
  -
    name: Options
    type: System.Int32
    description: Options in effect when FileName opened as defined in swOpenDocOptions_e
docset: sldworksapi
deprecated: false
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
  - ISldWorks.GetOpenFileName
  - ISldWorks.IGetOpenDocumentByName2
keywords:
  - document
  - open
  - getopenedfileinfo
  - isldworks
  - sld
  - works
  - opened
  - file
  - info
  - name
  - string
  - options
  - int32
  - void
---

# ISldWorks.GetOpenedFileInfo

Gets the name of the last model successfully opened by SOLIDWORKS and the options that were in effect when it opened.

## Signature

```csharp
void GetOpenedFileInfo( 
   out System.String
FileName
,
   out System.Int32
Options
)
```
## Parameters

- `FileName` (System.String): Full path and filename of the last model successfully opened by SOLIDWORKS
- `Options` (System.Int32): Options in effect when FileName opened as defined in swOpenDocOptions_e

## Return Value

Unknown.

## Remarks

This method considers only models opened through the SOLIDWORKS Design user interface. This method does not consider models successfully opened through the API, unless the API opens an assembly. In that case, each assembly component is opened by SOLIDWORKS, and this method determines which of those assembly's components was successfully opened last.

## See Also

- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.IGetOpenDocumentByName2`