---
type: method
interface: ISketchManager
member: SketchUseEdge2
returns: System.Boolean
parameters:
  -
    name: Chain
    type: System.Boolean
    description: True to convert the entire chain of sketch entities, false to convert only the selected sketch entities (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - IModelDoc2.SketchOffsetEntities2
keywords:
  - sketchuseedge2
  - isketchmanager
  - sketch
  - manager
  - use
  - edge2
  - chain
  - boolean
  - convert
  - faces
  - edges
  - entities
  - vb
  - net
  - vba
---

# ISketchManager.SketchUseEdge2

Obsolete. Superseded by ISketchManager::SketchUseEdge3.

## Signature

```csharp
System.Boolean SketchUseEdge2( 
   System.Boolean
Chain
)
```
## Parameters

- `Chain` (System.Boolean): True to convert the entire chain of sketch entities, false to convert only the selected sketch entities (see Remarks )

## Return Value

True if the sketch entities are created, false if not

## Remarks

Specifying true for the Chain argument creates the selected sketch entity and any other sketch entities that belong to the same contour or chain (contiguous geometric sketch entities like sketch edges) on a sketch plane.
To display all sketch relations symbols, set
IModelDocExtension::SetUserPreferenceToggle
swViewSketchRelations to true, which can adversely affect performance. To hide all sketch relation symbols, set IModelDocExtension::SetUserPreferenceToggle swViewSketchRelations to false, which can improve performance and was the default setting prior to SOLIDWORKS 2005.

## Examples

- Convert Faces' Edges to Sketch Entities (VB.NET) (Convert_Faces_Edges_to_Sketch_Entities_Example_VBNET.htm)
- Convert Faces' Edges to Sketch Entities (VBA) (Convert_Faces_Edges_to_Sketch_Entities_Example_VB.htm)

## See Also

- `IModelDoc2.SketchOffsetEntities2`