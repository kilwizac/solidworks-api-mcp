---
type: method
interface: ISldWorks
member: GetImportFileData
returns: System.Object
parameters:
  -
    name: FileName
    type: System.String
    description: Path and name of the IGES or DXF/DWG file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IFeatureManager.InsertDwgOrDxfFile2
  - ISldWorks.LoadFile4
keywords:
  - iges
  - files
  - see
  - also
  - iimportigesdata
  - data
  - dxf
  - dwg
  - import
  - getimportfiledata
  - isldworks
  - sld
  - works
  - file
  - name
  - string
  - object
  - part
  - sketch
  - vba
  - drawing
  - insert
  - add
  - dimensions
  - vb
  - net
  - position
  - specify
  - levels
  - values
---

# ISldWorks.GetImportFileData

Gets the IGES or DXF/DWG import data for the specified file.

## Signature

```csharp
System.Object GetImportFileData( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and name of the IGES or DXF/DWG file

## Return Value

IGES import data or DXF/DWG import data

## Remarks

Getting the interface object does not retrieve any information from the input file or set up defaults at this time. Instead, it sets up information such that when it is used in the import process, SOLIDWORKS will compute defaults on the fly.

## Examples

- Import DXF File Into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)
- Import DXF File Into Drawing (VBA) (Import_DXF_File_to_Drawing_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VB.NET) (Insert_DXF_File_and_Add_Dimensions_Example_VBNET.htm)
- Insert DXF/DWG File and Add Dimensions (C#) (Insert_DXF_File_and_Add_Dimensions_Example_CSharp.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)

## See Also

- `IFeatureManager.InsertDwgOrDxfFile2`
- `ISldWorks.LoadFile4`