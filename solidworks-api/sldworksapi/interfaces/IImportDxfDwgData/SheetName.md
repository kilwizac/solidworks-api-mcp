---
type: property
interface: IImportDxfDwgData
member: SheetName
returns: System.String
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - sheetname
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - sheet
  - name
  - string
  - file
  - drawing
  - vba
readonly: null
---

# IImportDxfDwgData.SheetName

Gets or sets the name of the sheet for the drawing.

## Signature

```csharp
System.String SheetName( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

Name of sheet

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## Examples

- Import DXF File into Drawing (VBA) (Import_DXF_File_to_Drawing_Example_VB.htm)