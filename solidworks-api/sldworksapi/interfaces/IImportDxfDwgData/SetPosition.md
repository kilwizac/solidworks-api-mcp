---
type: method
interface: IImportDxfDwgData
member: SetPosition
returns: System.Boolean
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
  -
    name: Positioning
    type: System.Int32
    description: Position as defined in swDwgImportEntitiesPositioning_e
  -
    name: X
    type: System.Double
    description: X coordinate of the origin of the imported drawing
  -
    name: Y
    type: System.Double
    description: Y coordinate of the origin of the imported drawing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetPosition
keywords:
  - setposition
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - position
  - sheet
  - string
  - positioning
  - int32
  - double
  - boolean
  - insert
  - file
  - drawing
  - vb
  - net
  - vba
---

# IImportDxfDwgData.SetPosition

Sets the position of the entities created in the drawing.

## Signature

```csharp
System.Boolean SetPosition( 
   System.String
Sheet
,
   System.Int32
Positioning
,
   System.Double
X
,
   System.Double
Y
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Positioning` (System.Int32): Position as defined in swDwgImportEntitiesPositioning_e
- `X` (System.Double): X coordinate of the origin of the imported drawing
- `Y` (System.Double): Y coordinate of the origin of the imported drawing

## Return Value

True if the position is set, false if not

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## Examples

- Insert and Position DXF/DWG File in Drawing (C#) (Insert_and_Position_DXF_File_in_Drawing_Example_CSharp.htm)
- Insert and Position DXF/DWG File in Drawing (VB.NET) (Insert_and_Position_DXF_File_in_Drawing_Example_VBNET.htm)
- Insert and Position DXF/DWG File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)

## See Also

- `IImportDxfDwgData.GetPosition`