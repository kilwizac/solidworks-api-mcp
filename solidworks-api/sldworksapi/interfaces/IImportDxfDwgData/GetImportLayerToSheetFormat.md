---
type: method
interface: IImportDxfDwgData
member: GetImportLayerToSheetFormat
returns: System.Boolean
parameters:
  -
    name: Layer
    type: System.String
    description: Name of the layer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetImportLayerVisibility
  - IImportDxfDwgData.ImportMethod
  - IImportDxfDwgData.SetImportLayerToSheetFormat
  - IImportDxfDwgData.SetImportLayerVisibility
keywords:
  - getimportlayertosheetformat
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - layer
  - sheet
  - format
  - string
  - boolean
---

# IImportDxfDwgData.GetImportLayerToSheetFormat

Gets whether the specified visible layer is imported to the drawing sheet or sheet format.

## Signature

```csharp
System.Boolean GetImportLayerToSheetFormat( 
   System.String
Layer
)
```
## Parameters

- `Layer` (System.String): Name of the layer

## Return Value

True to import the specified visible layer to the sheet format, false to import it to the drawing sheet

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## See Also

- `IImportDxfDwgData.GetImportLayerVisibility`
- `IImportDxfDwgData.ImportMethod`
- `IImportDxfDwgData.SetImportLayerToSheetFormat`
- `IImportDxfDwgData.SetImportLayerVisibility`