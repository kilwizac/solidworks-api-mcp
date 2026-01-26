---
type: method
interface: ISketchManager
member: SketchOffset
returns: System.Boolean
parameters:
  -
    name: Offset
    type: System.Double
    description: Offset value; negative value offsets in opposite direction
  -
    name: BothDirections
    type: System.Boolean
    description: True to offset the sketch entities in both directions, false to not
  -
    name: Chain
    type: System.Boolean
    description: True to offset the chain of sketch entities, false if you want only the selected sketch entities offset (see Remarks )
  -
    name: CapEnds
    type: System.Boolean
    description: True to cap the bidirectional offset with arcs, false to not
  -
    name: MakeConstruction
    type: System.Boolean
    description: True to make the sketch entities construction geometry after offsetting, false to not
  -
    name: AddDimensions
    type: System.Boolean
    description: True to include the offset distance in the sketch, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketchoffset
  - isketchmanager
  - sketch
  - manager
  - offset
  - double
  - both
  - directions
  - boolean
  - chain
  - cap
  - ends
  - make
  - construction
  - add
  - dimensions
---

# ISketchManager.SketchOffset

Obsolete. Superseded by ISketchManager::SketchOffset2.

## Signature

```csharp
System.Boolean SketchOffset( 
   System.Double
Offset
,
   System.Boolean
BothDirections
,
   System.Boolean
Chain
,
   System.Boolean
CapEnds
,
   System.Boolean
MakeConstruction
,
   System.Boolean
AddDimensions
)
```
## Parameters

- `Offset` (System.Double): Offset value; negative value offsets in opposite direction
- `BothDirections` (System.Boolean): True to offset the sketch entities in both directions, false to not
- `Chain` (System.Boolean): True to offset the chain of sketch entities, false if you want only the selected sketch entities offset (see Remarks )
- `CapEnds` (System.Boolean): True to cap the bidirectional offset with arcs, false to not
- `MakeConstruction` (System.Boolean): True to make the sketch entities construction geometry after offsetting, false to not
- `AddDimensions` (System.Boolean): True to include the offset distance in the sketch, false to not

## Return Value

True if the sketch entities are offset, false if not

## Remarks

Specifying true to the Chain argument offsets the selected entity and any other entities that belong to the same contour or chain (contiguous geometric entities like edges).