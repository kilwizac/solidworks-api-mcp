---
type: method
interface: ISketchManager
member: SketchUseEdge
returns: System.Boolean
parameters:
  -
    name: Chain
    type: System.Boolean
    description: True if to convert the entire chain of entities, false to convert only the selected sketch entities (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
  - sketches
related: []
keywords:
  - sketchuseedge
  - isketchmanager
  - sketch
  - manager
  - use
  - edge
  - chain
  - boolean
  - insert
  - sheet
  - metal
  - flange
  - vba
  - offset
  - selected
  - edges
  - active
---

# ISketchManager.SketchUseEdge

Obsolete. Superseded by ISketchManager::SketchUseEdge2.

## Signature

```csharp
System.Boolean SketchUseEdge( 
   System.Boolean
Chain
)
```
## Parameters

- `Chain` (System.Boolean): True if to convert the entire chain of entities, false to convert only the selected sketch entities (see Remarks )

## Return Value

True if the sketch entities are created, false if not

## Remarks

Specifying true for the Chain argument converts the selected entity and any other entities that belong to the same contour or chain (contiguous, geometric entities like edges) on a sketch plane.
To display all sketch relations symbols, set
IModelDoc2::SetUserPreferenceToggle
swViewSketchRelations to true, which can adversely affect performance. To hide all sketch relation symbols, set IModelDoc2::SetUserPreferenceToggle swViewSketchRelations to false, which can improve performance and was the default setting prior to SOLIDWORKS 2005.
See
IModelDoc2::SketchOffsetEntities2
method for similar functionality.

## Examples

- Insert Sheet Metal Edge Flange (VBA) (Insert_Sheet_Metal_Edge_Flange_Example_VB.htm)
- Offset Selected Edges in Active Sketch (VBA) (Offset_Selected_Edges_in_Active_Sketch_Example_VB.htm)