---
type: method
interface: ISldWorks
member: IGetDocuments
returns: ModelDoc2
parameters:
  -
    name: NumDocuments
    type: System.Int32
    description: Number of open documents
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
  - ISldWorks.GetDocuments
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
keywords:
  - open
  - document
  - igetdocuments
  - isldworks
  - sld
  - works
  - documents
  - num
  - int32
  - model
  - doc2
---

# ISldWorks.IGetDocuments

Gets the open documents is this SOLIDWORKS Design session.

## Signature

```csharp
ModelDoc2 IGetDocuments( 
   System.Int32
NumDocuments
)
```
## Parameters

- `NumDocuments` (System.Int32): Number of open documents

## Return Value

in-process, unmanaged C++: Pointer ot an array of open documents in this SOLIDWORKS Design session VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISldWorks::GetDocumentCount
to get NumDocuments.

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`