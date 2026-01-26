---
type: method
interface: ISldWorks
member: EnumDocuments2
returns: EnumDocuments2
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
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetFirstDocument2
keywords:
  - document
  - open
  - enumdocuments2
  - isldworks
  - sld
  - works
  - documents2
  - list
  - documents
---

# ISldWorks.EnumDocuments2

Gets a list of documents currently open in the application.

## Signature

```csharp
EnumDocuments2 EnumDocuments2()
```
## Parameters

None.

## Return Value

Documents enumeration

## Remarks

The list of
IModelDoc2
objects contained in the
IEnumDocuments2
object contain any open IModelDoc2 pointer. This includes IModelDoc2 objects that may have been opened as file references, for example, from an assembly or drawing.
You might want to use the
IModelDoc::Visible
property to determine if a particular document has its own window and is visible to the user.

## Examples

- Get List of Open Documents (C++) (Get_List_of_Open_Documents_Example_CPlusPlus_COM.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetFirstDocument2`