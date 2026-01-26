---
type: method
interface: IModelDoc2
member: ForceReleaseLocks
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - files
  - read
  - only
  - forcereleaselocks
  - imodeldoc2
  - model
  - doc2
  - force
  - release
  - locks
  - int32
---

# IModelDoc2.ForceReleaseLocks

Releases the locks that a file system places on a file when it is opened and detaches that file from the file system.

## Signature

```csharp
System.Int32 ForceReleaseLocks()
```
## Parameters

None.

## Return Value

1 if locks are released, 0 if not

## Remarks

This method only supports part and assembly documents; it does not support drawing documents. See
ISldWorks::CloseAndReopen
for details about closing and reopening a drawing document without unloading its references from memory.
You must call
IModelDoc2::ReloadOrReplace
after calling IModelDoc2::ForceReleaseLocks to re-attach the detached file to the file system. If you do not call IModelDoc2::ReloadOrReplace after calling IModelDoc2::ForceReleaseLocks, then you will experience problems with OLE objects (e.g., design tables).
IModelDoc2::ReloadOrReplace re-attaches the detached file to the file system; however, any changes made to the detached file are not preserved unless you save the file to disk before calling IModelDoc2::ReloadOrReplace.
CAUTION:
This method is intended to be used by PDM systems. Using this method incorrectly could corrupt your data.