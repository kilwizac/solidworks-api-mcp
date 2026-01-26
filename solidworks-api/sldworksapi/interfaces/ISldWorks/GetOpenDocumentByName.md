---
type: method
interface: ISldWorks
member: GetOpenDocumentByName
returns: System.Object
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
  - ISldWorks.GetDocumentCount
  - ISldWorks.GetDocuments
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.IGetDocuments
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
keywords:
  - document
  - open
  - name
  - getopendocumentbyname
  - isldworks
  - sld
  - works
  - string
  - object
  - differences
  - between
  - parts
  - vba
---

# ISldWorks.GetOpenDocumentByName

Gets the open document with the specified name.

## Signature

```csharp
System.Object GetOpenDocumentByName( 
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
provides the file name of the document opened, and you can use that name with this method to get the document's object pointer.

## Examples

- Get Differences Between Parts (VBA) (Get_Differences_Between_Parts_Example_VB.htm)

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetDocumentCount`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.IGetDocuments`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`