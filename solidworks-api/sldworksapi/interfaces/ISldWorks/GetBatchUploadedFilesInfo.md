---
type: method
interface: ISldWorks
member: GetBatchUploadedFilesInfo
returns: System.Boolean
parameters:
  -
    name: ProcessedFileNames
    type: System.Object
    description: Array of processed file names
  -
    name: NonProcessedFileNames
    type: System.Object
    description: Array of unprocessed file names
  -
    name: FailedFileNames
    type: System.Object
    description: Array of file names that failed to upload
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
  - 3dexperience
  - getbatchuploadedfilesinfo
  - isldworks
  - sld
  - works
  - batch
  - uploaded
  - files
  - info
  - processed
  - file
  - names
  - object
  - non
  - failed
  - boolean
---

# ISldWorks.GetBatchUploadedFilesInfo

Gets the files uploaded to 3DEXPERIENCE during a batch process.

## Signature

```csharp
System.Boolean GetBatchUploadedFilesInfo( 
   out System.Object
ProcessedFileNames
,
   out System.Object
NonProcessedFileNames
,
   out System.Object
FailedFileNames
)
```
## Parameters

- `ProcessedFileNames` (System.Object): Array of processed file names
- `NonProcessedFileNames` (System.Object): Array of unprocessed file names
- `FailedFileNames` (System.Object): Array of file names that failed to upload

## Return Value

True if retrieval successful, false if not

## Remarks

This method is valid only for
SOLIDWORKS Design Augmented
.
Before using this method, call
ISldWorks::RunBatchSaveProcess
.