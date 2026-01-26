---
type: method
interface: IImportDxfDwgData
member: SetImportLayerToSheetFormat
returns: System.Boolean
parameters:
  -
    name: Layers
    type: System.Object
    description: Array of strings of the names of the layers (see Remarks )
  -
    name: SheetFormat
    type: System.Boolean
    description: True to import the specified visible layers to the sheet format, false to import them to the drawing sheet
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
  - IImportDxfDwgData.SetImportLayerVisibility
keywords:
  - setimportlayertosheetformat
  - iimportdxfdwgdata
  - import
  - dxf
  - dwg
  - data
  - layer
  - sheet
  - format
  - layers
  - object
  - boolean
---

# IImportDxfDwgData.SetImportLayerToSheetFormat

Sets whether the specified visible layers are imported to the sheet format or drawing sheet.

## Signature

```csharp
System.Boolean SetImportLayerToSheetFormat( 
   System.Object
Layers
,
   System.Boolean
SheetFormat
)
```
## Parameters

- `Layers` (System.Object): Array of strings of the names of the layers (see Remarks )
- `SheetFormat` (System.Boolean): True to import the specified visible layers to the sheet format, false to import them to the drawing sheet

## Return Value

True of importing the specified visible layers was successful, false if not

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.
The Layers argument can contain either a string or an array of strings, where the strings are the layer names with which to work.
You can also specify the argument as empty, which indicates all layers. If this method is not used, the default behavior is to import all layers to the drawing sheet.
The import to sheet or sheet format Boolean is the same for all sheets that are imported; you cannot specify it on a sheet-by-sheet basis.
Visual Basic for Applications (VBA) Example
To import all layers on all sheets to drawings sheets in SOLIDWORKS (this is the default behavior):
boolstatus = ImportDxfDwgData.
SetImportLayerToSheetFormat
(emptyVariant, false)
To import layers "A" and "B" to the drawing sheet and the remaining layers to the sheet format:
boolstatus = ImportDxfDwgData.
SetImportLayerToSheetFormat
(emptyVariant, True)
layerName(0) = "A"
layerName(1) = "B"
layerVariant = layerName
boolstatus = ImportDxfDwgData.SetImportLayerToSheetFormat ((layerVariant), false)

## See Also

- `IImportDxfDwgData.GetImportLayerToSheetFormat`
- `IImportDxfDwgData.GetImportLayerVisibility`
- `IImportDxfDwgData.ImportMethod`
- `IImportDxfDwgData.SetImportLayerVisibility`