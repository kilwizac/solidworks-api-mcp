---
type: method
interface: IModelDoc2
member: SketchOffset2
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset value; negative value offsets in opposite direction
  -
    name: BothDirections
    type: System.Boolean
    description: True to offset in both directions, false to not
  -
    name: Chain
    type: System.Boolean
    description: True if you want the entire chain of entities offset, false if you want only the selected sketch entities offset (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SketchOffsetEdges
  - IModelDoc2.SketchOffsetEntities2
keywords:
  - sketchoffset2
  - imodeldoc2
  - model
  - doc2
  - sketch
  - offset2
  - offset
  - double
  - both
  - directions
  - boolean
  - chain
---

# IModelDoc2.SketchOffset2

Obsolete. Superseded by ISketchManager::SketchOffset.

## Signature

```csharp
System.Boolean SketchOffset2( 
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

- `Offset` (System.Double): Offset value; negative value offsets in opposite direction
- `BothDirections` (System.Boolean): True to offset in both directions, false to not
- `Chain` (System.Boolean): True if you want the entire chain of entities offset, false if you want only the selected sketch entities offset (see Remarks )

## Return Value

True if the offset is successful, false if not

## Remarks

Specifying true for the Chain argument offsets the selected entity and any other entities that belong to the same contour or chain (contiguous, geometric entities like edges).

## See Also

- `IModelDoc2.SketchOffsetEdges`
- `IModelDoc2.SketchOffsetEntities2`