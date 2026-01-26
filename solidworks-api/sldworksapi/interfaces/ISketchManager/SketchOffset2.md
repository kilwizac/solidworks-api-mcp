---
type: method
interface: ISketchManager
member: SketchOffset2
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset value; negative value offsets the sketch entities in the opposite direction
  -
    name: BothDirections
    type: System.Boolean
    description: True to offset the sketch entities in both directions, false to offset the sketch entities in one direction
  -
    name: Chain
    type: System.Boolean
    description: True to offset the chain of sketch entities, false to offset only the selected sketch entities (see Remarks )
  -
    name: CapEnds
    type: System.Int32
    description: Cap the ends as defined by swSkOffsetCapEndType_e
  -
    name: MakeConstruction
    type: System.Int32
    description: Convert original and offset sketch entities to construction sketch entities as defined by swSkOffsetMakeConstructionType_e
  -
    name: AddDimensions
    type: System.Boolean
    description: True to include the offset distance in the sketch, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.SketchOffsetEdges
  - IModelDoc2.SketchOffsetEntities2
  - IModelDocExtension.SketchOffsetOnSurface
keywords:
  - offset
  - sketch
  - entities
  - see
  - also
  - isketch
  - sketchoffset2
  - isketchmanager
  - manager
  - offset2
  - double
  - both
  - directions
  - boolean
  - chain
  - cap
  - ends
  - int32
  - make
  - construction
  - add
  - dimensions
  - vb
  - net
  - vba
---

# ISketchManager.SketchOffset2

Offsets the selected sketch entities.

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
,
   System.Int32
CapEnds
,
   System.Int32
MakeConstruction
,
   System.Boolean
AddDimensions
)
```
## Parameters

- `Offset` (System.Double): Offset value; negative value offsets the sketch entities in the opposite direction
- `BothDirections` (System.Boolean): True to offset the sketch entities in both directions, false to offset the sketch entities in one direction
- `Chain` (System.Boolean): True to offset the chain of sketch entities, false to offset only the selected sketch entities (see Remarks )
- `CapEnds` (System.Int32): Cap the ends as defined by swSkOffsetCapEndType_e
- `MakeConstruction` (System.Int32): Convert original and offset sketch entities to construction sketch entities as defined by swSkOffsetMakeConstructionType_e
- `AddDimensions` (System.Boolean): True to include the offset distance in the sketch, false to not

## Return Value

True if the selected sketch entities are offset, false if not

## Remarks

Specifying true for Chain offsets the selected sketch entities and any other sketch entities that belong to the same contour or chain (contiguous geometric entities like edges).

## Examples

- Offset Sketch (C#) (Sketch_Offset_Example_CSharp.htm)
- Offset Sketch (VB.NET) (Sketch_Offset_Example_VBNET.htm)
- Offset Sketch (VBA) (Sketch_Offset_Example_VB.htm)

## See Also

- `IModelDoc2.SketchOffsetEdges`
- `IModelDoc2.SketchOffsetEntities2`
- `IModelDocExtension.SketchOffsetOnSurface`