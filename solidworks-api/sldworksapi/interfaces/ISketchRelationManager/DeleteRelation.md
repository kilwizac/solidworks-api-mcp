---
type: method
interface: ISketchRelationManager
member: DeleteRelation
returns: System.Boolean
parameters:
  -
    name: ThisRelation
    type: SketchRelation
    description: Sketch relation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelationManager.DeleteAllRelations
keywords:
  - deleterelation
  - isketchrelationmanager
  - sketch
  - relation
  - manager
  - delete
  - boolean
---

# ISketchRelationManager.DeleteRelation

Deletes the specified logical sketch relation in sketch.

## Signature

```csharp
System.Boolean DeleteRelation( 
   SketchRelation
ThisRelation
)
```
## Parameters

- `ThisRelation` (SketchRelation): Sketch relation

## Return Value

True if the sketch relation is deleted, false if not

## See Also

- `ISketchRelationManager.DeleteAllRelations`