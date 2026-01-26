---
type: property
interface: IImportDxfDwgData
member: LengthUnit
returns: System.Int32
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
  - lengthunit
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - length
  - unit
  - sheet
  - string
  - int32
  - file
  - drawing
  - vba
  - insert
  - add
  - dimensions
  - vb
  - net
  - position
readonly: null
---

# IImportDxfDwgData.LengthUnit

Gets or sets the length units for the drawing.

## Signature

```csharp
System.Int32 LengthUnit( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

Length as defined in swLengthUnit_e

## Remarks

By default, the length is determined from the header of the input DWG/DXF file.

## Examples

- Import DXF File into Drawing (VBA) (Import_DXF_File_to_Drawing_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VB.NET) (Insert_DXF_File_and_Add_Dimensions_Example_VBNET.htm)
- Insert DXF/DWG File and Add Dimensions (C#) (Insert_DXF_File_and_Add_Dimensions_Example_CSharp.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)