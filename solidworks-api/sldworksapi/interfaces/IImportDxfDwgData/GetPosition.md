---
type: method
interface: IImportDxfDwgData
member: GetPosition
returns: void
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
  - IImportDxfDwgData.SetPosition
keywords:
  - getposition
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
  - void
---

# IImportDxfDwgData.GetPosition

Gets the position of the entities created in the drawing.

## Signature

```csharp
void GetPosition( 
   System.String
Sheet
,
   out System.Int32
Positioning
,
   out System.Double
X
,
   out System.Double
Y
)
```
## Parameters

- `Sheet` (System.String): Sheet (layout) name of the input file or an empty string for all sheets
- `Positioning` (System.Int32): Position as defined in swDwgImportEntitiesPositioning_e
- `X` (System.Double): X coordinate of the origin of the imported drawing
- `Y` (System.Double): Y coordinate of the origin of the imported drawing

## Return Value

Unknown.

## Remarks

This method only supports importing to a drawing; it does not support importing to a part sketch.

## See Also

- `IImportDxfDwgData.SetPosition`