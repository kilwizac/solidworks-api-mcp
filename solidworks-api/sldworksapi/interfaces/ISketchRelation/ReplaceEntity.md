---
type: method
interface: ISketchRelation
member: ReplaceEntity
returns: System.Boolean
parameters:
  -
    name: OldEntity
    type: System.Object
    description: Entity to replace
  -
    name: NewEntity
    type: System.Object
    description: Replacement entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - replaceentity
  - isketchrelation
  - sketch
  - relation
  - replace
  - entity
  - old
  - object
  - new
  - boolean
  - vba
---

# ISketchRelation.ReplaceEntity

Replaces an entity in this sketch relation.

## Signature

```csharp
System.Boolean ReplaceEntity( 
   System.Object
OldEntity
,
   System.Object
NewEntity
)
```
## Parameters

- `OldEntity` (System.Object): Entity to replace
- `NewEntity` (System.Object): Replacement entity

## Return Value

True if OldEntity is replaced by NewEntity, false if not

## Remarks

This method requires that the sketch be in edit mode.

## Examples

- Replace Sketch Relation (VBA) (Replace_Sketch_Relation_Example_VB.htm)