---
type: method
interface: IModelDocExtension
member: SketchOffsetOnSurface
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset distance
  -
    name: Reverse
    type: System.Boolean
    description: True to reverse the 3D sketch, false to not
  -
    name: UseFront
    type: System.Boolean
    description: Although not currently used, must be set to true
  -
    name: MakeConstruct
    type: System.Boolean
    description: True to make the 3D sketch construction geometry after offsetting, false to not
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
  - offset
  - edges
  - 3d
  - sketches
  - sketch
  - see
  - also
  - isketch
  - sketchoffsetonsurface
  - imodeldocextension
  - model
  - doc
  - extension
  - surface
  - double
  - reverse
  - boolean
  - use
  - front
  - make
  - construct
  - create
  - vb
  - net
  - vba
---

# IModelDocExtension.SketchOffsetOnSurface

Creates a Euclidean sketch offset from selected edges of a face or surface.

## Signature

```csharp
System.Boolean SketchOffsetOnSurface( 
   System.Double
Offset
,
   System.Boolean
Reverse
,
   System.Boolean
UseFront
,
   System.Boolean
MakeConstruct
)
```
## Parameters

- `Offset` (System.Double): Offset distance
- `Reverse` (System.Boolean): True to reverse the 3D sketch, false to not
- `UseFront` (System.Boolean): Although not currently used, must be set to true
- `MakeConstruct` (System.Boolean): True to make the 3D sketch construction geometry after offsetting, false to not

## Return Value

True if the 3D sketch is created, false if not

## Remarks

To create a geodesic sketch offset along the curvature of a surface, use
IModelDocExtension::GeodesicSketchOffset
.
Before calling this method, call
IModelDocExtension::SelectByID2
for each edge to offset and set Append to true and Mark to 1.
After calling this method, call
ISketchManager::InsertSketch
to rebuild the model with the 3D sketch.

## Examples

- Offset Edges to Create 3D Sketch (C#) (Offset_Edges_to_Create_3D_Sketch_on_Surface_Example_CSharp.htm)
- Offset Edges to Create 3D Sketch (VB.NET) (Offset_Edges_to_Create_3D_Sketch_on_Surface_Example_VBNET.htm)
- Offset Edges to Create 3D Sketch (VBA) (Offset_Edges_to_Create_3D_Sketch_on_Surface_Example_VB.htm)

## See Also

- `IModelDoc2.SketchOffsetEdges`
- `IModelDoc2.SketchOffsetEntities2`
- `ISketchManager.SketchOffset2`