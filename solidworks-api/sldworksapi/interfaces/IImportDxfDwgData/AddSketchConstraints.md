---
type: property
interface: IImportDxfDwgData
member: AddSketchConstraints
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
  - sketches
related: []
keywords:
  - addsketchconstraints
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - add
  - sketch
  - constraints
  - sheet
  - string
  - boolean
  - file
  - part
  - vba
readonly: null
---

# IImportDxfDwgData.AddSketchConstraints

Gets or sets whether constraints are added to the geometry in the part sketch after importing the entities.

## Signature

```csharp
System.Boolean AddSketchConstraints( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

True to add constraints, false to not

## Remarks

This property only supports importing to a part sketch; it does not support importing to a drawing.
By default, constraints are not added.

## Examples

- Import DXF File into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)