---
type: method
interface: ISketchBlockInstance
member: GetAttachedEntities
returns: System.Boolean
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of attached entities
  -
    name: EntityTypes
    type: System.Object
    description: Array of longs or integers (see Long vs. Integer ) of the types of attached entities (see Remarks )
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
  - attached
  - entities
  - entity
  - ientity
  - getattachedentities
  - sketch
  - block
  - instance
  - object
  - types
  - boolean
---

# ISketchBlockInstance.GetAttachedEntities

Gets the entities to which this block instance is attached.

## Signature

```csharp
System.Boolean GetAttachedEntities( 
   out System.Object
Entities
,
   out System.Object
EntityTypes
)
```
## Parameters

- `Entities` (System.Object): Array of attached entities
- `EntityTypes` (System.Object): Array of longs or integers (see Long vs. Integer ) of the types of attached entities (see Remarks )

## Return Value

True if the entities are retrieved, false if not

## Remarks

The arrays returned by this method can contain one or more different object and type.
Possible returned Entities
Possible returned EntityTypes
IFace2
swSelFACES
IEdge
swSelEDGES
IVertex
swSelVERTICES
ISketchSegment
swSelSKETCHSEGS
ISketchPoint
swSelSKETCHPOINTS
A block instance that was inserted with a leader attached to an entity remains attached to that entity even if the leader is hidden. If the leader is shown again later on, the leader still points to the entity and the block instance is still properly associated with the entity.