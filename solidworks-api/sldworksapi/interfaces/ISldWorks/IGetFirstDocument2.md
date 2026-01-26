---
type: method
interface: ISldWorks
member: IGetFirstDocument2
returns: ModelDoc2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActiveDoc
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.EnumDocuments2
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IActiveDoc2
keywords:
  - document
  - open
  - igetfirstdocument2
  - isldworks
  - sld
  - works
  - first
  - document2
  - model
  - doc2
---

# ISldWorks.IGetFirstDocument2

Gets the document opened first in this SOLIDWORKS Design session.

## Signature

```csharp
ModelDoc2 IGetFirstDocument2()
```
## Parameters

None.

## Return Value

Document first opened

## Remarks

If the document first opened is an assembly, then this method returns the name of the first component document opened in that assembly.

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IActiveDoc2`