---
type: method
interface: ISldWorks
member: GetOpenDocument
returns: ModelDoc2
parameters:
  -
    name: DocName
    type: System.String
    description: Name of the document (see Remarks )
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
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IGetDocuments
  - ISldWorks.IGetFirstDocument2
keywords:
  - document
  - open
  - getopendocument
  - isldworks
  - sld
  - works
  - doc
  - name
  - string
  - model
  - doc2
  - names
  - documents
  - vba
---

# ISldWorks.GetOpenDocument

Gets the open document with the specified name.

## Signature

```csharp
ModelDoc2 GetOpenDocument( 
   System.String
DocName
)
```
## Parameters

- `DocName` (System.String): Name of the document (see Remarks )

## Return Value

Model document

## Remarks

Only call this method for a document that has already been opened in its own window. If you call this method for a document that has not been opened in its own window, then methods on the returned object may not work as expected.
If you do not specify a file extension in the DocName argument, then the file extension of the document is ignored. This can cause problems if you have two different document types with the same name opened; for example,
12345.sldprt
and
12345.
sldasm.
If you do not specify the file extension in your call to this method, then you cannot be sure which document is retrieved. To avoid this problem, you can specify the filename extension in the DocName parameter or you can check the document type after it is activated using
IModelDoc2::GetType
.
If DocName is an empty string, and...
Then this method returns...
An assembly is opened
The first part of the assembly
Multiple assemblies are opened
The first part of the first assembly
Multile parts are opened
The first part

## Examples

- Get Names of Open Documents (VBA) (Get_Names_of_Open_Documents_Example_VB.htm)

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetDocumentCount`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IGetDocuments`
- `ISldWorks.IGetFirstDocument2`