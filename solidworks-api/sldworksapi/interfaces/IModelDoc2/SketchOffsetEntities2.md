---
type: method
interface: IModelDoc2
member: SketchOffsetEntities2
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset distance in meters
  -
    name: BothDirections
    type: System.Boolean
    description: True to offset in both directions, false to not
  -
    name: Chain
    type: System.Boolean
    description: True if you want entire chain of entities offset, false if you want only selected sketch entities offset (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SketchOffsetEdges
  - IModelDocExtension.SketchOffsetOnSurface
  - ISketchManager.SketchUseEdge2
keywords:
  - offset
  - sketch
  - geometry
  - tools
  - see
  - also
  - isketch
  - sketchoffsetentities2
  - imodeldoc2
  - model
  - doc2
  - entities2
  - double
  - both
  - directions
  - boolean
  - chain
---

# IModelDoc2.SketchOffsetEntities2

Generates entities in the active sketch by offsetting the selected geometry by the specified amount.

## Signature

```csharp
System.Boolean SketchOffsetEntities2( 
   System.Double
Offset
,
   System.Boolean
BothDirections
,
   System.Boolean
Chain
)
```
## Parameters

- `Offset` (System.Double): Offset distance in meters
- `BothDirections` (System.Boolean): True to offset in both directions, false to not
- `Chain` (System.Boolean): True if you want entire chain of entities offset, false if you want only selected sketch entities offset (see Remarks )

## Return Value

True if the offset is successful, false if not

## Remarks

The geometry selected for offset can be an edge, loop, face, external sketch curve, external sketch contour, set of edges, or set of external sketch curves.
Specifying true for the Chain argument offsets the selected entity and any other entities that belong to the same contour or chain (contiguous, geometric entities like edges).
NOTE:
If the selected geometry is a sketch item, it must be an external sketch curve (for example, it cannot be an item in the active sketch). To offset sketch segments within the active sketch, use
IModelDoc2::SketchOffset2
.

## See Also

- `IModelDoc2.SketchOffsetEdges`
- `IModelDocExtension.SketchOffsetOnSurface`
- `ISketchManager.SketchUseEdge2`