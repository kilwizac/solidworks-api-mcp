---
type: method
interface: IImportDxfDwgData
member: GetImportLayerVisibility
returns: System.Int32
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
  - IImportDxfDwgData.GetImportLayerToSheetFormat
  - IImportDxfDwgData.ImportMethod
  - IImportDxfDwgData.SetImportLayerToSheetFormat
  - IImportDxfDwgData.SetImportLayerVisibility
keywords:
  - getimportlayervisibility
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - layer
  - visibility
  - string
  - int32
---

# IImportDxfDwgData.GetImportLayerVisibility

Gets whether the specified layer is imported hidden or visible.

## Signature

```csharp
System.Int32 GetImportLayerVisibility( 
   System.String
Layer
)
```
## Parameters

- `Layer` (System.String): Name of the layer

## Return Value

Visibility state as defined in swImportDxfDwg_LayerVisibility_e

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## See Also

- `IImportDxfDwgData.GetImportLayerToSheetFormat`
- `IImportDxfDwgData.ImportMethod`
- `IImportDxfDwgData.SetImportLayerToSheetFormat`
- `IImportDxfDwgData.SetImportLayerVisibility`