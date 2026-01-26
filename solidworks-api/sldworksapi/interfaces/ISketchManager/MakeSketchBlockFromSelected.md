---
type: method
interface: ISketchManager
member: MakeSketchBlockFromSelected
returns: SketchBlockDefinition
parameters:
  -
    name: InsertionPoint
    type: MathPoint
    description: Insertion point , which is a 2D point with z = 0.0, for the block definition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related:
  - ISketchManager.MakeSketchBlockFromFile
  - ISketchManager.MakeSketchBlockFromSketch
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
  - makesketchblockfromselected
  - isketchmanager
  - manager
  - make
  - block
  - selected
  - insertion
  - point
  - math
  - definition
  - create
  - insert
  - instance
  - vba
  - vb
  - net
---

# ISketchManager.MakeSketchBlockFromSelected

Creates a block definition at the specified location from the selected entities.

## Signature

```csharp
SketchBlockDefinition MakeSketchBlockFromSelected( 
   MathPoint
InsertionPoint
)
```
## Parameters

- `InsertionPoint` (MathPoint): Insertion point , which is a 2D point with z = 0.0, for the block definition

## Return Value

Block definition

## Remarks

See
Block Definitions and Block Instances
for details.

## Examples

- Create Block Definition and Insert Block Instance (VBA) (Create_Block_Definition_and_Insert_Block_Instance_Example_VB.htm)
- Create Block Definition and Insert Block Instance (C#) (Create_Block_Definition_and_Insert_Block_Instance_Example_CSharp.htm)
- Create Block Definition and Insert Block Instance (VB.NET) (Create_Block_Definition_and_Insert_Block_Instance_Example_VBNET.htm)

## See Also

- `ISketchManager.MakeSketchBlockFromFile`
- `ISketchManager.MakeSketchBlockFromSketch`