---
type: method
interface: IImportDxfDwgData
member: GetPaperSize
returns: void
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
  - IImportDxfDwgData.SetPaperSize
keywords:
  - getpapersize
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
  - void
---

# IImportDxfDwgData.GetPaperSize

Gets the size of the paper for the drawing.

## Signature

```csharp
void GetPaperSize( 
   System.String
Sheet
,
   out System.Int32
Size
,
   out System.Double
Height
,
   out System.Double
Width
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Size` (System.Int32): Size as defined in swDwgPaperSizes_e
- `Height` (System.Double): If Size is swDwgPapersUserDefined, then the height of the paper in meters
- `Width` (System.Double): If Size is swDwgPapersUserDefined, then the width of the paper in meters

## Return Value

Unknown.

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## See Also

- `IImportDxfDwgData.SetPaperSize`