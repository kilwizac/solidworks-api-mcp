---
type: method
interface: IImportDxfDwgData
member: SetImportLayerVisibility
returns: System.Boolean
parameters:
  -
    name: Layers
    type: System.Object
    description: Array of strings of the names of the layers (see Remarks )
  -
    name: Visibility
    type: System.Int32
    description: Visibility of the layers as defined in swImportDxfDwg_LayerVisibility_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportDxfDwgData.GetImportLayerToSheetFormat
  - IImportDxfDwgData.GetImportLayerVisibility
  - IImportDxfDwgData.ImportMethod
  - IImportDxfDwgData.SetImportLayerToSheetFormat
keywords:
  - setimportlayervisibility
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - layer
  - visibility
  - layers
  - object
  - int32
  - boolean
---

# IImportDxfDwgData.SetImportLayerVisibility

Sets whether the specified layers are imported hidden or visible.

## Signature

```csharp
System.Boolean SetImportLayerVisibility( 
   System.Object
Layers
,
   System.Int32
Visibility
)
```
## Parameters

- `Layers` (System.Object): Array of strings of the names of the layers (see Remarks )
- `Visibility` (System.Int32): Visibility of the layers as defined in swImportDxfDwg_LayerVisibility_e

## Return Value

True if setting the visibility of these layers is successful, false if not

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.
The Layers argument can contain either a string or an array of strings, where the strings are the layer names with which to work. You can also specify the argument as empty, which indicates all layers. If this method is not used, the default behavior is to import all layers with the same visibility as they have in the DXF/DWG file.
The layer visibility is the same for all sheets that are imported; you cannot specify the layer visibility on a sheet-by-sheet basis.
Hidden layers are always imported to the drawing sheet.
You should first specify the behavior that applies to all layers, using an empty VARIANT, because this overrides any information you have previously entered for specific layers. Then, you should use this method with layer names in the VARIANT, to override that default behavior on a layer-by-layer basis.
Visual Basic for Applications (VBA) Example
To import all layers with the same visibility as in the DXF/DWG file (this is the default behavior):
boolstatus = ImportDxfDwgData.
SetImportLayerVisibility
(emptyVariant, swImportDxfDwg_LayerMaintain)
To import layer "A" hidden and the remaining layers visible:
boolstatus = ImportDxfDwgData.
SetImportLayerVisibility
(emptyVariant, swImportDxfDwg_LayerVisible)
layerName = "A"
layerVariant = layerName
boolstatus = ImportDxfDwgData.
SetImportLayerVisibility
((layerVariant), swImportDxfDwg_LayerHidden)

## See Also

- `IImportDxfDwgData.GetImportLayerToSheetFormat`
- `IImportDxfDwgData.GetImportLayerVisibility`
- `IImportDxfDwgData.ImportMethod`
- `IImportDxfDwgData.SetImportLayerToSheetFormat`