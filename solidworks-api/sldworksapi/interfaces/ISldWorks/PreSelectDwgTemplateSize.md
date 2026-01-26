---
type: method
interface: ISldWorks
member: PreSelectDwgTemplateSize
returns: void
parameters:
  -
    name: TemplateToUse
    type: System.Int32
    description: Type of template to use as defined in swDwgTemplates_e
  -
    name: TemplateName
    type: System.String
    description: Reserved for future use; use NULL
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - ISldWorks.GetDocumentTemplate
  - ISldWorks.GetTemplateSizes
  - ISldWorks.IGetTemplateSizes
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - templates
  - preselectdwgtemplatesize
  - isldworks
  - sld
  - works
  - pre
  - select
  - dwg
  - template
  - size
  - use
  - int32
  - name
  - string
  - void
---

# ISldWorks.PreSelectDwgTemplateSize

Establishes which template to use when creating a drawing.

## Signature

```csharp
void PreSelectDwgTemplateSize( 
   System.Int32
TemplateToUse
,
   System.String
TemplateName
)
```
## Parameters

- `TemplateToUse` (System.Int32): Type of template to use as defined in swDwgTemplates_e
- `TemplateName` (System.String): Reserved for future use; use NULL

## Return Value

Unknown.

## Remarks

By calling this method and specifying a template size, no dialog appears when the end-user interactively selects
File, New, Drawing
.

## See Also

- `ISldWorks.GetDocumentTemplate`
- `ISldWorks.GetTemplateSizes`
- `ISldWorks.IGetTemplateSizes`