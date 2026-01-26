---
type: method
interface: ISldWorks
member: QuitDoc
returns: void
parameters:
  -
    name: Name
    type: System.String
    description: Name of document to close
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
  - ISldWorks.EnumDocuments2
  - ISldWorks.ExitApp
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenFileName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
  - ISldWorks.LoadFile4
  - ISldWorks.OpenDoc6
keywords:
  - document
  - quit
  - quitdoc
  - isldworks
  - sld
  - works
  - doc
  - name
  - string
  - void
  - save
  - rolledbacked
  - part
  - parasolid
  - file
  - vba
  - add
  - delete
  - appearances
  - specific
  - display
  - states
  - vb
  - net
---

# ISldWorks.QuitDoc

Closes the specified document without saving changes.

## Signature

```csharp
void QuitDoc( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of document to close

## Return Value

Unknown.

## Remarks

If you are closing the only document in the SOLIDWORKS Design session and the SOLIDWORKS Design session is a background session, then calling
ISldWorks::CloseDoc
or this method results in the SOLIDWORKS Design session closing.
You can create a background SOLIDWORKS Design session when the starting a SOLIDWORKS Design session in your application and the session is controlled by the user (
ISldWorks::UserControl
set to false). To keep the SOLIDWORKS Design session open, set ISldWorks::UserControl to true, which makes the session visible, or you can close your documents at the end of your application's execution.

## Examples

- Save Rolledbacked Part as Parasolid File (VBA) (Save_Roll_Backed_Part_as_Parasolid_File_Example_VB.htm)
- Add and Delete Appearances from Specific Display States (C#) (Add_and_Delete_Materials_from_Specific_Display_States_Example_CSharp.htm)
- Add and Delete Appearances from Specific Display States (VB.NET) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VBNET.htm)
- Add and Delete Appearances from Specific Display States (VBA) (Add_and_Delete_Materials_from_Specific_Display_States_Example_VB.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.ExitApp`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`
- `ISldWorks.LoadFile4`
- `ISldWorks.OpenDoc6`