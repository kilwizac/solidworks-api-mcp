---
type: method
interface: ISldWorks
member: ShowBatchSaveTo3DExperienceDlg
returns: System.Int32
parameters:
  -
    name: FolderPath
    type: System.String
    description: Path of files to save
  -
    name: Options
    type: System.Int32
    description: not used
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
  - showbatchsaveto3dexperiencedlg
  - isldworks
  - sld
  - works
  - show
  - batch
  - save
  - to3
  - experience
  - dlg
  - folder
  - path
  - string
  - options
  - int32
---

# ISldWorks.ShowBatchSaveTo3DExperienceDlg

Opens a dialog to save files in the specified folder to 3DEXPERIENCE.

## Signature

```csharp
System.Int32 ShowBatchSaveTo3DExperienceDlg( 
   System.String
FolderPath
,
   System.Int32
Options
)
```
## Parameters

- `FolderPath` (System.String): Path of files to save
- `Options` (System.Int32): not used

## Return Value

0 if successful, -1 if not

## Remarks

This method is valid only for
SOLIDWORKS Design Augmented
.
Call
ISldWorks::RunBatchSaveProcess
after using this method.