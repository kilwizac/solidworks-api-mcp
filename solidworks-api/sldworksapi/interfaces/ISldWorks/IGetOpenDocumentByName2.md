---
type: method
interface: ISldWorks
member: IGetOpenDocumentByName2
returns: ModelDoc2
parameters:
  -
    name: DocumentName
    type: System.String
    description: Fully qualified name of the open document (path, filename, and file extension)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.EnumDocuments2
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IGetFirstDocument2
keywords:
  - document
  - open
  - name
  - igetopendocumentbyname2
  - isldworks
  - sld
  - works
  - name2
  - string
  - model
  - doc2
---

# ISldWorks.IGetOpenDocumentByName2

Gets the open document with the specified name.

## Signature

```csharp
ModelDoc2 IGetOpenDocumentByName2( 
   System.String
DocumentName
)
```
## Parameters

- `DocumentName` (System.String): Fully qualified name of the open document (path, filename, and file extension)

## Return Value

Open model document or NULL if the operation fails

## Remarks

Only call this method for a document that has already been opened in its own window. If you call this method for a document that has not been opened in its own window, then methods on the returned object may not work as expected.
This method is useful for getting a SOLIDWORKS document object when you only have the document name. For example, SOLIDWORKS event
FileOpenNotify2
provides the filename of the document opened, and you can use that name with this method to get the document's object pointer.

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IGetFirstDocument2`