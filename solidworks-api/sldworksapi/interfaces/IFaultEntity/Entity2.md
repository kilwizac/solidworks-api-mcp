---
type: property
interface: IFaultEntity
member: Entity2
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index number indicating the entity to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - entity2
  - ifaultentity
  - fault
  - entity
  - index
  - int32
  - object
readonly: true
---

# IFaultEntity.Entity2

Gets the specified entity.

## Signature

```csharp
System.Object Entity2( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): 0-based index number indicating the entity to get

## Return Value

Entity at Index or NULL if the object at Index is not an entity

## Remarks

To determine the value for Index, call
IFaultEntity::Count
before calling this property. Call
IFaultEntity::ErrorCode
to determine the error code.
This method might return NULL if the entity is absorbed by the fault.