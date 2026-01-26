---
type: method
interface: ISldWorks
member: CloseAllDocuments
returns: System.Boolean
parameters:
  -
    name: IncludeUnsaved
    type: System.Boolean
    description: True = Close all documents, including dirty documents False = Close all documents, excluding dirty documents
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActiveDoc
  - ISldWorks.CloseAndReopen
  - ISldWorks.CloseDoc
  - ISldWorks.GetDocumentCount
  - ISldWorks.GetDocuments
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetDocuments
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.OpenDoc6
  - ISldWorks.QuitDoc
keywords:
  - document
  - close
  - all
  - closealldocuments
  - isldworks
  - sld
  - works
  - documents
  - include
  - unsaved
  - boolean
  - vba
  - keep
  - solidworks
  - invisible
  - while
  - activating
  - vb
  - net
  - switch
---

# ISldWorks.CloseAllDocuments

Closes all open documents in the SOLIDWORKS Design session.

## Signature

```csharp
System.Boolean CloseAllDocuments( 
   System.Boolean
IncludeUnsaved
)
```
## Parameters

- `IncludeUnsaved` (System.Boolean): True = Close all documents, including dirty documents False = Close all documents, excluding dirty documents

## Return Value

True if method executes successfully, false if not

## Examples

- Close All Documents (VBA) (Close_all_Documents_Example_VB.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (C#) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_CSharp.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VB.NET) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VBNET.htm)
- Keep SOLIDWORKS Invisible While Activating Documents (VBA) (Keep_SOLIDWORKS_Invisible_While_Activating_Documents_Example_VB.htm)
- Switch Documents (C#) (Switch_Documents_Example_CSharp.htm)
- Switch Documents (VB.NET) (Switch_Documents_Example_VBNET.htm)
- Switch Documents (VBA) (Switch_Documents_Example_VB.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAndReopen`
- `ISldWorks.CloseDoc`
- `ISldWorks.GetDocumentCount`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetDocuments`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.OpenDoc6`
- `ISldWorks.QuitDoc`