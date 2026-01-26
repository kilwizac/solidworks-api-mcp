---
type: method
interface: IPartDoc
member: IExportToDWG
returns: System.Boolean
parameters:
  -
    name: FilePath
    type: System.String
    description: Full path to the exported DXF/DWG file
  -
    name: ModelName
    type: System.String
    description: Full path to the active part document
  -
    name: Action
    type: System.Int32
    description: 1 - export sheet metal (valid only if active document contains sheet metal) 2 - export selected faces or loops 3 - export annotation views
  -
    name: ExportToSingleFile
    type: System.Boolean
    description: True to save as one file; false to save in separate files
  -
    name: Alignment
    type: System.Double
    description: Array of twelve double values that contain information related to output alignment: Array[0], Array[1], Array[2] - XYZ coordinates of new origin Array[3], Array[4], Array[5] - coordinates of new x direction vector Array[6], Array[7], Array[8] - coordinates of new y direction vector Array[9], Array[10], Array[11] - coordinates of the vector that is normal to the selected faces or loops The last three elements of the array are valid only if Action = 2
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
    description: Bitmask that contains sheet metal export options; valid only if Action = 1: The bitmask is {7 6 5 4 3 2 1}, where each bit is either 0 or 1 as follows: Bit #1: 1 to export geometry; 0 to not Bit #2: 1 to include hidden edges; 0 to not Bit #3: 1 to export bend lines; 0 to not Bit #4: 1 to include sketches; 0 to not Bit #5: 1 to merge coplanar faces; 0 to not Bit #6: 1 to export library features; 0 to not Bit #7: 1 to export forming tools; 0 to not Example If you want to export flat pattern geometry, bend lines, and sketches, then Bits 1, 3, and 4 are 1, the bitmask is 0001101, and you need to set SheetMetalOptions = 2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13.
  -
    name: ViewsCount
    type: System.Int32
    description: Count of annotation views to export; valid only if Action = 3
  -
    name: Views
    type: System.String
    description: Array of annotation view names to export; valid only if Action = 3
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related:
  - IPartDoc.ExportToDWG
keywords:
  - iexporttodwg
  - ipartdoc
  - part
  - doc
  - export
  - dwg
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
  - double
  - dir
  - flipped
  - sheet
  - metal
  - options
  - views
  - count
---

# IPartDoc.IExportToDWG

Obsolete. Superseded by IPartDoc::IExportToDWG2.

## Signature

```csharp
System.Boolean IExportToDWG( 
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
   ref System.Double
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
   System.Int32
ViewsCount
,
   ref System.String
Views
)
```
## Parameters

- `FilePath` (System.String): Full path to the exported DXF/DWG file
- `ModelName` (System.String): Full path to the active part document
- `Action` (System.Int32): 1 - export sheet metal (valid only if active document contains sheet metal) 2 - export selected faces or loops 3 - export annotation views
- `ExportToSingleFile` (System.Boolean): True to save as one file; false to save in separate files
- `Alignment` (System.Double): Array of twelve double values that contain information related to output alignment: Array[0], Array[1], Array[2] - XYZ coordinates of new origin Array[3], Array[4], Array[5] - coordinates of new x direction vector Array[6], Array[7], Array[8] - coordinates of new y direction vector Array[9], Array[10], Array[11] - coordinates of the vector that is normal to the selected faces or loops The last three elements of the array are valid only if Action = 2
- `IsXDirFlipped` (System.Boolean): True to flip the x direction; false otherwise
- `IsYDirFlipped` (System.Boolean): True to flip the y direction; false otherwise
- `SheetMetalOptions` (System.Int32): Bitmask that contains sheet metal export options; valid only if Action = 1: The bitmask is {7 6 5 4 3 2 1}, where each bit is either 0 or 1 as follows: Bit #1: 1 to export geometry; 0 to not Bit #2: 1 to include hidden edges; 0 to not Bit #3: 1 to export bend lines; 0 to not Bit #4: 1 to include sketches; 0 to not Bit #5: 1 to merge coplanar faces; 0 to not Bit #6: 1 to export library features; 0 to not Bit #7: 1 to export forming tools; 0 to not Example If you want to export flat pattern geometry, bend lines, and sketches, then Bits 1, 3, and 4 are 1, the bitmask is 0001101, and you need to set SheetMetalOptions = 2^0 + 2^2 + 2^3 = 1 + 4 + 8 = 13.
- `ViewsCount` (System.Int32): Count of annotation views to export; valid only if Action = 3
- `Views` (System.String): Array of annotation view names to export; valid only if Action = 3

## Return Value

True if export is successful; false otherwise

## See Also

- `IPartDoc.ExportToDWG`