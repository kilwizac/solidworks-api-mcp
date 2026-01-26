---
type: method
interface: IModelDoc2
member: SketchConstraintsDelAll
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SkToolsAutoConstr
  - IModelDoc2.SketchAddConstraints
  - IModelDoc2.SketchConstrainCoincident
  - IModelDoc2.SketchConstrainConcentric
  - IModelDoc2.SketchConstrainParallel
  - IModelDoc2.SketchConstrainPerp
  - IModelDoc2.SketchConstrainTangent
  - IModelDoc2.SketchConstraintsDel
keywords:
  - constraints
  - relations
  - sketch
  - see
  - also
  - isketch
  - entities
  - sketchconstraintsdelall
  - imodeldoc2
  - model
  - doc2
  - del
  - all
  - void
  - delete
  - selected
  - vba
---

# IModelDoc2.SketchConstraintsDelAll

Deletes all of the constraints on the currently selected sketch segment.

## Signature

```csharp
void SketchConstraintsDelAll()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Only the constraints on the currently selected sketch segment are deleted. If two or more sketch segments are selected, this method has no effect.

## Examples

- Delete All Constraints in Selected Sketch (VBA) (Delete_All_Constraints_in_Selected_Sketch_Example_VB.htm)

## See Also

- `IModelDoc2.SkToolsAutoConstr`
- `IModelDoc2.SketchAddConstraints`
- `IModelDoc2.SketchConstrainCoincident`
- `IModelDoc2.SketchConstrainConcentric`
- `IModelDoc2.SketchConstrainParallel`
- `IModelDoc2.SketchConstrainPerp`
- `IModelDoc2.SketchConstrainTangent`
- `IModelDoc2.SketchConstraintsDel`