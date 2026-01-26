---
type: method
interface: ISldWorks
member: INewDocument2
returns: ModelDoc2
parameters:
  -
    name: TemplateName
    type: System.String
    description: Name of the template to use for creating the new document
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper as defined in swDwgPaperSizes_e
  -
    name: Width
    type: System.Double
    description: Width of paper; used only when PaperSize is swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Height of paper; used only when PaperSize is swDwgPapersUserDefined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDocumentTemplate
  - ISldWorks.NewDocument
keywords:
  - document
  - new
  - inewdocument2
  - isldworks
  - sld
  - works
  - document2
  - template
  - name
  - string
  - paper
  - size
  - int32
  - width
  - double
  - height
  - model
  - doc2
  - access
  - assembly
---

# ISldWorks.INewDocument2

Creates a new document based on the specified template.

## Signature

```csharp
ModelDoc2 INewDocument2( 
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

- `TemplateName` (System.String): Name of the template to use for creating the new document
- `PaperSize` (System.Int32): Size of paper as defined in swDwgPaperSizes_e
- `Width` (System.Double): Width of paper; used only when PaperSize is swDwgPapersUserDefined
- `Height` (System.Double): Height of paper; used only when PaperSize is swDwgPapersUserDefined

## Return Value

Newly created document or NULL if the operation fails

## Remarks

To get the default template filename, use
ISldWorks::GetUserPreferenceStringValue
:
for parts: swDefaultTemplatePart
for assemblies: swDefaultTemplateAssembly
for drawings: swDefaultTemplateDrawing

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)

## See Also

- `ISldWorks.GetDocumentTemplate`
- `ISldWorks.NewDocument`