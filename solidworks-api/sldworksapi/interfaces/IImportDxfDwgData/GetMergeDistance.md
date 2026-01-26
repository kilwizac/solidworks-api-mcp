---
type: method
interface: IImportDxfDwgData
member: GetMergeDistance
returns: System.Double
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
related:
  - IImportDxfDwgData.GetMergePoints
  - IImportDxfDwgData.SetMergePoints
keywords:
  - getmergedistance
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - merge
  - distance
  - sheet
  - string
  - double
  - file
  - part
  - sketch
  - vba
---

# IImportDxfDwgData.GetMergeDistance

Gets whether points that are within the specified distance are merged in the part sketch after entities are imported.

## Signature

```csharp
System.Double GetMergeDistance( 
   System.String
Sheet
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

Distance to determine whether two points should be merged

## Remarks

This property only supports importing to a part sketch; it does not support importing
to a drawing.
By default, points within 0.001mm are merged.

## Examples

- Import DXF File into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)

## See Also

- `IImportDxfDwgData.GetMergePoints`
- `IImportDxfDwgData.SetMergePoints`