---
type: method
interface: ISldWorks
member: CloseAndReopen2
returns: System.Int32
parameters:
  -
    name: Doc
    type: System.Object
    description: IModelDoc2 ; drawing document to close and reopen
  -
    name: Option
    type: System.Int32
    description: Reopen options as defined in swCloseReopenOption_e
  -
    name: NewDoc
    type: System.Object
    description: IModelDoc2 ; reopened drawing document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.QuitDoc
keywords:
  - document
  - close
  - reopen
  - closeandreopen2
  - isldworks
  - sld
  - works
  - reopen2
  - doc
  - object
  - option
  - int32
  - new
---

# ISldWorks.CloseAndReopen2

Closes and reopens the specified drawing document without unloading its references from memory.

## Signature

```csharp
System.Int32 CloseAndReopen2( 
   System.Object
Doc
,
   System.Int32
Option
,
   out System.Object
NewDoc
)
```
## Parameters

- `Doc` (System.Object): IModelDoc2 ; drawing document to close and reopen
- `Option` (System.Int32): Reopen options as defined in swCloseReopenOption_e
- `NewDoc` (System.Object): IModelDoc2 ; reopened drawing document

## Return Value

Error code as defined in swCloseReopenError_e

## Remarks

Before a third-party application can process a drawing document that is open in SOLIDWORKS, it must close the document. Usually when a drawing document is closed, its references are unloaded from memory, and reopening the drawing document takes a lot of time. This method closes a drawing document, keeps its references in memory, and quickly reopens it.
After the drawing document is closed and before it is reopened, SOLIDWORKS fires a
FileCloseNotify
event with reason
swFileCloseNotifyReason_e.swFileCloseNotifyReason_CloseForReload
. In the handler of this event, a third-party application can call
ISldWorks::SetPromptFileName2
to open a different file, or it can process the specified document before it is reopened in SOLIDWORKS.
See
IModelDoc2::ReloadOrReplace
to perform a similar function with part and assembly documents.

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.QuitDoc`