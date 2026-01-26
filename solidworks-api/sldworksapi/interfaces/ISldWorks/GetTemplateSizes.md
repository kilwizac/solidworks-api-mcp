---
type: method
interface: ISldWorks
member: GetTemplateSizes
returns: System.Object
parameters:
  -
    name: FileName
    type: System.String
    description: Name of template with full directory path
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDocumentTemplate
  - ISldWorks.IGetTemplateSizes
  - ISldWorks.PreSelectDwgTemplateSize
keywords:
  - sheet
  - see
  - also
  - isheet
  - templates
  - sheets
  - gettemplatesizes
  - isldworks
  - sld
  - works
  - template
  - sizes
  - file
  - name
  - string
  - object
  - drawing
  - size
  - vba
---

# ISldWorks.GetTemplateSizes

Gets the sheet properties from a template document.

## Signature

```csharp
System.Object GetTemplateSizes( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of template with full directory path

## Return Value

Array of 3 doubles containing the paper size, width, and height

## Examples

- Get Drawing Template Size (VBA) (Get_Drawing_Template_Size_Example_VB.htm)

## See Also

- `ISldWorks.GetDocumentTemplate`
- `ISldWorks.IGetTemplateSizes`
- `ISldWorks.PreSelectDwgTemplateSize`