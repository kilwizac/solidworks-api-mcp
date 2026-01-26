---
type: method
interface: ISketchManager
member: MakeSketchBlockFromSketch
returns: SketchBlockDefinition
parameters:
  -
    name: InsertionPoint
    type: MathPoint
    description: Insertion point , which is a 2D point with z = 0.0, for the block definition
  -
    name: Sketch
    type: Sketch
    description: Sketch to use
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.MakeSketchBlockFromFile
  - ISketchManager.MakeSketchBlockFromSelected
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - definitions
  - sketch
  - isketch
  - makesketchblockfromsketch
  - isketchmanager
  - manager
  - make
  - block
  - insertion
  - point
  - math
  - definition
---

# ISketchManager.MakeSketchBlockFromSketch

Creates a block definition at the specified location using all of the sketch entities in the active sketch.

## Signature

```csharp
SketchBlockDefinition MakeSketchBlockFromSketch( 
   MathPoint
InsertionPoint
,
   Sketch
Sketch
)
```
## Parameters

- `InsertionPoint` (MathPoint): Insertion point , which is a 2D point with z = 0.0, for the block definition
- `Sketch` (Sketch): Sketch to use

## Return Value

Block definition

## Remarks

See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchManager.MakeSketchBlockFromFile`
- `ISketchManager.MakeSketchBlockFromSelected`