---
type: method
interface: ISldWorks
member: IGetTemplateSizes
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of template with full directory path
  -
    name: PaperSize
    type: System.Int32
    description: Paper size as defined in swDwgPaperSizes_e
  -
    name: Width
    type: System.Double
    description: Custom paper width if PaperSize is set to swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Custom paper height if PaperSize is set to swDwgPapersUserDefined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDocumentTemplate
  - ISldWorks.GetTemplateSizes
  - ISldWorks.PreSelectDwgTemplateSize
keywords:
  - sheet
  - see
  - also
  - isheet
  - templates
  - sheets
  - igettemplatesizes
  - isldworks
  - sld
  - works
  - template
  - sizes
  - file
  - name
  - string
  - paper
  - size
  - int32
  - width
  - double
  - height
  - boolean
---

# ISldWorks.IGetTemplateSizes

Gets the sheet properties from a template document.

## Signature

```csharp
System.Boolean IGetTemplateSizes( 
   System.String
FileName
,
   out System.Int32
PaperSize
,
   out System.Double
Width
,
   out System.Double
Height
)
```
## Parameters

- `FileName` (System.String): Name of template with full directory path
- `PaperSize` (System.Int32): Paper size as defined in swDwgPaperSizes_e
- `Width` (System.Double): Custom paper width if PaperSize is set to swDwgPapersUserDefined
- `Height` (System.Double): Custom paper height if PaperSize is set to swDwgPapersUserDefined

## Return Value

True if the operation is successful, false if not

## See Also

- `ISldWorks.GetDocumentTemplate`
- `ISldWorks.GetTemplateSizes`
- `ISldWorks.PreSelectDwgTemplateSize`