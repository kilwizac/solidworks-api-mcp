---
type: method
interface: ISldWorks
member: GetDocumentTemplate
returns: System.String
parameters:
  -
    name: Mode
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e (see Remarks )
  -
    name: TemplateName
    type: System.String
    description: Name of custom template including full directory path
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper as defined in swDwgPaperSizes_e
  -
    name: Width
    type: System.Double
    description: Width of paper; used only when paperSize is swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Height of paper; used only when paperSize is swDwgPapersUserDefined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetTemplateSizes
  - ISldWorks.IGetTemplateSizes
  - ISldWorks.PreSelectDwgTemplateSize
keywords:
  - document
  - templates
  - documents
  - getdocumenttemplate
  - isldworks
  - sld
  - works
  - template
  - mode
  - int32
  - name
  - string
  - paper
  - size
  - width
  - double
  - height
  - locations
  - names
  - vba
---

# ISldWorks.GetDocumentTemplate

Gets the name of document template that can be used in ISldWorks::NewDocument or ISldWorks::INewDocument2.

## Signature

```csharp
System.String GetDocumentTemplate( 
   System.Int32
Mode
,
   System.String
TemplateName
,
   System.Int32
PaperSize
,
   System.Double
Width
,
   System.Double
Height
)
```
## Parameters

- `Mode` (System.Int32): Document type as defined in swDocumentTypes_e (see Remarks )
- `TemplateName` (System.String): Name of custom template including full directory path
- `PaperSize` (System.Int32): Size of paper as defined in swDwgPaperSizes_e
- `Width` (System.Double): Width of paper; used only when paperSize is swDwgPapersUserDefined
- `Height` (System.Double): Height of paper; used only when paperSize is swDwgPapersUserDefined

## Return Value

Name of the selected document template

## Remarks

If type is...
Then...
swDocPART or swDocASSEMBLY
Remaining arguments are not used.
swDocDRAWING
Remaining arguments are used to determine which drawing template to use.

## Examples

- Get Locations and Names of Document Templates (VBA) (Get_Locations_and_Names_of_Document_Templates_Example_VB.htm)

## See Also

- `ISldWorks.GetTemplateSizes`
- `ISldWorks.IGetTemplateSizes`
- `ISldWorks.PreSelectDwgTemplateSize`