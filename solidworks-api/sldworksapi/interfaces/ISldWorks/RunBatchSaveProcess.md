---
type: method
interface: ISldWorks
member: RunBatchSaveProcess
returns: System.Boolean
parameters: []
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
  - runbatchsaveprocess
  - isldworks
  - sld
  - works
  - run
  - batch
  - save
  - process
  - boolean
---

# ISldWorks.RunBatchSaveProcess

Batch saves files to 3DEXPERIENCE.

## Signature

```csharp
System.Boolean RunBatchSaveProcess()
```
## Parameters

None.

## Return Value

True if batch save successful, false if not

## Remarks

This method is valid only for
SOLIDWORKS Design Augmented
.
Call this method:
after loading the files to save using
ISldWorks::ShowBatchSaveTo3DExperienceDlg
.
before calling
ISldWorks::GetBatchUploadedFilesInfo
.