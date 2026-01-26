---
type: method
interface: IImportDxfDwgData
member: GetSheetScale
returns: void
parameters:
  -
    name: Sheet
    type: System.String
    description: Sheet (layout) name of the input file or an empty string for all sheets
  -
    name: Numerator
    type: System.Double
    description: Numerator of the scale
  -
    name: Denominator
    type: System.Double
    description: Denominator of the scale
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.SetSheetScale
keywords:
  - getsheetscale
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - sheet
  - scale
  - string
  - numerator
  - double
  - denominator
  - void
---

# IImportDxfDwgData.GetSheetScale

Gets the sheet scale for the drawing.

## Signature

```csharp
void GetSheetScale( 
   System.String
Sheet
,
   out System.Double
Numerator
,
   out System.Double
Denominator
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Numerator` (System.Double): Numerator of the scale
- `Denominator` (System.Double): Denominator of the scale

## Return Value

Unknown.

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## See Also

- `IImportDxfDwgData.SetSheetScale`