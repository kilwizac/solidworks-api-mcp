---
type: method
interface: ISldWorks
member: ActivateDoc3
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the loaded document to activate (see Remarks )
  -
    name: UseUserPreferences
    type: System.Boolean
    description: True to rebuild as per the swRebuildOnActivation system option; false to rebuild as per Option
  -
    name: Option
    type: System.Int32
    description: Rebuild option as defined in swRebuildOnActivation_e (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Status of the activate operation as defined in swActivateDocError_e ; if no errors or warnings are encountered, then this value is 0 (see Remarks )
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
  - ISldWorks.CloseDoc
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenFileName
  - ISldWorks.IActivateDoc3
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
  - ISldWorks.LoadFile4
  - ISldWorks.OpenDoc7
keywords:
  - document
  - activate
  - activatedoc3
  - isldworks
  - sld
  - works
  - doc3
  - name
  - string
  - use
  - user
  - preferences
  - boolean
  - option
  - int32
  - errors
  - object
  - rebuild
  - activation
  - vba
  - vb
  - net
---

# ISldWorks.ActivateDoc3

Activates a loaded document and rebuilds it as specified.

## Signature

```csharp
System.Object ActivateDoc3( 
   System.String
Name
,
   System.Boolean
UseUserPreferences
,
   System.Int32
Option
,
   out System.Int32
Errors
)
```
## Parameters

- `Name` (System.String): Name of the loaded document to activate (see Remarks )
- `UseUserPreferences` (System.Boolean): True to rebuild as per the swRebuildOnActivation system option; false to rebuild as per Option
- `Option` (System.Int32): Rebuild option as defined in swRebuildOnActivation_e (see Remarks )
- `Errors` (System.Int32): Status of the activate operation as defined in swActivateDocError_e ; if no errors or warnings are encountered, then this value is 0 (see Remarks )

## Return Value

Model document

## Remarks

This method brings the document specified in Name to the foreground of SOLIDWORKS and returns a pointer to the document.
If you do not specify a file extension in Name, the document activated is based on its filename without the file extension. This can cause problems if you have loaded two different document types with the same name (e.g.,
12345.sldprt
and
12345.sldasm)
. To avoid this problem, specify the file extension in Name or check the document type after it is activated using
IModelDoc2::GetType
.
If the document needs a rebuild upon activation, and you have specified Option with
swRebuildOnActivation_e.swDontRebuildActiveDoc
, then the activated document is not rebuilt, and Errors contains
swActivateDocError_e.swDocNeedsRebuildWarning
. You can then rebuild the document using
IModelDoc2::EditRebuild3
.
If the document needs a rebuild upon activation, and you have specified Option with
swRebuildOnActivation_e.swUserDecision
, then a dialog displays asking whether to rebuild the document.
If the user answers...
Then the activated document is...
No
Not rebuilt, and Errors contains
swActivateDocError_e.swDocNeedsRebuildWarning
Yes
Rebuilt immediately

## Examples

- Rebuild Document on Activation (VBA) (Rebuild_Document_on_Activation_Example_VB.htm)
- Rebuild Document on Activation (VB.NET) (Rebuild_Document_on_Activation_Example_VBNET.htm)
- Rebuild Document on Activation (C#) (Rebuild_Document_on_Activation_Example_CSharp.htm)

## See Also

- `ISldWorks.ActiveDoc`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseAndReopen`
- `ISldWorks.CloseDoc`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.IActivateDoc3`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`
- `ISldWorks.LoadFile4`
- `ISldWorks.OpenDoc7`