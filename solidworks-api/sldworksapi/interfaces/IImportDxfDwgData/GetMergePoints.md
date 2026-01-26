---
type: method
interface: IImportDxfDwgData
member: GetMergePoints
returns: System.Boolean
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
  - IImportDxfDwgData.GetMergeDistance
  - IImportDxfDwgData.SetMergePoints
keywords:
  - getmergepoints
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
---

# IImportDxfDwgData.GetMergePoints

Gets whether near-identical points are merged in the part sketch after entities are imported.

## Signature

```csharp
System.Boolean GetMergePoints( 
   System.String
Sheet
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets

## Return Value

True to merge near-identical points, false to not

## Remarks

This property only supports importing to a part sketch; it does not support importing to a drawing.
By default, points within 0.001mm are merged.

## See Also

- `IImportDxfDwgData.GetMergeDistance`
- `IImportDxfDwgData.SetMergePoints`