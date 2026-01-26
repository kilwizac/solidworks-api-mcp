---
type: method
interface: ISldWorks
member: CloseAndReopen
returns: System.Int32
parameters:
  -
    name: Doc
    type: ModelDoc2
    description: IModelDoc2 ; drawing document to close and reopen
  -
    name: Option
    type: System.Int32
    description: Reopen options as defined in swCloseReopenOption_e
  -
    name: NewDoc
    type: ModelDoc2
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
  - closeandreopen
  - isldworks
  - sld
  - works
  - close
  - reopen
  - doc
  - model
  - doc2
  - option
  - int32
  - new
---

# ISldWorks.CloseAndReopen

Closes and reopens the specified drawing document without unloading its references from memory.

## Signature

```csharp
System.Int32 CloseAndReopen( 
   ModelDoc2
Doc
,
   System.Int32
Option
,
   out ModelDoc2
NewDoc
)
```
## Parameters

- `Doc` (ModelDoc2): IModelDoc2 ; drawing document to close and reopen
- `Option` (System.Int32): Reopen options as defined in swCloseReopenOption_e
- `NewDoc` (ModelDoc2): IModelDoc2 ; reopened drawing document

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