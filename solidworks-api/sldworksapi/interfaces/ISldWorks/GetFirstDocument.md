---
type: method
interface: ISldWorks
member: GetFirstDocument
returns: System.Object
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
  - ISldWorks.GetDocumentCount
  - ISldWorks.GetDocuments
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetDocuments
  - ISldWorks.IGetFirstDocument2
keywords:
  - document
  - open
  - getfirstdocument
  - isldworks
  - sld
  - works
  - first
  - object
  - determine
  - dirty
  - vba
  - names
  - documents
  - components
  - window
  - handles
  - dibsections
  - vb
  - net
---

# ISldWorks.GetFirstDocument

Gets the document opened first in this SOLIDWORKS Design session.

## Signature

```csharp
System.Object GetFirstDocument()
```
## Parameters

None.

## Return Value

Document first opened

## Remarks

If the document first opened is an assembly, then this method returns the name of the first component document opened in that assembly.

## Examples

- Determine If Document is Dirty (VBA) (Determine_if_Document_is_Dirty_Example_VB.htm)
- Get Names of Open Documents (VBA) (Get_Names_of_Open_Documents_Example_VB.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetDocumentCount`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetDocuments`
- `ISldWorks.IGetFirstDocument2`