---
type: method
interface: IModelDoc2
member: Lock
returns: void
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
  - lock
  - solidworks
  - imodeldoc2
  - model
  - doc2
  - void
---

# IModelDoc2.Lock

Blocks the modifying commands in the user interface, effectively locking the application.

## Signature

```csharp
void Lock()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method also changes the status bar to display
Processing
. Use this method with
IModelDoc2::UnLock
.