---
type: method
interface: IImportDxfDwgData
member: SetPaperSize
returns: System.Boolean
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
  -
    name: Size
    type: System.Int32
    description: Size as defined in swDwgPaperSizes_e
  -
    name: Height
    type: System.Double
    description: If Size is swDwgPapersUserDefined, then the height of the paper in meters
  -
    name: Width
    type: System.Double
    description: If Size is swDwgPapersUserDefined, then the width of the paper in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetPaperSize
keywords:
  - setpapersize
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - paper
  - size
  - sheet
  - string
  - int32
  - height
  - double
  - width
  - boolean
  - file
  - drawing
  - vba
  - insert
  - position
  - vb
  - net
---

# IImportDxfDwgData.SetPaperSize

Sets the size of the paper in the drawing.

## Signature

```csharp
System.Boolean SetPaperSize( 
   System.String
Sheet
,
   System.Int32
Size
,
   System.Double
Height
,
   System.Double
Width
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Size` (System.Int32): Size as defined in swDwgPaperSizes_e
- `Height` (System.Double): If Size is swDwgPapersUserDefined, then the height of the paper in meters
- `Width` (System.Double): If Size is swDwgPapersUserDefined, then the width of the paper in meters

## Return Value

True if paper size is set, false if not

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## Examples

- Import DXF File into Drawing (VBA) (Import_DXF_File_to_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)

## See Also

- `IImportDxfDwgData.GetPaperSize`