---
type: method
interface: ISketchManager
member: MakeSketchBlockFromFile
returns: SketchBlockDefinition
parameters:
  -
    name: InsertionPoint
    type: MathPoint
    description: Insertion point , which is a 2D point with z = 0.0, for the block definition
  -
    name: FileName
    type: System.String
    description: Name of the external file to use to create the block definition
  -
    name: LinkedToFile
    type: System.Boolean
    description: True to link the block definition to the file, false to not
  -
    name: Scale
    type: System.Double
    description: Scale for the block definition
  -
    name: Angle
    type: System.Double
    description: Rotation angle for the block definition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - sketches
related:
  - ISketchBlockDefinition.FileName
  - ISketchBlockDefinition.LinkToFile
  - ISketchBlockDefinition.Save
  - ISketchManager.MakeSketchBlockFromSelected
  - ISketchManager.MakeSketchBlockFromSketch
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - definitions
  - file
  - sketch
  - isketch
  - makesketchblockfromfile
  - isketchmanager
  - manager
  - make
  - block
  - insertion
  - point
  - math
  - name
  - string
  - linked
  - boolean
  - scale
  - double
  - angle
  - definition
---

# ISketchManager.MakeSketchBlockFromFile

Creates a block definition using the specified file.

## Signature

```csharp
SketchBlockDefinition MakeSketchBlockFromFile( 
   MathPoint
InsertionPoint
,
   System.String
FileName
,
   System.Boolean
LinkedToFile
,
   System.Double
Scale
,
   System.Double
Angle
)
```
## Parameters

- `InsertionPoint` (MathPoint): Insertion point , which is a 2D point with z = 0.0, for the block definition
- `FileName` (System.String): Name of the external file to use to create the block definition
- `LinkedToFile` (System.Boolean): True to link the block definition to the file, false to not
- `Scale` (System.Double): Scale for the block definition
- `Angle` (System.Double): Rotation angle for the block definition

## Return Value

Block definition

## Remarks

If the entities of a block are associated with one or more layers and those layers do not already exist in the drawing, then the layers are inserted in the drawing and the associations between the entities of the block and the layers are maintained.
The block instance is inserted on the current drawing layer.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchBlockDefinition.FileName`
- `ISketchBlockDefinition.LinkToFile`
- `ISketchBlockDefinition.Save`
- `ISketchManager.MakeSketchBlockFromSelected`
- `ISketchManager.MakeSketchBlockFromSketch`