---
type: method
interface: IFeatureManager
member: InsertDwgOrDxfFile2
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the DXF/DWG image file
  -
    name: DxfDwgImportData
    type: System.Object
    description: IImportDxfDwgData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - ISldWorks.LoadFile4
keywords:
  - dxf
  - dwg
  - files
  - image
  - insertdwgordxffile2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - file2
  - file
  - name
  - string
  - import
  - data
  - object
  - position
  - drawing
  - vba
  - vb
  - net
  - add
  - dimensions
---

# IFeatureManager.InsertDwgOrDxfFile2

Inserts a DXF/DWG image feature.

## Signature

```csharp
Feature InsertDwgOrDxfFile2( 
   System.String
FileName
,
   System.Object
DxfDwgImportData
)
```
## Parameters

- `FileName` (System.String): Name of the DXF/DWG image file
- `DxfDwgImportData` (System.Object): IImportDxfDwgData

## Return Value

IFeature

## Remarks

Before calling this method, select a plane or planar surface on which to place the image.
This method:
returns Nothing or null if the file contains solid bodies data.
is not supported for use in assembly documents.
When importing DXF/DWG data, you can:
Let SOLIDWORKS determine the default values:
Paper size and sheet scale are computed to fit the input data.
Length unit is determined from the header of the input DXF/DWG file.
Sheet name
is the same as the layout name in the input DXF/DWG file.
- or -
Set your own values:
Call
ISldWorks::GetImportFileData
to obtain the IImportDxfDwgData interface.
Use the following methods with a Sheet argument of "" (an empty string), to set up your defaults:
IImportDxfDwgData::GetPaperSize
IImportDxfDwgData::GetPosition
IImportDxfDwgData::GetSheetScale
IImportDxfDwgData::ImportMethod
IImportDxfDwgData::LengthUnit
IImportDxfDwgData::SetPaperSize
IImportDxfDwgData::SetPosition
IImportDxfDwgData::SetSheetScale
IImportDxfDwgData::SheetName
NOTES:
Getting the IImportDxfDwgData interface does not get default values from the input file. Any values not set by you are set to the values computed by SOLIDWORKS.
If the DWG/DXF file has multiple sheets, use these methods with a valid layout name in the Sheet argument to set up sheet specific settings, which override the default settings. If any of the individual items are not specified for a given layout name, then the value used is from the defaults (layout name ""). If the default value is not specified, then SOLIDWORKS computes and uses a meaningful value for that item.

## Examples

- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)
- Insert DXF/DWG File and Add Dimensions (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Insert DXF/DWG File and Add Dimensions (VB.NET) (Insert_DXF_File_and_Add_Dimensions_Example_VBNET.htm)
- Insert DXF/DWG File and Add Dimensions (C#) (Insert_DXF_File_and_Add_Dimensions_Example_CSharp.htm)

## See Also

- `ISldWorks.LoadFile4`