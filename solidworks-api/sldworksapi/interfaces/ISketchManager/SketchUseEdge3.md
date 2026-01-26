---
type: method
interface: ISketchManager
member: SketchUseEdge3
returns: System.Boolean
parameters:
  -
    name: Chain
    type: System.Boolean
    description: True to convert an entire chain of sketch entities, false to convert only the selected sketch entities (see Remarks )
  -
    name: InnerLoops
    type: System.Boolean
    description: True to convert the inner loops of the selected faces to sketch entities, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - IModelDoc2.SketchOffsetEntities2
keywords:
  - convert
  - entities
  - sketch
  - see
  - also
  - isketch
  - tools
  - sketchuseedge3
  - isketchmanager
  - manager
  - use
  - edge3
  - chain
  - boolean
  - inner
  - loops
  - edges
  - face
  - vb
  - net
  - vba
---

# ISketchManager.SketchUseEdge3

Creates sketch entities on a sketch plane by projecting selected edges, loops, faces, curves, and external sketch contours.

## Signature

```csharp
System.Boolean SketchUseEdge3( 
   System.Boolean
Chain
,
   System.Boolean
InnerLoops
)
```
## Parameters

- `Chain` (System.Boolean): True to convert an entire chain of sketch entities, false to convert only the selected sketch entities (see Remarks )
- `InnerLoops` (System.Boolean): True to convert the inner loops of the selected faces to sketch entities, false to not

## Return Value

True if the sketch entities are created, false if not

## Remarks

Specifying true for the Chain argument creates the selected sketch entity and any other sketch entities that belong to the same sketch contour or chain (contiguous geometric entities like sketch edges) on the sketch plane.
To display all sketch relations symbols, set
IModelDocExtension::SetUserPreferenceToggle
swViewSketchRelations to true, which can adversely affect performance. To hide all sketch relation symbols, set IModelDocExtension::SetUserPreferenceToggle swViewSketchRelations to false, which can improve performance and was the default setting prior to SOLIDWORKS 2005.

## Examples

- Convert Edges and Inner Loops of Face to Sketch Entities (C#) (Convert_Edges_and_Inner_Loops_of_Face_to_Sketch_Entities_Example_CSharp.htm)
- Convert Edges and Inner Loops of Face to Sketch Entities (VB.NET) (Convert_Edges_and_Inner_Loops_of_Face_to_Sketch_Entities_Example_VBNET.htm)
- Convert Edges and Inner Loops of Face to Sketch Entities (VBA) (Convert_Edges_and_Inner_Loops_of_Face_to_Sketch_Entities_Example_VB.htm)

## See Also

- `IModelDoc2.SketchOffsetEntities2`