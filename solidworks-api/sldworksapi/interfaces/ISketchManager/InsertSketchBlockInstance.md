---
type: method
interface: ISketchManager
member: InsertSketchBlockInstance
returns: SketchBlockInstance
parameters:
  -
    name: BlockDef
    type: SketchBlockDefinition
    description: Block for this block instance
  -
    name: Position
    type: MathPoint
    description: Position of this block instance
  -
    name: Scale
    type: System.Double
    description: Scale for this block instance
  -
    name: Angle
    type: System.Double
    description: Rotation angle for this block instance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - instances
  - sketch
  - isketch
  - insertsketchblockinstance
  - isketchmanager
  - manager
  - insert
  - block
  - instance
  - def
  - definition
  - position
  - math
  - point
  - scale
  - double
  - angle
  - create
  - vba
  - vb
  - net
---

# ISketchManager.InsertSketchBlockInstance

Inserts a block instance at the specified location using the block definition.

## Signature

```csharp
SketchBlockInstance InsertSketchBlockInstance( 
   SketchBlockDefinition
BlockDef
,
   MathPoint
Position
,
   System.Double
Scale
,
   System.Double
Angle
)
```
## Parameters

- `BlockDef` (SketchBlockDefinition): Block for this block instance
- `Position` (MathPoint): Position of this block instance
- `Scale` (System.Double): Scale for this block instance
- `Angle` (System.Double): Rotation angle for this block instance

## Return Value

Block instance

## Remarks

This method creates a block definition if the block definition does not exist.
-  or -
If the definition exists, then this method uses that block definition to create the block instance. The name of the block instance is the same as the filename of the block file, without the filename extension.
If the entities of a block are associated with one or more layers and those layers do not already exist in the drawing, then the layers are inserted in the drawing and the associations between the entities of the block and the layers are maintained.
The block instance is inserted on the current drawing layer.
TIP:
If inserting the same sketch block multiple times, do not create the block definition more than once. Instead, use the same block definition for each call to SketchManager::InsertSketchBlockInstance.
To save a block instance and its definition into a block file (
.sldblk
), use
ISketchBlockDefinition::Save
.
This method does not work for drawings opened in view-only mode.
See
Block Definitions and Block Instances
for details.

## Examples

- Create Block Definition and Insert Block Instance (VBA) (Create_Block_Definition_and_Insert_Block_Instance_Example_VB.htm)
- Create Block Definition and Insert Block Instance (C#) (Create_Block_Definition_and_Insert_Block_Instance_Example_CSharp.htm)
- Create Block Definition and Insert Block Instance (VB.NET) (Create_Block_Definition_and_Insert_Block_Instance_Example_VBNET.htm)