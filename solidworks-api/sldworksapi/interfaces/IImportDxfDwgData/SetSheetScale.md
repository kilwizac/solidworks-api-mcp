---
type: method
interface: IImportDxfDwgData
member: SetSheetScale
returns: System.Boolean
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
  -
    name: Numerator
    type: System.Double
    description: Numerator of the scale
  -
    name: Denominator
    type: System.Double
    description: Denominator of the scale
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetSheetScale
keywords:
  - setsheetscale
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - sheet
  - scale
  - string
  - numerator
  - double
  - denominator
  - boolean
  - file
  - drawing
  - vba
  - insert
  - position
  - vb
  - net
---

# IImportDxfDwgData.SetSheetScale

Sets the sheet scale for the drawing.

## Signature

```csharp
System.Boolean SetSheetScale( 
   System.String
Sheet
,
   System.Double
Numerator
,
   System.Double
Denominator
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Numerator` (System.Double): Numerator of the scale
- `Denominator` (System.Double): Denominator of the scale

## Return Value

True if the sheet scale is set, false if not

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## Examples

- Import DXF File into Drawing (VBA) (Import_DXF_File_to_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)

## See Also

- `IImportDxfDwgData.GetSheetScale`