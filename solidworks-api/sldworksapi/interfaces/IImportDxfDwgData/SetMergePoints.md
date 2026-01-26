---
type: method
interface: IImportDxfDwgData
member: SetMergePoints
returns: System.Boolean
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
  -
    name: Merge
    type: System.Boolean
    description: True to merge near-identical points, false to not
  -
    name: Distance
    type: System.Double
    description: Distance to determine whether two points should be merged
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetMergeDistance
  - IImportDxfDwgData.GetMergePoints
keywords:
  - setmergepoints
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - merge
  - points
  - sheet
  - string
  - boolean
  - distance
  - double
  - file
  - part
  - sketch
  - vba
---

# IImportDxfDwgData.SetMergePoints

Sets whether near-identical points within the specified distance are merged in the part sketch after entities are imported.

## Signature

```csharp
System.Boolean SetMergePoints( 
   System.String
Sheet
,
   System.Boolean
Merge
,
   System.Double
Distance
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Merge` (System.Boolean): True to merge near-identical points, false to not
- `Distance` (System.Double): Distance to determine whether two points should be merged

## Return Value

True if near-identical points within the specified distance are merged, false if not

## Remarks

This property only supports importing to a part sketch; it does not support importing to a drawing.
By default, points within 0.001mm are merged.

## Examples

- Import DXF file into Part Sketch (VBA) (Import_DXF_File_into_Part_Sketch_Example_VB.htm)

## See Also

- `IImportDxfDwgData.GetMergeDistance`
- `IImportDxfDwgData.GetMergePoints`