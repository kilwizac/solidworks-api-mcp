---
type: method
interface: IModelDoc2
member: SetReadOnlyState
returns: System.Boolean
parameters:
  -
    name: SetReadOnly
    type: System.Boolean
    description: True to set this document to be read-only, false to set this document to read-write
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IsOpenedReadOnly
  - IModelDoc2.IsOpenedViewOnly
keywords:
  - document
  - open
  - setreadonlystate
  - imodeldoc2
  - model
  - doc2
  - read
  - only
  - state
  - boolean
---

# IModelDoc2.SetReadOnlyState

Sets whether this document is read-only or read-write.

## Signature

```csharp
System.Boolean SetReadOnlyState( 
   System.Boolean
SetReadOnly
)
```
## Parameters

- `SetReadOnly` (System.Boolean): True to set this document to be read-only, false to set this document to read-write

## Return Value

True if method executes successfully, false if not

## Remarks

If the file is opened as read-write, specifying read-only should work except if it is a new file that has not yet been saved.
If the file is opened as read-only in SOLIDWORKS, then specifying read-write only changes the internal SOLIDWORKS state (not the access rights on disk) and only succeeds if it would be possible to open this file with write access. If the file is read-only on disk or if another user has it open with write access, then this method does not change the internal state to writeable; the document remains read-only.

## See Also

- `IModelDoc2.IsOpenedReadOnly`
- `IModelDoc2.IsOpenedViewOnly`