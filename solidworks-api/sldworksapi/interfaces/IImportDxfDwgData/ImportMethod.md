---
type: property
interface: IImportDxfDwgData
member: ImportMethod
returns: System.Int32
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetImportLayerVisibility
  - IImportDxfDwgData.SetImportLayerToSheetFormat
  - IImportDxfDwgData.SetImportLayerVisibility
keywords:
  - importmethod
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - sheet
  - string
  - int32
  - file
  - part
  - sketch
  - vba
  - insert
  - add
  - dimensions
  - vb
  - net
  - position
  - drawing
readonly: null
---

# IImportDxfDwgData.ImportMethod

Gets or sets whether to import this sheet (layout).

## Signature

```csharp
System.Int32 ImportMethod( 
   System.String
Sheet
) {get; set;}
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets (see Remarks )

## Return Value

Import method as defined in swImportDxfDwg_ImportMethod_e

## Remarks

By default, all sheets are imported into a new drawing.
If you want to import...
Then set...
All sheets except for a specific one into a new drawing
ImportDxfDwgData.ImportMethod("<
sheet to exclude
>") = swImportDxfDwg_DoNotImportSheet
Only a single sheet into a sketch in a new part
ImportDxfDwgData.ImportMethod("") = swImportDxfDwg_DoNotImportSheet
to make the default not to import sheets. Then set:
ImportDxfDwgData.ImportMethod("<
sheet to import
>") = swImportDxfDwg_ImportToPartSketch
to import only this sheet.

## Examples

- Import DXF File into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VB.NET) (Insert_DXF_File_and_Add_Dimensions_Example_VBNET.htm)
- Insert DXF/DWG File and Add Dimensions (C#) (Insert_DXF_File_and_Add_Dimensions_Example_CSharp.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)

## See Also

- `IImportDxfDwgData.GetImportLayerVisibility`
- `IImportDxfDwgData.SetImportLayerToSheetFormat`
- `IImportDxfDwgData.SetImportLayerVisibility`