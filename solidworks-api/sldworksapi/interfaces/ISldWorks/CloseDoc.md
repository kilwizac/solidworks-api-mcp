---
type: method
interface: ISldWorks
member: CloseDoc
returns: void
parameters:
  -
    name: Name
    type: System.String
    description: Name of document (see Remarks )
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
  - ISldWorks.CloseAndReopen
  - ISldWorks.GetDocumentCount
  - ISldWorks.GetDocuments
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetDocuments
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.OpenDoc6
keywords:
  - document
  - close
  - closedoc
  - isldworks
  - sld
  - works
  - doc
  - name
  - string
  - void
  - vba
  - excel
  - design
  - table
  - worksheet
  - run
  - attach
  - solidworks
  - session
  - names
  - creators
  - features
  - vb
  - net
---

# ISldWorks.CloseDoc

Closes the specified document.

## Signature

```csharp
void CloseDoc( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of document (see Remarks )

## Return Value

Unknown.

## Remarks

If Name is specified with:
the name of a document that is not open, then this method does nothing.
an empty string  (""), then the active document is closed without saving.
the name of a document in the dirty state (modified, but not saved), then this method closes the document without saving it.
This method also closes any non-active hidden documents.
For documents referenced by other documents loaded in memory, call this method to release user-interface resources while keeping the model data loaded.
If you are closing the only document open in the SOLIDWORKS Design session and this SOLIDWORKS Design session is a background session, then calling this method, or calling
ISldWorks::QuitDoc
, results in the SOLIDWORKS Design session being closed.
A background SOLIDWORKS Design session can be created when the SOLIDWORKS Design session is started by your application and the session is not controlled by the user; i.e.,
ISldWorks::UserControl
set to false.
To keep the SOLIDWORKS Design session open, set ISldWorks::UserControl to True, which makes the session visible, or you can close your documents at the end of your program execution.

## Examples

- Close Document (VBA) (Close_Document_Example_VB.htm)
- Get Excel Design Table Worksheet (VBA) (Get_Excel_Design_Table_Worksheet_Example_VB.htm)
- Run or Attach to a SOLIDWORKS Session (VBA) (SOLIDWORKS_Visible_or_BackGround_Example_VB.htm)
- Get Names of Creators of Features (C++) (Get_Names_of_Creators_of_Features_Examples_CPlusCPlus_COM.htm)
- Get Names of Creators of Features (VBA) (Get_Names_of_Creators_of_Features_Example_VB.htm)
- Get Names of Creators of Features (VB.NET) (Get_Names_of_Creators_of_Features_Example_VBNET.htm)
- Get Names of Creators of Features (C#) (Get_Names_of_Creators_of_Features_Example_CSharp.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseAndReopen`
- `ISldWorks.GetDocumentCount`
- `ISldWorks.GetDocuments`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetDocuments`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.OpenDoc6`