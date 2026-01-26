---
type: property
interface: IImportDxfDwgData
member: ImportDimensions
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
  - dimensions
  - documents
  - file-io
related: []
keywords:
  - importdimensions
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - dimensions
  - sheet
  - string
  - boolean
  - file
  - part
  - sketch
  - vba
readonly: null
---

# IImportDxfDwgData.ImportDimensions

Gets or sets whether to import dimension into the part sketch.

## Signature

```csharp
System.Boolean ImportDimensions( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

True to import dimension, false to not

## Remarks

This property only supports importing to a part sketch; it does not support importing to a drawing.
By default, dimensions are not imported.

## Examples

- Import DXF File into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)