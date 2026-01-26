---
type: property
interface: ITableAnnotation
member: Title
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - table
  - title
  - itableannotation
  - annotation
  - string
  - components
  - each
  - bom
  - row
  - vba
  - export
  - boms
  - xml
  - vb
  - net
readonly: null
---

# ITableAnnotation.Title

Gets or sets the title for this table.

## Signature

```csharp
System.String Title {get; set;}
```
## Parameters

None.

## Return Value

Text for title of table

## Remarks

You can set the title of the table even if the title is not currently visible. See
ITableAnnotation::TitleVisible
for details.

## Examples

- Get Components for Each BOM Table Row (VBA) (Get_Components_in_Each_BOM_Table_Row_VB.htm)
- Export BOMs to XML (C#) (Export_BOMs_to_XML_Example_CSharp.htm)
- Export BOMs to XML (VB.NET) (Export_BOMs_to_XML_Example_VBNET.htm)
- Export BOMs to XML (VBA) (Export_BOMs_to_XML_Example_VB.htm)