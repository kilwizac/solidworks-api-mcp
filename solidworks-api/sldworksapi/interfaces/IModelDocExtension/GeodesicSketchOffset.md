---
type: method
interface: IModelDocExtension
member: GeodesicSketchOffset
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset distance
  -
    name: Reverse
    type: System.Boolean
    description: True to reverse the offset direction, false to not
  -
    name: MakeConstruct
    type: System.Boolean
    description: True to make sketch construction geometry after offsetting, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - sketches
  - ui
related:
  - IModelDoc2.SketchOffsetEdges
  - IModelDoc2.SketchOffsetEntities2
  - ISketchManager.SketchOffset2
keywords:
  - sketch
  - see
  - also
  - isketch
  - offset
  - geodesicsketchoffset
  - imodeldocextension
  - model
  - doc
  - extension
  - geodesic
  - double
  - reverse
  - boolean
  - make
  - construct
---

# IModelDocExtension.GeodesicSketchOffset

Creates a geodesic sketch offset along the curvature of a surface.

## Signature

```csharp
System.Boolean GeodesicSketchOffset( 
   System.Double
Offset
,
   System.Boolean
Reverse
,
   System.Boolean
MakeConstruct
)
```
## Parameters

- `Offset` (System.Double): Offset distance
- `Reverse` (System.Boolean): True to reverse the offset direction, false to not
- `MakeConstruct` (System.Boolean): True to make sketch construction geometry after offsetting, false to not

## Return Value

True if the sketch offset is created, false if not

## Remarks

To create a Euclidean sketch offset, use
IModelDocExtension::SketchOffsetOnSurface
.
Before calling this method, call
IModelDocExtension::SelectByID2
for each edge to offset and set Append to true and Mark to 1.
After calling this method, call
ISketchManager::InsertSketch
to rebuild the model with the 3D sketch.

## See Also

- `IModelDoc2.SketchOffsetEdges`
- `IModelDoc2.SketchOffsetEntities2`
- `ISketchManager.SketchOffset2`