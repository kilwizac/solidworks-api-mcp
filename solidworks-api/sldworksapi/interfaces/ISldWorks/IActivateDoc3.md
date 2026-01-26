---
type: method
interface: ISldWorks
member: IActivateDoc3
returns: ModelDoc2
parameters:
  -
    name: Name
    type: System.String
    description: Name of document to activate
  -
    name: Silent
    type: System.Boolean
    description: True if dialogs and warning messages should be avoided; false if dialogs and warning messages should be displayed to the end-user
  -
    name: Errors
    type: System.Int32
    description: Status of the document activate operation as defined in swActivateDocError_e ; if no errors or warnings are encountered, this value is set to 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActivateDoc2
  - ISldWorks.ActiveDoc
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenFileName
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
keywords:
  - document
  - activate
  - iactivatedoc3
  - isldworks
  - sld
  - works
  - doc3
  - name
  - string
  - silent
  - boolean
  - errors
  - int32
  - model
  - doc2
  - access
  - assembly
  - add
  - component
  - mate
---

# ISldWorks.IActivateDoc3

Activates a document that has already been loaded. This file becomes the active document, and this method returns a pointer to that document object.

## Signature

```csharp
ModelDoc2 IActivateDoc3( 
   System.String
Name
,
   System.Boolean
Silent
,
   out System.Int32
Errors
)
```
## Parameters

- `Name` (System.String): Name of document to activate
- `Silent` (System.Boolean): True if dialogs and warning messages should be avoided; false if dialogs and warning messages should be displayed to the end-user
- `Errors` (System.Int32): Status of the document activate operation as defined in swActivateDocError_e ; if no errors or warnings are encountered, this value is set to 0

## Return Value

Model document

## Remarks

This file becomes the active document, and this method returns a pointer to that document object.
If you do not specify a file extension in the name parameter, the document activated is based on its name and ignores the file extension. This can cause problems if you have two different document types with the same name loaded; for example, 12345.sldprt and 12345.sldasm.
If you do not specify the filename extension in your call to this method, then you cannot be sure which document is activated. To avoid this problem, you can specify the file name extension in the name parameter or you can check the document type after it is activated using
IModelDoc2::GetType
.
In some instances, a document requires a rebuild when it is activated. If this is the case and you have passed True for the silent argument, then the activated document is not rebuilt and swDocNeedsRebuildWarning is returned in the errors argument. You can then programmatically rebuild the document using the
IModelDoc2::EditRebuild3
method.
If the document needs a rebuild upon activation and you have passed false for the Silent argument, then a dialog is displayed to the users asking them if they want to rebuild the document.
If the user answers...
Then the activated document is...
No
Not rebuilt and swDocNeedsRebuildWarning is returned in the errors argument.
Yes
Rebuilt immediately and this warning is not returned.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)

## See Also

- `ISldWorks.ActivateDoc2`
- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`