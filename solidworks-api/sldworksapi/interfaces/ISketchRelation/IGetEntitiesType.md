---
type: method
interface: ISketchRelation
member: IGetEntitiesType
returns: System.Int32
parameters:
  -
    name: NumEntities
    type: System.Int32
    description: Number of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchRelation.GetEntities
keywords:
  - igetentitiestype
  - isketchrelation
  - sketch
  - relation
  - entities
  - type
  - num
  - int32
---

# ISketchRelation.IGetEntitiesType

Gets the types of entities in this sketch relation.

## Signature

```csharp
System.Int32 IGetEntitiesType( 
   System.Int32
NumEntities
)
```
## Parameters

- `NumEntities` (System.Int32): Number of entities

## Return Value

in-process, unmanaged C++: Pointer to an array of types of entities in this sketch relation as defined by swSketchRelationEntityTypes_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchRelation::GetEntitiesCount
to get the value for NumEntities.

## See Also

- `ISketchRelation.GetEntities`