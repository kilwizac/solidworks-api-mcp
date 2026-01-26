---
type: property
interface: IImportDxfDwgData
member: ImportHatch
returns: System.Boolean
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
  - importhatch
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - hatch
  - sheet
  - string
  - boolean
  - file
  - part
  - sketch
  - vba
readonly: null
---

# IImportDxfDwgData.ImportHatch

Gets or sets whether to import hatch into this part sketch.

## Signature

```csharp
System.Boolean ImportHatch( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

True to import hatch, false to not

## Remarks

This property only supports importing to a part sketch; it does not support importing to a drawing.
By default, hatch will be imported.

## Examples

- Import DXF File into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)