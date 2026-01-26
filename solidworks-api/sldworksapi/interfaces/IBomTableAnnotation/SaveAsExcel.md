---
type: method
interface: IBomTableAnnotation
member: SaveAsExcel
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and file name of the Microsoft Excel file to save to ( *.xls )
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include text in hidden cells, false to not
  -
    name: IncludeFileImages
    type: System.Boolean
    description: True to include file images, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related: []
keywords:
  - saveasexcel
  - ibomtableannotation
  - bom
  - table
  - annotation
  - save
  - excel
  - file
  - name
  - string
  - include
  - hidden
  - boolean
  - images
  - microsoft
  - vba
---

# IBomTableAnnotation.SaveAsExcel

Saves this BOM table annotation as a Microsoft Excel document with the specified properties.

## Signature

```csharp
System.Boolean SaveAsExcel( 
   System.String
FileName
,
   System.Boolean
IncludeHidden
,
   System.Boolean
IncludeFileImages
)
```
## Parameters

- `FileName` (System.String): Full path and file name of the Microsoft Excel file to save to ( *.xls )
- `IncludeHidden` (System.Boolean): True to include text in hidden cells, false to not
- `IncludeFileImages` (System.Boolean): True to include file images, false to not

## Return Value

True if the table is saved as a Microsoft Excel file, false if not

## Examples

- Save Table to Microsoft Excel (VBA) (Save_Table_to_Microsoft_Excel_Example_VB.htm)