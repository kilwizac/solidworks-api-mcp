---
type: method
interface: IPartDoc
member: ExportToDWG2
returns: System.Boolean
parameters:
  -
    name: FilePath
    type: System.String
    description: Path and file name of the exported DXF/DWG file
  -
    name: ModelName
    type: System.String
    description: Path and file name of the active part document
  -
    name: Action
    type: System.Int32
    description: Export action as defined in swExportToDWG_e (see Remarks )
  -
    name: ExportToSingleFile
    type: System.Boolean
    description: True to save as one file; false to save as multiple files
  -
    name: Alignment
    type: System.Object
    description: Array of 12 double values that contain information related to output alignment (see Remarks )
  -
    name: IsXDirFlipped
    type: System.Boolean
    description: True to flip the x direction; false otherwise
  -
    name: IsYDirFlipped
    type: System.Boolean
    description: True to flip the y direction; false otherwise
  -
    name: SheetMetalOptions
    type: System.Int32
    description: Bitmask that contains sheet metal export options; valid only if Action = swExportToDWG_e.swExportToDWG_ExportSheetMetal (see Remarks )
  -
    name: Views
    type: System.Object
    description: Array of annotation view names to export; valid only if Action = swExportToDWG_e.swExportToDWG_ExportAnnotationViews
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related:
  - IPartDoc.ExportFlatPatternView
  - IPartDoc.IExportToDWG2
keywords:
  - annotationview
  - see
  - iannotationview
  - drawings
  - also
  - idrawingdoc
  - save
  - parts
  - dxf
  - dwg
  - face
  - iface2
  - loops
  - iloop2
  - sheet
  - metal
  - isheetmetalfeaturedata
  - files
  - export
  - exporttodwg2
  - ipartdoc
  - part
  - doc
  - dwg2
  - file
  - path
  - string
  - model
  - name
  - action
  - int32
  - single
  - boolean
  - alignment
  - object
  - dir
  - flipped
  - options
  - views
  - vba
  - vb
  - net
---

# IPartDoc.ExportToDWG2

Saves various aspects of a part (sheet metal, faces, loops, and annotation views) to one or more DXF/DWG files, preserving the specified file name.

## Signature

```csharp
System.Boolean ExportToDWG2( 
   System.String
FilePath
,
   System.String
ModelName
,
   System.Int32
Action
,
   System.Boolean
ExportToSingleFile
,
   System.Object
Alignment
,
   System.Boolean
IsXDirFlipped
,
   System.Boolean
IsYDirFlipped
,
   System.Int32
SheetMetalOptions
,
   System.Object
Views
)
```
## Parameters

- `FilePath` (System.String): Path and file name of the exported DXF/DWG file
- `ModelName` (System.String): Path and file name of the active part document
- `Action` (System.Int32): Export action as defined in swExportToDWG_e (see Remarks )
- `ExportToSingleFile` (System.Boolean): True to save as one file; false to save as multiple files
- `Alignment` (System.Object): Array of 12 double values that contain information related to output alignment (see Remarks )
- `IsXDirFlipped` (System.Boolean): True to flip the x direction; false otherwise
- `IsYDirFlipped` (System.Boolean): True to flip the y direction; false otherwise
- `SheetMetalOptions` (System.Int32): Bitmask that contains sheet metal export options; valid only if Action = swExportToDWG_e.swExportToDWG_ExportSheetMetal (see Remarks )
- `Views` (System.Object): Array of annotation view names to export; valid only if Action = swExportToDWG_e.swExportToDWG_ExportAnnotationViews

## Return Value

True if export is successful; false if not

## Remarks

This method supersedes IPartDoc::IExportToDWG by:
Adding an option to SheetMetalOptions to export a sheet metal bounding box.
Not pre-pending the flat-pattern name to the FilePath file name of the exported DXF/DWG when ExportToSingleFile is false.
Alignment array is as follows:
Array[0], Array[1], Array[2] - x,y,z coordinates of new origin
Array[3], Array[4], Array[5] - coordinates of new x direction vector
Array[6], Array[7], Array[8] - coordinates of new y direction vector
Array[9], Array[10], Array[11] - coordinates of the vector that is normal to the selected faces or loops
NOTE:
Passing an array of 12 zeros results in a default orientation being used. This is equivalent to not selecting any edges to be used for axis alignment in the user interface.
Sheet-metal part exports are automatically constrained to align the flat-pattern normal to the 2D sheet normal, thereby limiting the degrees of freedom available to the API caller.
The last three elements of the array are valid only if Action = swExportToDWG_e.swExportToDW_ExportSelectedFacesOrLoops.
SheetMetalOptions bitmask is {14 13 12 11 10 9 8 7 6 5 4 3 2 1}, where each bit is either 0 or 1 as follows:
Bit #1: 1 to export flat-pattern geometry; 0 to not
Bit #2: 1 to include hidden edges; 0 to not
Bit #3: 1 to export bend lines; 0 to not
Bit #4: 1 to include sketches; 0 to not
Bit #5: 1 to merge coplanar faces; 0 to not
Bit #6: 1 to export library features; 0 to not
Bit #7: 1 to export forming tools; 0 to not
Bit #8: 0
Bit #9: 0
Bit #10: 0
Bit #11: 0
Bit #12: 1 to export bounding box; 0 to not
Bit #13: 1 to export cosmetic threads; 0 to not
Bit #14: 1 to export hidden sketches; 0 to not
For example, if you want to export:
flat-pattern geometry, bend lines, and sketches, then Bits 1, 3, and 4 are 1, the bitmask is 0001101, and you need to set SheetMetalOptions = 2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13.
only the bounding box, then Bit 12 is 1, the bitmask is 100000000000, and you need to set SheetMetalOptions = 2^11 = 2048.
You must select multi-body sheet-metal features (i.e., multiple flat-pattern features) before calling this method.

## Examples

- Export Part to DWG (VBA) (Export_Part_To_DWG_Example_VB.htm)
- Export Part to DWG (VB.NET) (Export_Part_To_DWG_Example_VBNET.htm)
- Export Part to DWG (C#) (Export_Part_To_DWG_Example_CSharp.htm)

## See Also

- `IPartDoc.ExportFlatPatternView`
- `IPartDoc.IExportToDWG2`